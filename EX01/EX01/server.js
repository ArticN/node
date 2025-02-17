import http from 'http';
import { URL } from 'url';
import fs from 'fs/promises';
import { readFileSync } from 'fs';

const server = http.createServer((req, res) => {
    const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
    const path = parsedUrl.pathname;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');

    switch (path) {
        case '/teste':
            res.end('Teste deu ok');
            break;

        case '/nome':
            const usuario = parsedUrl.searchParams.get('usuario');
            if (usuario) {
                res.end(`Olá ${usuario}`);
            } else {
                res.statusCode = 400;
                res.end('Parâmetro usuario é obrigatório');
            }
            break;

        case '/arquivosync':
            try {
                const conteudoSync = readFileSync('01_arquivo.txt', 'utf-8');
                res.end(conteudoSync);
            } catch (error) {
                res.statusCode = 500;
                res.end('Erro ao ler o arquivo de forma síncrona');
            }
            break;

        case '/arquivoasync':
            fs.readFile('01_arquivo.txt', 'utf-8')
                .then(conteudo => res.end(conteudo))
                .catch(err => {
                    res.statusCode = 500;
                    res.end('Erro ao ler o arquivo de forma assíncrona');
                });
            break;

        default:
            res.statusCode = 404;
            res.end('Rota não encontrada');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
