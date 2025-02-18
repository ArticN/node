import { EventEmitter } from 'events';

const emissor = new EventEmitter();

emissor.on('evento', () => {
  console.log('Evento disparado!');
});

emissor.emit('evento');