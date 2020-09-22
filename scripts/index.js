const form = document.getElementById("cv_form");


// Definition for overrided onSubmit
function onSubmit(event){
    
    event.preventDefault();

    // if validation is complete
    // store details and open cv.html
    if(validate()){
        storeFields();
        window.location = 'cv.html';
    }
}

// function to store all fields in sessionStorage
function storeFields(){
    sessionStorage.setItem("fname", form.elements["fname"].value);
    sessionStorage.setItem("mid", form.elements["mid"].value);
    sessionStorage.setItem("lname", form.elements["lname"].value);
    sessionStorage.setItem("gender", form.elements["gender"].value);
    sessionStorage.setItem("email", form.elements["email"].value);
    sessionStorage.setItem("phone", form.elements["phone"].value);
    sessionStorage.setItem("address", form.elements["address"].value);
    sessionStorage.setItem("filled", 1);
}

// form validation function
function validate(){

    // regex patterns
    var phonePattern = /^[0-9]+$/;
    var textPattern = /^[A-Za-z.,\- ]+$/;
    var addressPattern = /^[0-9A-Za-z.,\- ]+$/;
    var emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


    // values from all form elements
    const first = form.elements["fname"].value;
    const middle = form.elements["mid"].value;
    const last = form.elements["lname"].value;
    const email = form.elements["email"].value;
    const phone = form.elements["phone"].value;
    const address = form.elements["address"].value;

    // if any of the fields do not match corresponding regex pattern
    // show error on field
    // else return true
    if (!first.match(textPattern) || !middle.match(textPattern) || !last.match(textPattern) || !email.match(emailPattern)
    || !phone.match(phonePattern) || !address.match(textPattern)){
        removeError();
        if(!first.match(textPattern)){
            addError("fname");
        }
        if(!middle.match(textPattern)){
            addError("mid");
        }
        if(!last.match(textPattern)){
            addError("lname");
        }
        if(!email.match(emailPattern)){
            addError("email");
        }
        if(!phone.match(phonePattern)){
            addError("phone");
        }
        if(!address.match(addressPattern)){
            addError("address");
        }
    }
    else{
        removeError();
        return true;
    }
}

// function to add error-box class to element
function addError(id){
    document.getElementById(id).classList.add('error-box');
}

// function to remove error-box class
function removeError(){
    document.getElementById("fname").classList.remove('error-box');
    document.getElementById("mid").classList.remove('error-box');
    document.getElementById("lname").classList.remove('error-box');
    document.getElementById("email").classList.remove('error-box');
    document.getElementById("phone").classList.remove('error-box');
    document.getElementById("address").classList.remove('error-box');
    
}

form.addEventListener('submit', onSubmit);