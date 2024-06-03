import { returnTechs } from "./addTech.js"


export function saveProject(ev) {
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
   }

   console.log(projectDetails)
}