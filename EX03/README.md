# Eventos - Fundamentos e Exemplos
Este projeto contém diversos exemplos para demonstrar o desenvolvimento de servidores e manipulação de eventos. Cada exemplo aborda um conceito distinto, permitindo que entenda diferentes abordagens de criação de servidores e gerenciamento de eventos.

## Estrutura do Projeto

```
/node
├── Execícios
│   ├── 01 - server_fetch_then.js      # Servidor utilizando fetch com then/catch para obter usuário
│   ├── 02 - server_fetch_await.js     # Servidor utilizando fetch com async/await para obter usuário
├── 02 - Events.js                     # Exemplo simples de emissão e consumo de um evento
├── 02.1 - Events.js                   # Exemplo de emissão de dados via evento, exibindo dados simples
├── 02.2 - Events.js                   # Exemplo de emissão de evento com dados condicionais
├── 02.3 - Events.js                   # Exemplo de utilização de evento
└── 03 - server_evento.js              # Servidor utilizando evento para obter usuário
```

## Descrição dos Arquivos

- **Execícios/01 - server_fetch_then.js**  
  Implementa servidor HTTP que busca um usuário aleatório utilizando fetch com then/catch.

- **Execícios/02 - server_fetch_await.js**  
  Implementa servidor HTTP similar ao anterior, porém utilizando async/await.

- **Eventos (02 - Events.js, 02.1 - Events.js, 02.2 - Events.js, 02.3 - Events.js)**  
  Esses exemplos demonstram o uso do EventEmitter para emitir e escutar eventos. Cada arquivo contém variações para demonstrar diferentes comportamentos e formatos dos dados emitidos.

- **03 - server_evento.js**  
  Implementa servidor HTTP similar aos anteriores, porém utilizando evento.


# Exercício: Processador de Tarefas Automático com Events

## Objetivo
Desenvolver um sistema que gerencie e processe automaticamente uma lista de tarefas utilizando o módulo `EventEmitter`.

## Descrição do Exercício
Você deve criar um programa que mantenha uma lista de tarefas. Cada tarefa é um objeto que possui:

- **ID:** Um número único para identificar a tarefa.
- **Descrição:** Um texto descritivo da tarefa.
- **Status:** Uma string que pode ter um dos seguintes valores:
  - `"aguardando"`: A tarefa está na fila para ser iniciada.
  - `"trabalhando"`: A tarefa está atualmente em execução.
  - `"finalizada"`: A tarefa foi concluída.

A cada 5 segundos, o sistema realizará um ciclo de processamento onde:

1. **Seleção da Tarefa Atual:**
   - O sistema deve identificar a tarefa que está sendo processada, ou seja, aquela com status `"trabalhando"`.
   - Caso não exista nenhuma tarefa com este status, o sistema deve informar que não há tarefas em processamento.

2. **Sorteio e Decisão:**
   - O sistema gera um número aleatório entre 0 e 1 usando `Math.random()`.
   - Se o número gerado for maior que 0.7 (o que representa aproximadamente 30% de chance):
     - A tarefa atualmente em processamento é alterada para o status `"finalizada"`, marcando sua conclusão.
     - O sistema imediatamente procura pela próxima tarefa com o status `"aguardando"` e muda o status dela para `"trabalhando"` para iniciar seu processamento.
   - Se o número for menor ou igual a 0.7:
     - A tarefa atual permanece com o status `"trabalhando"` e continua sendo processada no próximo ciclo.

3. **Emissão de Eventos:**
   - Utilize o `EventEmitter` para emitir eventos a cada processamento. Isso permite que outras partes do sistema possam se inscrever e reagir às mudanças de status.
   - Devem ser emitidos eventos específicos para:
     - Tarefa finalizada.
     - Tarefa em andamento.
     - Tarefas que estão aguardando.

4. **Exibição:**
   - Após cada processamento, o programa deve imprimir no console:
     - A ação realizada (ex: "Tarefa X finalizada" ou "Tarefa X continua em andamento").
     - O número aleatório sorteado (formatado com 2 casas decimais utilizando `toFixed(2)`).
     - O estado atual da lista de tarefas, mostrando os seus status.

