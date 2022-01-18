document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) =>{
      e.preventDefault()
      buildToDo(e.target.newTaskDescription.value)
      form.reset()
  })
})

function buildToDo(todo) {
    let p = document.createElement('p')
    

    let btn2 = document.createElement('button') 
    btn2.addEventListener('click', handleEdit)
    btn2.textContent = 'edit'
    btn2.style.background = "#green"
    btn2.style.marginLeft = '2px'
    

    let btn = document.createElement('button')
    btn.addEventListener('click', handleDelete)
    btn.textContent = 'x'
    p.textContent = `${todo}  `
    p.append(btn, btn2)
    document.querySelector('#tasks').appendChild(p)
}

function handleDelete(e) {
e.target.parentNode.remove()
}

function handleEdit(e) {
    console.log(e.target.parentNode)
    
//     e.target.parentNode.innerHTML += `
//     <form id="edit-form" action="" method="POST">
//     <label for="new-task-description">Task description:</label>
//     <input type="text" id="newTaskDescription" name="new-task-description" placeholder="description">
//     <input type="submit" value="Edit Task">
//   </form>
//     `

}