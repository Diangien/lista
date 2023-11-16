let txt = document.querySelector('#txtTask');
let btn = document.querySelector('#btnAdd');
let container = document.querySelector('#tasks');

let tarefas = []
let divTarefasArray = []


btn.addEventListener('click',()=>{
    adicionarTarefa(txt.value)
})


let adicionarTarefa = text =>{

    if(tarefas.includes(text)) return

    tarefas.push(text)

    let divTarefa = document.createElement('div')
    divTarefa.setAttribute("data-tarefa",text)
    divTarefa.setAttribute("class","tarefa")

    let btnCompletar = document.createElement('input')
    btnCompletar.type = 'checkbox'

    let divpTarefa = document.createElement('div')
    divpTarefa.setAttribute("class","dflex")
    divpTarefa.innerHTML = text
    

    let btnEliminar = document.createElement('div')
    btnEliminar.innerHTML = 'X'
    btnEliminar.style.color = '#f00'
    btnEliminar.addEventListener('click',()=>{
         eliminar()
    })

    console.log(tarefas)

    
    divTarefa.appendChild(btnCompletar)
    divTarefa.appendChild(divpTarefa)
    divTarefa.appendChild(btnEliminar)

    divTarefasArray.push(divTarefa)


    divTarefasArray.map(el=>{
        container.appendChild(el)
    })

    
}

let imprimirTarefas = ()=>{

}

let eliminar = ()=>{
    alert('Elimidao!')
}
