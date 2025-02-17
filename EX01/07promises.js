import { setTimeout } from 'timers/promises';

setTimeout(3_000).then(
    () => {
        console.log('BCC!');
    }
);
console.log('Olá,');