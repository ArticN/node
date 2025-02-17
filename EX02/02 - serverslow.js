import http from 'http';

const slowOperation = () => {
    for (let i = 0; i < 1e10; i++) {
    }
};

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    if (req.url === '/slow') {
        slowOperation();
        res.end('Resposta lenta...');
    } else {
        res.end('Resposta normal...');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});