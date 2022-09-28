
function atualizarQuantidade() {
    document.getElementById("numeros").innerHTML = buscar().length;
    
}
function listaTarefas () {
    let conteudo = buscar().map(function (tarefa) {
        return` 
        <div> 
        <input type="checkbox"> 
                ${tarefa.titulo}

                <span class= "badge ${tarefa.prioridade === 'Baixa' && 'bg-primary'} ${tarefa.prioridade === 'Media' && 'bg-warning'} ${tarefa.prioridade === 'Alta' && 'bg-danger'}">
                ${tarefa.prioridade}
                </span>
                </div>
        `;
    })
    
    document.getElementById('tarefas').innerHTML = conteudo.sort().join('');

}

function addTarefa() {
    event.preventDefault();

    let titulo = document.getElementById("input_nova_tarefa").value.trim();

    if (titulo === '') {
        alert('Tarefa Inválida!')
        return;
    }
    
  let titulos = buscar().map((tarefa) => { 
    return tarefa ? tarefa.titulo : "";
  });

  let existe = false;
  titulos.forEach((tar) => {
    if (true === tar.includes(titulo)){
        existe = true;
        return;
    }
  });

  if(existe == false) {
      salvar(titulo, input_prioridade.value)
  }else{
    alert('Tarefa inclusa');
  }

    document.getElementById("input_nova_tarefa").value = "";
    
    atualizarQuantidade();
    listaTarefas();
}

// Vai acontencer assim que o usuario entrar.
listaTarefas();
atualizarQuantidade();

