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
taskForm.style.display = "none"

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



})
