import http from 'http';

const slowOperation = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve('Resposta lenta...'), 12000);
    });
};

const server = http.createServer(async (req, res) => {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    if (req.url === '/slow') {
        const result = await slowOperation();
        res.end(result);
    } else {
        res.end('Resposta normal...');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});