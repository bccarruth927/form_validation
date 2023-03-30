//Helper function to uncheck all selected checkboxes
const uncheckAll = () => {
    
    //Variable declaration for the checkboxes on the DOM
    const checkboxes = document.getElementsByName('chk');

    for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = false;
    }
}

//Helper function to reset all the form inputs
const resetForm = () => {
    document.forms.myForm.reset();
}

export { uncheckAll, resetForm };