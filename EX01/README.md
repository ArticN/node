# Hello, BCC!!

## Links dos vídeos de Node.Js
[Ryan Dahl: Introduction to Node.js](https://www.youtube.com/watch?v=M-sc73Y-zQA)

[Ryan Dahl: Node JS - JSConf](https://www.youtube.com/watch?v=EeYvFl7li9E)

## Console.log
> 01rand.js

## Servidor HTTP básico
> 02server.js

## NPM
```
npm init
npm instalar lodash
```
>03npm.js

```
npm install -D eslint
npm init @eslint/config@latest
```

## CommonJS e ES Modules
O CommonJS é o sistema de módulos tradicional do Node.js. Nele, os módulos são importados com a função require() e exportados usando module.exports ou exports. Essa abordagem permite carregar módulos de forma síncrona, o que é adequado para ambientes de servidor onde os arquivos já estão disponíveis localmente.

Os ES Modules são a especificação oficial para módulos JavaScript definida pela ECMAScript. Utilizam as palavras-chave import e export para gerenciar dependências de forma declarativa. Essa estrutura permite a análise estática do código, facilitando a otimização e o carregamento assíncrono.

```npm pkg set type=module```

> 04server.js

> 04index.js

## Blocking Model e Non-Blocking Model

> 05lentidao.js

> 05timeout.js

### Callback
> 06lentidao.js

### ReadFiles
> 07arquivo.js

> 07arquivo1.js

### Promisses
> 07promises.js

> 08arquivo.js

# Exercício
Desenvolver um servidor HTTP usando apenas os módulos nativos do Node.js (como http, url e fs) que atenda a quatro rotas específicas:

## Rota teste
- **URL**: /teste
- **Comportamento**: Quando acessada, a rota deve responder com o texto "Teste deu ok".

## Rota de Saudação
- **URL**: /nome?usuario=nome
- **Comportamento**: Ao acessar essa rota, o servidor deve ler o parâmetro de query usuario e responder com a mensagem "Olá {usuario}", substituindo {usuario} pelo valor informado.
Exemplo: Se o usuário acessar /nome?usuario=Maria, a resposta deve ser "Olá Maria".

## Rota de Leitura Síncrona de Arquivo
- **URL**: /arquivosync
- **Comportamento**: Nesta rota, o servidor deve ler o conteúdo de um arquivo (por exemplo, arquivo.txt) de forma síncrona, utilizando o método fs.readFileSync, e enviar o conteúdo do arquivo como resposta.

## Rota de Leitura Assíncrona de Arquivo
- **URL**: /arquivoasync
- **Comportamento**: Semelhante à rota anterior, mas aqui o servidor deverá ler o arquivo utilizando o método assíncrono fs.readFile e retornar o conteúdo do arquivo na resposta.




