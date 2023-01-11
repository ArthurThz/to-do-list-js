

//Captura o input de texto
const getTask = document.querySelector('.task-name')
//Captura o botão para adionar a tarefa
const btnCreateTask = document.querySelector('.btn-create-task')
//Captura a div onde as novas tarefas serão criadas
const divNewTask = document.querySelector('.tasks')
//Captura o botão que irá remover as tarefas criadas
const btnRemoveTask = document.querySelector('.btn-remove-task')
//Array para armazenar o nome das tarefas
const taskName = []


//Cria os inputs necessários
function createInput() {
    //Criando os elementos que serão utilizados
    const createInput = document.createElement('input')
    const createLabel = document.createElement('label')
    const createDiv = document.createElement('div')

    //Passando os atributos para a nova div
    createDiv.setAttribute('class', 'createdTask')
    
    //Passando os atributos para o checkbox criado
    createInput.setAttribute('type', 'checkbox')
    createInput.setAttribute('name', 'task')
    createInput.setAttribute('class', 'created-task')

    //Passando os atributos para a label criada
    createLabel.setAttribute('for', 'task')
    createLabel.setAttribute('class', 'created-label')
    createLabel.innerHTML = getTask.value

    // Colocando os elementos no DOM
    divNewTask.appendChild(createDiv)
    createDiv.appendChild(createInput)
    createDiv.appendChild(createLabel)

}

//Coloca os novos elementos no DOM
function addTask() {
    //Retorna um alerta caso o campo de texto não seja preenchido
    if (getTask.value == '') {
        alert('Digite um nome para sua tarefa!')
        return
    }
    //Captura o nome da tarefa e armazena no array taskName
    taskName.push(getTask.value)

    //Chama a função de criação dos inputs
    createInput()

    //Após confirmar limpa o input
    getTask.value = ''

    //Chama a função de verificação das checkbox criadas
    verifyCheckBox()

}

//Verifica quando um checkbox for clicado
function verifyCheckBox() {

    //Captura os valores dos inputs criados via JS
    const createdCheckBox = document.querySelectorAll('.created-task')
    const createdLabel = document.querySelectorAll('.created-label')

    //Percorre a nodeList para fazer a validação dos campos marcados
    for (let i = 0; i <= createdCheckBox.length - 1; i++) {
        createdCheckBox[i].addEventListener('click', () => {
            if (createdCheckBox[i].checked == false) {
                createdLabel[i].style.textDecoration = "none"
            } else {
                createdLabel[i].style.textDecoration = "line-through"

            }

        })
    }


}
//Remove a ultima tarefa
function removeTask(){
    // Recebe o elemento pai
    const divTask = document.querySelector('.tasks')
    // Recebe o elemento filho que será removido
    const createdTask = document.querySelectorAll('.createdTask')

    // Remove o elemento filho
    divTask.removeChild(createdTask[createdTask.length-1])
    
}

// Chama a função a cada click do botão
btnRemoveTask.addEventListener('click',removeTask)
btnCreateTask.addEventListener('click', addTask)


