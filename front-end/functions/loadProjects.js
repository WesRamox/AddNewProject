let projectsList = []

function renderProjects(data) {
   const main = document.querySelector('#projetos')

   const boxProject = document.createElement('div')
   boxProject.classList.add('boxProject')

   const name = document.createElement('h3')
   name.textContent = data.name
   name.classList.add('name')

   const description = document.createElement('p')
   description.textContent = data.description
   description.classList.add('description')
      
   const techsbox = document.createElement('div')
   techsbox.classList.add('techsbox')

   const arrayTechs = data.techs

   
   arrayTechs.forEach((tech) => {
      const techs = document.createElement('span')
      techs.textContent = tech
      techs.classList.add('techs')
      
      techsbox.append(techs)
   })

   const deleteBtn = createDeleteButton(data.id)
   
   const imageProject = document.createElement('img')
   imageProject.src = data.image_url
   imageProject.classList.add('imageProject')
   
   boxProject.append(name, description, techsbox, imageProject, deleteBtn)
   main.append(boxProject)
}

function createDeleteButton(id) {
   const button = document.createElement('button')
   button.classList.add('delete-btn')
   button.textContent = 'Excluir'
   button.id = `delete-${id}`
   button.addEventListener('click', async () => {
      await fetch(`http://localhost:3000/projects/${id}`, {
         method: 'DELETE'
      })
      button.parentElement.remove()
   })

   return button
}

async function fetchProjects() {
   return await fetch('http://localhost:3000/projects').then(res => res.json())
}

async function execute() {
   const data = await fetchProjects()
   data.forEach(renderProjects)
   projectsList.push(data)
}


document.addEventListener("DOMContentLoaded", execute)