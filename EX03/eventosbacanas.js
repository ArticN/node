const EventEmitter = require("node:events");
const { clearInterval } = require("node:timers");

const eventGenerator = new EventEmitter(); // Instanciando corretamente o EventEmitter

const tasks = [
  { Id: 1, desc: "tarefa 1", status: "Trabalhando" },
  { Id: 2, desc: "tarefa 2", status: "Em aguardo..." },
  { Id: 3, desc: "tarefa 3", status: "Em aguardo..." },
];

// Declarando intervalId antes do setInterval
const intervalId = setInterval(processTask, 5000);

function processTask() {
  const task = tasks.find((t) => t.status === "Trabalhando");
  if (!task) {
    console.log("Nenhuma tarefa em andamento");
    if (tasks.every((t) => t.status === "Finalizada")) {
      console.log("Todas as tarefas foram finalizadas");
      clearInterval(intervalId); // Interrompe o intervalo quando todas as tarefas são finalizadas
    }
    return;
  }

  const numSorted = Math.random();
  console.log(`Trabalhando ${task.desc}`);

  if (numSorted > 0.7) {
    task.status = "Finalizada"; // Alterando o status da tarefa
    eventGenerator.emit("Finalizada", task); // Emitindo o evento de finalização

    const nextTask = tasks.find((t) => t.status === "Em aguardo...");
    if (nextTask) {
      nextTask.status = "Trabalhando";
      eventGenerator.emit("Nova tarefa", nextTask); // Emitindo o evento de nova tarefa
    }
  } else {
    eventGenerator.emit("Em andamento", task); // Emitindo o evento de tarefa em andamento
  }

  const waiting =
    tasks
      .filter((t) => t.status === "Em aguardo...")
      .map((t) => t.desc)
      .join(", ") || "Nenhuma";

  console.log(`Em aguardo... ${waiting}`);
}

// Eventos para exibir as mensagens corretamente
eventGenerator.on("Finalizada", (tsk) => {
  console.log(`Tarefa ${tsk.Id} Finalizada`);
});

eventGenerator.on("Em andamento", (tsk) => {
  console.log(`Tarefa ${tsk.Id} em andamento...`);
});

eventGenerator.on("Nova tarefa", (tsk) => {
  console.log(`Nova tarefa iniciada: ${tsk.desc}`);
});
