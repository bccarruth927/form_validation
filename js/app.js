//Global variable declarations

//Variable declarations for the meal preference radio buttons
let i;
const mealPreference = document.getElementsByName('mealPreference');

//Variable declarations for the contact preference checkboxes
const checkboxes = document.getElementsByName('chk');
let newVar = 0;
let j;

//Helper function to uncheck all selected checkboxes
const uncheckAll = () => {
    for (i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = false;
    }
}

//Helper function to reset all the form inputs
const resetForm = () => {
    document.forms.myForm.reset();
}

//Variable declarations for the form buttons
const submitBtn = document.getElementById('submit');
const resetBtn = document.getElementById('reset');


//Regular experession declarations
let lettersRegEx = /^[A-Za-z]+$/;
let spacedLettersRegEx = /^[A-Za-z\s]+$/;
let addressRegEx = /^(\d{1,}) [a-zA-Z0-9\s]+(\.)$/;
let zipcodeRegEx = /^[0-9]{5}(?:-[0-9]{4})?$/;
let areaCodeRegEx = /^[0-9]{3}$/;
let phoneNumberRegEx = /^[0-9]{7}$/;
let emailRegEx = /^\S+@\S+(\.)\S+$/;

//Form Validation function
const validate = (e) => {
    //Prevent the form from submitting upon button click
    e.preventDefault();

    //Conditional statements to determine if form inputs are valid
    if (!fname.value.match(lettersRegEx)) { //Conditional checking for the validity of the first name
        document.myForm.fname.focus();
        alert('Please provide a valid first name!');
        return false;
    }
    if (!lname.value.match(lettersRegEx)) { //Conditional checking for the validity of the last name
        document.myForm.lname.focus();
        alert('Please provide a valid last name!');
        return false;
    }
    if (!address.value.match(addressRegEx)) { //Conditional checking for the validity of the street address
        document.myForm.address.focus();
        alert('Please provide a valid street address!');
        return false;
    }
    if (!city.value.match(spacedLettersRegEx)) { //Conditional checking for the validity of the city
        document.myForm.city.focus();
        alert('Please provide a valid city!');
        return false;
    }
    if (state.value == "") { //Conditional checking for the validity of the state
        document.myForm.state.focus();
        alert('Please select a state of residency!');
        return false;
    }
    if (!zip.value.match(zipcodeRegEx)) { //Conditional checking for the validity of the zipcode
        document.myForm.zip.focus();
        alert('Please enter a valid zipcode!');
        return false;
    }
    if (!areaCode.value.match(areaCodeRegEx)) { //Conditional checking for the validity of the area code
        document.myForm.areaCode.focus();
        alert('Please enter a valid area code!');
        return false;
    }
    if (!phoneNumber.value.match(phoneNumberRegEx)) { //Conditional checking for the validity of the phone number
        document.myForm.phoneNumber.focus();
        alert('Please enter a valid phone number!');
        return false;
    }
    if (!email.value.match(emailRegEx)) { //Conditional checking for the validity of the email address
        document.myForm.email.focus();
        alert('Please enter a valid email address!');
        return false;
    }
    if (confirmEmail.value != email.value) { //Conditional checking that the value matches the email input
        document.myForm.confirmEmail.focus();
        alert('Please use the same email address previously entered!');
        return false;
    }
    for (i = 0; i < mealPreference.length; i++) { //For loop to iterate through the radio button options
        if (mealPreference[i].checked) { //Conditional to verify that if a radio button is checked the loop breaks
            break;
        }
    }
    if (i == mealPreference.length) { //Conditional for if the for loop iterates through all radio buttons without one checked an error message appears
        alert('Please select a meal preference!');
        return false;
    }
    for (j = 0; j < checkboxes.length; j++) { //For loop to iterate through the checkbox options
        if (checkboxes[j].checked) {
           newVar = newVar + 1;
        }
    }
    if (newVar == 0 || newVar < 2 || newVar > 2) { //Conditional to verify that only 2 checkboxes are selected
        newVar = 0;
        uncheckAll();
        alert('Please select two contact preferences');
        return false;
    }
};

//Event listener for the form submit button
submitBtn.addEventListener('click', validate);

//Event listener for the form reset button
resetBtn.addEventListener('click', resetForm);