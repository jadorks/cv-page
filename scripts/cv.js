function loadData(){

    const name = localStorage.getItem("fname") + " " + localStorage.getItem("mid") + " " + localStorage.getItem("lname");
    
    document.getElementById("name").innerHTML = `${name}`;
    document.getElementById("address").innerHTML = `${localStorage.getItem("address")}`;
    document.getElementById("phone").innerHTML = `${localStorage.getItem("phone")}`;
    document.getElementById("email").innerHTML = `${localStorage.getItem("email")}`;
    document.getElementById("gender").innerHTML = `${localStorage.getItem("gender")}`;
}

loadData();