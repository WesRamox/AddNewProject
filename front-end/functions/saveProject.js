import { returnTechs } from "./addTech.js"


export async function saveProject(ev) {
   ev.preventDefault()

   const projectName = document.getElementById("name").value
   const projectDescription = document.getElementById("description").value
   const imageUrl = document.getElementById("image_url").value
   const techs = returnTechs()

   const projectDetails = {
      name: projectName,
      description: projectDescription,
      image_url: imageUrl,
      techs,
      date: new Date()
   }

   if(techs.length !== 0) {
      const response = await fetch('http://localhost:3000/projects', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(projectDetails)
      })
      alert("Projeto cadastrado!")
   }
}