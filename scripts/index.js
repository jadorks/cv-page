const form = document.getElementById("cv_form");

function onSubmit(event){
    
    event.preventDefault();
    storeFields();
    window.location = 'cv.html';
}

function storeFields(){
    localStorage.setItem("fname", form.elements["fname"].value);
    localStorage.setItem("mid", form.elements["mid"].value);
    localStorage.setItem("lname", form.elements["lname"].value);
    localStorage.setItem("gender", form.elements["gender"].value);
    localStorage.setItem("email", form.elements["email"].value);
    localStorage.setItem("phone", form.elements["phone"].value);
    localStorage.setItem("address", form.elements["address"].value);
}

function validate(){
    var phonePattern = /^[0-9]+$/;
    var textPattern = /^[A-Za-z]+$/;
    var emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    const 
}

form.addEventListener('submit', onSubmit);