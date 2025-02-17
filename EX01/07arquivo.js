import { readFileSync } from "fs";

const data = readFileSync('./07codigos.txt')
console.log(`Tamanho: ${data.length}`);
console.log(`Processo: ${process.pid}`);