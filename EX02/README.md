# Projeto de Aprendizado de Servidor Node.js

Este projeto demonstra os fundamentos da criação de um servidor usando Node.js. Ele explora diferentes abordagens e conceitos no desenvolvimento do lado do servidor.

## Estrutura do Projeto

```
/node
├── 01 - Exercício         # Resolção do execício da aula anterior
├── 02 - serverslow        # Implementação básica de servidor HTTP
├── 03 - serverdelay.js    # Servidor com delay na resposta
├── 04 - serverPromise.js  # Tratando os erros da promisse
└── 04 - serverPromise2.js # Tratando os erros da promisse
```

## Descrição dos Arquivos

### 01 - Exercício
O arquivo `index.js` cria um servidor HTTP usando módulos nativos do Node.js (`http`, `url`, `fs/promises`, `fs`). Ele atende a quatro rotas específicas:

1. **/teste**: Responde com "Teste deu ok".
2. **/nome?usuario=nome**: Responde com "Olá {usuario}", substituindo `{usuario}` pelo valor do parâmetro de query `usuario`.
3. **/arquivosync**: Lê e responde com o conteúdo do arquivo `01_arquivo.txt` de forma síncrona.
4. **/arquivoasync**: Lê e responde com o conteúdo do arquivo `01_arquivo.txt` de forma assíncrona.

Para outras rotas, responde com "Rota não encontrada".

### 02 - serverslow.js
O arquivo `serverslow.js` cria um servidor HTTP usando o módulo nativo `http` do Node.js. Ele atende a duas rotas específicas:

1. **/slow**: Executa uma operação lenta (um loop que bloqueia o evento de loop) e responde com "Resposta lenta...".
2. **Qualquer outra rota**: Responde com "Resposta normal...".

### 03 - serverdelay.js
O arquivo `serverdelay.js` cria um servidor HTTP usando o módulo nativo `http` do Node.js. Ele atende a duas rotas específicas:

1. **/slow**: Executa uma operação lenta simulada por uma `Promise` que resolve após 12 segundos e responde com "Resposta lenta...".
2. **Qualquer outra rota**: Responde com "Resposta normal...".

### 04 - serverPromise.js
O arquivo `serverPromise.js` cria um servidor HTTP usando o módulo nativo `http` do Node.js. Ele atende a duas rotas específicas:

1. **/slow**: Executa uma operação lenta simulada por uma `Promise` que resolve após 12 segundos. Se ocorrer um erro, a `Promise` é rejeitada com a mensagem "Erro na operação lenta". Caso contrário, responde com "Resposta lenta...".
2. **Qualquer outra rota**: Responde com "Resposta normal...".

### 04 - serverPromise2.js
O arquivo `serverPromise2.js` cria um servidor HTTP usando o módulo nativo `http` do Node.js. Ele atende a duas rotas específicas:

1. **/slow**: Executa uma operação lenta simulada por uma `Promise` que resolve após 12 segundos. Se ocorrer um erro, a `Promise` é rejeitada com a mensagem "Erro na operação lenta". Caso contrário, responde com "Resposta lenta...".
2. **Qualquer outra rota**: Responde com "Resposta normal...".


## Como Executar

1. Certifique-se de ter o Node.js instalado
2. Navegue até o diretório do projeto
3. Execute qualquer arquivo do servidor usando:
   ```
   node --watch arquivo.js
   ```
4. Abra seu navegador e acesse `http://localhost:3000`

## Observações
Cada arquivo de servidor é construído sobre os conceitos do anterior, mostrando diferentes aspectos do desenvolvimento de servidores Node.js. Os exemplos progridem de implementações básicas para mais complexas.


# Exercício: Sistema de Gerenciamento de Usuários com API Externa

Crie um servidor HTTP que gerencie usuários obtidos da API RandomUser.me (https://randomuser.me/api/) em um array de objetos, com as seguintes especificações:

## Requisitos

### 1. Rota de Adição de Usuário
- **URL**: `/addUser`
- **Método**: GET
- **Comportamento**: Busca um usuário aleatório da API e armazena em memória
- **Resposta**: Mensagem que o usuário foi adicionado

### 2. Rota de Listagem
- **URL**: `/users`
- **Método**: GET
- **Comportamento**: Lista todos os usuários armazenados
- **Resposta**: Array JSON com todos os usuários

### 3. Rota de Usuário Específico
- **URL**: `/user/:id`
- **Método**: GET
- **Comportamento**: Retorna os dados de um usuário específico
- **Resposta**: JSON com dados do usuário ou mensagem de erro se ele não existir
