import http from 'http';

const slowOperation = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error = true;
            if (error) {
                reject('Erro na operação lenta');
            } else {
                resolve('Resposta lenta...');
            }
        }, 12000);
    });
};

const server = http.createServer(async (req, res) => {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    if (req.url === '/slow') {
        try {
            const result = await slowOperation();
            res.end(result);
        } catch (error) {
            res.statusCode = 500;
            res.end(error);
        }
    } else {
        res.end('Resposta normal...');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});