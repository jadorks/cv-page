const form = document.getElementById("cv_form");

function onSubmit(event){
    
    event.preventDefault();
    if(validate()){
        storeFields();
        window.location = 'cv.html';
    }

}

function storeFields(){
    localStorage.setItem("fname", form.elements["fname"].value);
    localStorage.setItem("mid", form.elements["mid"].value);
    localStorage.setItem("lname", form.elements["lname"].value);
    localStorage.setItem("gender", form.elements["gender"].value);
    localStorage.setItem("email", form.elements["email"].value);
    localStorage.setItem("phone", form.elements["phone"].value);
    localStorage.setItem("address", form.elements["address"].value);
    localStorage.setItem("filled", 1);
}

function validate(){
    var phonePattern = /^[0-9]+$/;
    var textPattern = /^[A-Za-z., ]+$/;
    var addressPattern = /^[0-9A-Za-z., ]+$/;
    var emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    const first = form.elements["fname"].value;
    const middle = form.elements["mid"].value;
    const last = form.elements["lname"].value;
    const email = form.elements["email"].value;
    const phone = form.elements["phone"].value;
    const address = form.elements["address"].value;

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

function addError(id){
    document.getElementById(id).classList.add('error-box');
}

function removeError(){
    document.getElementById("fname").classList.remove('error-box');
    document.getElementById("mid").classList.remove('error-box');
    document.getElementById("lname").classList.remove('error-box');
    document.getElementById("email").classList.remove('error-box');
    document.getElementById("phone").classList.remove('error-box');
    document.getElementById("address").classList.remove('error-box');
    
}

form.addEventListener('submit', onSubmit);