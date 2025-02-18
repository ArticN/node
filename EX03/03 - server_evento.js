import http from 'http';
import https from 'https';

const users = [];
var currentId = 1;

const fetchRandomUser = () => {
    return new Promise((resolve, reject) => {
        https.get('https://randomuser.me/api/', (res) => {
            let data = '';

            res.on('data', (chunk) => {
                data += chunk;
            });

            res.on('end', () => {
                try {
                    resolve(JSON.parse(data));
                } catch (error) {
                    reject(error);
                }
            });
        }).on('error', (error) => {
            reject(error);
        });
    });
};

const server = http.createServer(async (req, res) => {
    res.setHeader('Content-Type', 'application/json');

    if (req.url === '/addUser') {
        const userData = await fetchRandomUser();
        const user = {
            id: currentId++,
            nome: `${userData.results[0].name.first} ${userData.results[0].name.last}`,
            email: userData.results[0].email,
            cidade: userData.results[0].location.city,
            estado: userData.results[0].location.state,
            pais: userData.results[0].location.country,
            foto: userData.results[0].picture.thumbnail
        };
        users.push(user);
        res.end(JSON.stringify({ message: 'Usuário adicionado com sucesso!', userId: user.id }));
    }
    else if (req.url === '/users') {
        res.end(JSON.stringify(users));
    }
    else if (req.url.startsWith('/user/')) {
        const id = parseInt(req.url.split('/')[2]);
        const user = users.find(u => u.id === id);

        if (user) {
            res.end(JSON.stringify(user));
        } else {
            res.statusCode = 404;
            res.end(JSON.stringify({ error: 'Usuário não encontrado' }));
        }
    }
    else {
        res.statusCode = 404;
        res.end(JSON.stringify({ error: 'Rota não encontrada' }));
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});