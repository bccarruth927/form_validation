//Import helper functions from helper-functions.js module
import { uncheckAll } from './helper-functions.js';

//Variable declarations for the meal preference radio buttons
let i;
const mealPreference = document.getElementsByName('mealPreference');

//Variable declarations for the contact preference checkboxes
const checkboxes = document.getElementsByName('chk');
let newVar = 0;
let j;

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
    //e.preventDefault();

    //Conditional statements to determine if form inputs are valid
    if (!fname.value.match(lettersRegEx)) { //Conditional checking for the validity of the first name
        document.myForm.fname.focus();
        alert('Please enter a valid first name!');
        e.preventDefault();
        return false;
    }
    if (!lname.value.match(lettersRegEx)) { //Conditional checking for the validity of the last name
        document.myForm.lname.focus();
        alert('Please enter a valid last name!');
        e.preventDefault();
        return false;
    }
    if (!address.value.match(addressRegEx)) { //Conditional checking for the validity of the street address
        document.myForm.address.focus();
        alert('Please enter a valid street address! Abbreviate street types like Ln., Ct., Ave., etc.');
        e.preventDefault();
        return false;
    }
    if (!city.value.match(spacedLettersRegEx)) { //Conditional checking for the validity of the city
        document.myForm.city.focus();
        alert('Please enter a valid city!');
        e.preventDefault();
        return false;
    }
    if (state.value == "") { //Conditional checking for the validity of the state
        document.myForm.state.focus();
        alert('Please select a valid U.S. state!');
        e.preventDefault();
        return false;
    }
    if (!zip.value.match(zipcodeRegEx)) { //Conditional checking for the validity of the zipcode
        document.myForm.zip.focus();
        alert('Please enter a valid zipcode!');
        e.preventDefault();
        return false;
    }
    if (!areaCode.value.match(areaCodeRegEx)) { //Conditional checking for the validity of the area code
        document.myForm.areaCode.focus();
        alert('Please enter a valid phone area code!');
        e.preventDefault();
        return false;
    }
    if (!phoneNumber.value.match(phoneNumberRegEx)) { //Conditional checking for the validity of the phone number
        document.myForm.phoneNumber.focus();
        alert('Please enter a valid seven digit phone number!');
        e.preventDefault();
        return false;
    }
    if (!email.value.match(emailRegEx)) { //Conditional checking for the validity of the email address
        document.myForm.email.focus();
        alert('Please enter a valid email address!');
        e.preventDefault();
        return false;
    }
    if (confirmEmail.value != email.value) { //Conditional checking that the value matches the email input
        document.myForm.confirmEmail.focus();
        alert('Please enter the same email from earlier input!');
        e.preventDefault();
        return false;
    }
    for (i = 0; i < mealPreference.length; i++) { //For loop to iterate through the radio button options
        if (mealPreference[i].checked) { //Conditional to verify that if a radio button is checked the loop breaks
            break;
        }
    }
    if (i == mealPreference.length) { //Conditional for if the for loop iterates through all radio buttons without one checked an error message appears
        alert('Please select a meal preference option!');
        e.preventDefault();
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
        alert('Please select two preferred contact methods!');
        e.preventDefault();
        return false;
    }
};

//Functions prepeared for export
export { validate };