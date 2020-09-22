function loadData(){

    const name = localStorage.getItem("fname") + " " + localStorage.getItem("mid") + " " + localStorage.getItem("lname");
    
    document.getElementById("name").innerHTML = `<p> ${name} </p>`;
    document.getElementById("address").innerHTML = `<p> ${localStorage.getItem("address")} </p>`;
    document.getElementById("phone").innerHTML = `<p> ${localStorage.getItem("phone")} </p>`;
    document.getElementById("email").innerHTML = `<p> ${localStorage.getItem("email")} </p>`;
    document.getElementById("gender").innerHTML = `<p> ${localStorage.getItem("gender")} </p>`;
}

loadData();