import { EventEmitter } from 'events';

const notificador = new EventEmitter();

notificador.on('notificacao', (dados) => {
  if (dados && dados.mensagem) {
    console.log(`Notificação: ${dados.mensagem}`);
  } else {
    console.log('Nenhuma notificação disponível.');
  }
});

//Cirando um sistema que gera um número random, se for maior do que 0.5 ele emite uma notificação, se não ele emite um null
function enviarNotificacao() {
  const random = Math.random();
  console.log('Random:', random);
  const temDados = random > 0.5;
  if (temDados) {
    notificador.emit('notificacao', { mensagem: 'Você tem uma nova mensagem!' });
  } else {
    notificador.emit('notificacao', null);
  }
}

//Simulação: dispara notificações a cada 5 segundos
setInterval(enviarNotificacao, 5000);