//Import form validation functions from form-validation.js module
import { validate } from './modules/form-validation.js';

//Import helper functions from helper-functions.js module
//import { resetForm } from './modules/helper-functions.js';

//Global variable declarations
const submitBtn = document.getElementById('submit');
//const resetBtn = document.getElementById('reset');

//Event listener for the form submit button
submitBtn.addEventListener('click', validate);

//Event listener for the form reset button
//resetBtn.addEventListener('click', resetForm);