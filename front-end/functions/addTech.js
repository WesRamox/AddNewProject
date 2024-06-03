const arrayTechs = []

export function addNewTech() {

   const techs = document.querySelector('#techsList')
   let inputTech = document.getElementById('techs').value

   if (inputTech != "") {
      arrayTechs.push(inputTech)
      console.log(arrayTechs)

      document.getElementById('techs').value = ""

      techs.innerHTML = "Tecnologias:"
      arrayTechs.map((tech) => {
         const newTech = document.createElement('p')
         newTech.textContent = `${tech},`
         techs.append(newTech)
      })
   } else {
      throw Error("Ops, algo deu errado!")
   }
}

export function returnTechs() {
   return arrayTechs
}