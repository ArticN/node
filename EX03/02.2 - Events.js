import { EventEmitter } from 'events';

const emissor = new EventEmitter();

emissor.on('dados', (dados) => {
    if (dados && dados.info) {
      console.log('Processando dados:', dados);
    } else {
      console.log('Nenhum dado foi enviado');
    }
});

emissor.emit('dados', { info: 'Dados Importantes' });
emissor.emit('dados', null);