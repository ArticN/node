import { EventEmitter } from 'events';

const emissor = new EventEmitter();

emissor.on('dados', (dados) => {
  console.log('Dados recebidos:', dados);
});

emissor.emit('dados', { mensagem: 'BCC', valor: 42 });