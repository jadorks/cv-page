// function to loadData into the cv
function loadData(){

    // create fullname from sessionStorage
    var name = sessionStorage.getItem("fname") + " " + sessionStorage.getItem("mid") + " " + sessionStorage.getItem("lname");
    
    // if the form has been filled
    // show data in respective fields
    // else display message to fill form
    if(sessionStorage.getItem("filled") == 1){
        document.getElementById("name").innerHTML = `${name}`;
        document.getElementById("address").innerHTML = `${sessionStorage.getItem("address")}`;
        document.getElementById("phone").innerHTML = `${sessionStorage.getItem("phone")}`;
        document.getElementById("email").innerHTML = `${sessionStorage.getItem("email")}`;
        document.getElementById("gender").innerHTML = `${sessionStorage.getItem("gender")}`;
    }
    else{
        document.getElementById("name").innerHTML = `Please fill the form <a href = "index.html">here</a>.`;   
    }
    
}

loadData();