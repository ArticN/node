import { readFile } from 'fs';

readFile('./07codigos.txt', (error, data) => {
    console.log(`Tamanho: ${data.length}`);
});
console.log(`Processo: ${process.pid}`);