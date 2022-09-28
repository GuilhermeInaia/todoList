//Dia:23/09/2022 Esses códigos foram para o arquivo dao.js
// let lista_tarefas = [
//     {titulo: 'Tarefa a', prioridade: 'Baixa'},
//     {titulo: 'Tarefa b', prioridade: 'Media'},
//     {titulo: 'Tarefa c', prioridade: 'Alta'},
// ];

// function salvar(titulo, prioridade) {
//     lista_tarefas.push({
//         titulo: titulo,
//         prioridade: prioridade,
//     })

// }

// function buscar(){
//     return lista_tarefas;
// }

function atualizarQuantidade() {
    document.getElementById("numeros").innerHTML = lista_tarefas.length ++ +1 ;
    
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
    
    if(true === lista_tarefas.includes(titulo)) {
        alert('Tarefa inclusa!')
        return;
    }

    salvar(titulo, input_prioridade.value)
    
    document.getElementById("input_nova_tarefa").value = "";
    
    atualizarQuantidade();
    
    listaTarefas();
}

// Vai acontencer assim que o usuario entrar.
listaTarefas();

