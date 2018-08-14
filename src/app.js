const listForm = document.getElementById('create-list-form')
const listInput = document.getElementById('new-list-title')
const listDiv = document.createElement('div')
const firstScript = document.querySelector('script')
listDiv.id = "lists"
document.querySelector('#main-content').insertBefore(listDiv, firstScript)


listForm.addEventListener('submit', function(e) {
  debugger
  e.preventDefault();



})
