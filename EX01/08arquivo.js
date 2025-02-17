import { readFile } from 'fs/promises';

async function lerArquivo(){
    const data = await readFile('./07codigos.txt');
    console.log(`Tamanho: ${data.length}`);
}
lerArquivo();
console.log(`Processo: ${process.pid}`);