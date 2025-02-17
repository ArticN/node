function operacao() {
    for (let i = 0; i <= 1e10; i++) {
      //
    }
    return { success: true };
}

function handlerFunction(output) {
    if (!output.success) {
      //Deu erro
    }
    console.log('Deu certo!');
}

const output = operacao();
handlerFunction(output);
console.log('testando!');
