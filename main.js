let txt = document.querySelector('#txtTask');
let btn = document.querySelector('#btnAdd');
let container = document.querySelector('#tasks');
let btnSalvar = document.getElementById('save')
let audio = new Audio('audio/pato.mp3')
let salvou = false

let tarefas = []

let divTarefasArray = []

imprimirDefualt()

btnSalvar.addEventListener('change',(evt)=>{
    if(btnSalvar.checked){
        salvou = btnSalvar.checked = false
        localStorage.clear()
    }else{
        salvou = btnSalvar.checked = true
        salvarTarefas()
    }
})

document.addEventListener('keydown',(evt)=>{
    let tecla = evt.key

    if(tecla == 'Enter'){
        audio.play()
        adicionarTarefa(txt.value)
    }
})


btn.addEventListener('click',()=>{
    audio.play()
    adicionarTarefa(txt.value)
})

let adicionarTarefa = text =>{

    if(tarefas.includes(text) | txt.value=='' | divTarefasArray.length > 13){
        return
    }

    container.style.display = 'block'

    txt.value = ''
    tarefas.push(text)
    criarElemento(text)
    imprimir()

    console.log(tarefas)
    
}

function salvarTarefas(){
    let tarefasAntigas = []

    if(localStorage.getItem("tarefas")){
        if(localStorage.length == 0){
            return;
        }
        tarefasAntigas = localStorage.getItem("tarefas").split(',')
    }

    tarefas = tarefas.concat(tarefasAntigas)
        
    
    localStorage.setItem("tarefas",tarefas)
}

function imprimir(){
    
    if(divTarefasArray.length == 0){
        container.style.display = 'none'
        return;
    }

    divTarefasArray.map(el=>{
        container.appendChild(el)
    })

}

let eliminar = (elemento)=>{

    container.innerHTML = ''

    divTarefasArray = divTarefasArray.filter((el)=>{
        return el.dataset.tarefa != elemento.dataset.nome
    })

    tarefas = tarefas.filter((el)=>{
        return el != elemento.dataset.nome
    })

    
    
    if(tarefas.length !=0)
        localStorage.setItem("tarefas",tarefas)
    else
        localStorage.clear()

    imprimir()

}

function criarElemento(text){

    let divTarefa = document.createElement('div')
    divTarefa.setAttribute("data-tarefa",text)
    divTarefa.setAttribute("class","tarefa")

    //Botao Completar

    let btnCompletar = document.createElement('input')
    btnCompletar.type = 'checkbox'
    btnCompletar.setAttribute("class","check")

    //Conteudo

    let divpTarefa = document.createElement('div')
    divpTarefa.setAttribute("class","dflex")
    divpTarefa.innerHTML = text

    btnCompletar.addEventListener('click',()=>{
        divpTarefa.classList.toggle('rasurado')
    })
    
    //BOtao Eliminar

    let btnEliminar = document.createElement('img')
    btnEliminar.src = './images/lixeira12.png'
    btnEliminar.style.width = '40px';

    btnEliminar.style.cursor = 'pointer'
    btnEliminar.setAttribute('data-nome',text)
    btnEliminar.addEventListener('click',(evt)=>{
         eliminar(evt.target)
    })


    
    divTarefa.appendChild(btnCompletar)
    divTarefa.appendChild(divpTarefa)
    divTarefa.appendChild(btnEliminar)

    divTarefasArray.push(divTarefa)
}

function imprimirDefualt(){
    if(localStorage.length != 0){

        let arrayTarefas = localStorage.getItem("tarefas").split(',')

        arrayTarefas.map((el)=>{
            criarElemento(el)
        })

        console.log("cheguei")
        
        tarefas = tarefas.concat(arrayTarefas)

        divTarefasArray.map(el=>{
            container.appendChild(el)
            console.log("appendeu")
        })
    }else{
        container.style.display = 'none';
    }
}


console.log(localStorage.getItem("tarefas"))

