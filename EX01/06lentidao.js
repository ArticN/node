function operacao(callback) {
    setTimeout(() => {
        for (let i = 0; i <= 1e10; i++) {
        //
        }
        callback({ success: true });
    },0)
}

function handlerFunction(output) {
    if (!output.success) {
      //Deu erro
    }
    console.log('Deu certo!');
}

operacao((output) => handlerFunction(output));
console.log('testando!');