## Estrutura Inicial do Código
A seguir, um exemplo de como definir a estrutura de uma tarefa e a lista inicial de tarefas:

```javascript
const exemplo = {
  id: 1,
  descricao: "Exemplo de tarefa",
  status: "aguardando"  // ou "trabalhando" ou "finalizada"
}

const tasks = [
  { id: 1, descricao: 'Tarefa 1', status: 'trabalhando' },
  { id: 2, descricao: 'Tarefa 2', status: 'aguardando' },
  { id: 3, descricao: 'Tarefa 3', status: 'aguardando' }
];
```

## Como Implementar

### 1. Configuração Inicial
- **Importação do módulo EventEmitter:**  
  Importe o `EventEmitter` do Node.js para criar um sistema de eventos que permitirá a comunicação entre diferentes partes do sistema.
  
- **Criação dos Eventos e dos Listeners:**  
  Configure listeners para os eventos que serão emitidos a cada processamento. Por exemplo, um listener para quando uma tarefa é finalizada, outro para quando uma tarefa está em andamento e outro para quando há tarefas aguardando.

### 2. Lógica de Processamento
- **Uso do `setInterval`:**  
  Utilize `setInterval` para agendar o processamento a cada 5 segundos.
  
- **Seleção da Tarefa Atual:**  
  Use `findIndex()` para localizar a tarefa cujo status é `"trabalhando"`.

   ```javascript
   const tasks = [
     { id: 1, status: 'pendente' },
     { id: 2, status: 'pendente' }
     { id: 3, status: 'ativo' }
   ];

   const index = tasks.findIndex(t => t.status === 'ativo');
   console.log(index); //2
   ```
  
- **Sorteio e Atualização do Status:**  
  Gere um número aleatório com `Math.random()`. Com base no resultado:
  - Se o número for maior que 0.7, atualize o status da tarefa atual para `"finalizada"`.
  - Procure a próxima tarefa com status `"aguardando"` e atualize-a para `"trabalhando"`.
  - Caso contrário, o status da tarefa atual permanece inalterado.

  Para retornar todos que estão aguardando você pode usar a função filter, que retorna mais do que 1 objeto

  ```javascript
   const numeros = [1, 2, 3, 4, 5, 6];
   const numerosPares = numeros.filter(numero => numero % 2 === 0);
   console.log(numerosPares); //Saída: [2, 4, 6]
  ```

  ou por exemplo

  ```javascript
   const tasks = tasks.filter(t => t.status === 'aguardando');
  ```

  e para imprimir os valores separados por virgula, você pode usar a função map e join

  ```javascript
   const ids = info.tasks.map(t => t.id).join(', ');
   console.log(`Aguardando: Tarefas ${ids} aguardando.`);
  ```

- **Exibição e Emissão dos Eventos:**  
  Emita eventos contendo informações como o ID da tarefa, o número sorteado, e a lista atual de tarefas. Utilize os listeners para exibir as mensagens apropriadas no console.

### 3. Resultado e Incrementos
- **Saída no Console:**  
  Exiba mensagens detalhadas que incluam o status da tarefa processada, o número sorteado (formatado para 2 casas decimais) e o estado atualizado de todas as tarefas.
  
- **Feedback Visual:**  
  O sistema deve imprimir mensagens de log informativas, por exemplo:
  ```
  Iniciando processador de tarefas...
  Trabalhando: Tarefa 1 está em andamento (número sorteado: 0.45)
  Aguardando: Tarefas 2, 3

  //5 segundos depois...
  Finalizado: Tarefa 1 concluída (número sorteado: 0.85)
  Trabalhando: Tarefa 2 iniciada
  Aguardando: Tarefa 3
  ```

## Dicas Adicionais
- Utilize métodos de array, como `findIndex()` e `filter()`, para gerenciar e selecionar tarefas baseado em seus status.
- Para exibição de números com precisão, utilize o método `toFixed(2)`.
- Emita diferentes eventos para cada transição de estado, possibilitando que o sistema seja facilmente estendido para incluir mais funcionalidades no futuro.

