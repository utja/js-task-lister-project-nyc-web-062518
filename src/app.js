const listForm = document.getElementById('create-list-form')
const listInput = document.getElementById('new-list-title')
const appContent = document.getElementById('app-content')
//^ might be moved to index.js
/////////////////////////////////////////////////////////////////////

const listDiv = document.createElement('div')
const firstScript = document.querySelector('script')
listDiv.id = "lists"
document.querySelector('#main-content').insertBefore(listDiv, firstScript)

const taskForm = document.createElement('form')
taskForm.id = "create-task-form"
appContent.appendChild(taskForm)

let labelSelect = document.createElement('label')
labelSelect.innerText = 'Select List:'
labelSelect.htmlFor = 'parent-list'
taskForm.appendChild(labelSelect)

/////////////////FOR TEST PURPOSE ONLY//////////
let optionList = []

// optionList.forEach(add to the select)
let optionOne = document.createElement('option')
optionOne.innerText = 'test'


let selectList = document.createElement('select')
selectList.appendChild(optionOne) /////////////////////TEST PURPOSE ONLY
taskForm.appendChild(selectList)
// COME BACK TO ////////////////////////////////////////

let labelTask = document.createElement('label')
labelTask.innerText = 'Task description:'
labelTask.htmlFor = 'new-task-description'
taskForm.appendChild(labelTask)

let inputTask = document.createElement('input')
inputTask.id = 'new-task-description'
inputTask.required = true
inputTask.type = 'text'
inputTask.placeholder = 'description'
taskForm.appendChild(inputTask)


let labelPriority = document.createElement('label')
labelPriority.innerText = 'Priority level:'
labelPriority.htmlFor = 'new-task-priority'
taskForm.appendChild(labelPriority)

let inputPriority = document.createElement('input')
inputPriority.id = 'new-task-priority'
inputPriority.type = 'text'
inputPriority.placeholder = 'priority'
taskForm.appendChild(inputPriority)

let inputCreate = document.createElement('input')
inputCreate.type = 'submit'
inputCreate.value ='Create New Task'
taskForm.appendChild(inputCreate)

// Change to None when done editing form
taskForm.style.display = "block"

listForm.addEventListener('submit', function(e) {
  e.preventDefault();
  //task form
  taskForm.style.display = "block"

  //list item card
  let listItemDiv = document.createElement('div')
  let listItemTitle = document.createElement('h2')
  let listItemDelete = document.createElement('button')
  listItemDelete.className = 'delete-list'
  listItemDelete.dataset.title = listInput.value
  listItemDelete.innerText = 'x'
  let listUl = document.createElement('ul')

  listItemTitle.innerText = listInput.value
  listDiv.appendChild(listItemDiv)
  listItemDiv.appendChild(listItemTitle)
  listItemTitle.appendChild(listItemDelete)

  // append option to taskForm?
  // optionList.push(listInput.value)



})
