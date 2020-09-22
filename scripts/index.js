const form = document.getElementById("cv_form");

function onSubmit(event){
    
    event.preventDefault();
    storeFields();
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

form.addEventListener('submit', onSubmit);