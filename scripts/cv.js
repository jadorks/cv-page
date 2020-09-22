function loadData(){

    const name = localStorage.getItem("fname") + " " + localStorage.getItem("mid") + " " + localStorage.getItem("lname");
    
    if(localStorage.getItem("filled") == 1){
        document.getElementById("name").innerHTML = `${name}`;
        document.getElementById("address").innerHTML = `${localStorage.getItem("address")}`;
        document.getElementById("phone").innerHTML = `${localStorage.getItem("phone")}`;
        document.getElementById("email").innerHTML = `${localStorage.getItem("email")}`;
        document.getElementById("gender").innerHTML = `${localStorage.getItem("gender")}`;
    }
    else{
        document.getElementById("name").innerHTML = `Please fill the form <a href = "index.html">here</a>.`;   
    }
    
}

loadData();