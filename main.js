let txt = document.querySelector('#txtTask');
let btn = document.querySelector('#btnAdd');
let container = document.querySelector('#tasks');
let audio = new Audio('audio/pato.mp3')

let tarefas = []
let divTarefasArray = []

container.style.display = 'none';

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

   
    container.style.display = 'block'
    if(tarefas.includes(text) | txt.value=='' | divTarefasArray.length > 13){
        return
    }

    txt.value = ''
    tarefas.push(text)

    

    //Div Tarefa
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
   //btnEliminar.innerHTML = 'x'
    //btnEliminar.style.color = '#f00'
    btnEliminar.style.width = '40px';

    btnEliminar.style.cursor = 'pointer'
    btnEliminar.setAttribute('data-nome',text)
    btnEliminar.addEventListener('click',(evt)=>{
         eliminar(evt.target)
    })

    console.log(tarefas)

    
    divTarefa.appendChild(btnCompletar)
    divTarefa.appendChild(divpTarefa)
    divTarefa.appendChild(btnEliminar)

    divTarefasArray.push(divTarefa)


    imprimir()
    
}

let imprimir = ()=>{
    
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

    imprimir()

}
