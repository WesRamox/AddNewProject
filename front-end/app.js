import { addNewTech } from "./functions/addTech.js";
import { saveProject } from "./functions/saveProject.js";

const form = document.getElementById('form')

form.addEventListener('submit', saveProject)

const addTechBtn = document.querySelector('#addTech')
addTechBtn.addEventListener('click', addNewTech)