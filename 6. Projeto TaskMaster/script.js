const projetoTaskMaster = {
        nome: "TaskMaster",
        version: "1.0",
        autor: "Curso JavaScript",
        tarefas: [],
        adicionarTarefa(titulo, prioridade = "média") {
          const novaTarefa = {
            id: this.tarefas.length + 1,
            titulo,
            prioridade,
            concluida: false,
            criada: new Date()
          };
          this.tarefas.push(novaTarefa);
          console.log(`Tarefa "${titulo}" adicionada.`);
          return novaTarefa;
        },
        listarTarefas() {
          console.log(`Projeto ${this.nome} - Lista de Tarefas:`);
          this.tarefas.forEach(t => console.log(`- ${t.id}: ${t.titulo} (${t.prioridade})`));
        },
        listarTarefasConcluidas() {
            const concluídas = this.tarefas.filter(tarefa => tarefa.concluida === true);
          
            if (concluídas.length === 0) {
              console.log("Nenhuma tarefa concluída.");
            } else {
              concluídas.forEach(t => 
                console.log(`- ${t.id}: ${t.titulo} (${t.prioridade}) concluida`)
              );
            }
          }
      };
      
      projetoTaskMaster.adicionarTarefa("Estudar Objetos", "alta");
      projetoTaskMaster.adicionarTarefa("Criar interface");
      projetoTaskMaster.listarTarefas();