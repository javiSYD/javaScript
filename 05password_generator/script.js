//generate random password
function generate(){

    //set password length/complexity
    let complexity = document.getElementById("slider").value;

    //possible passwords values
    let values = "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";

    let password = "";

    //create for loop to choose password characters
    for(let i=0; i <= complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length -1)));
    }

    //add password to textbox/display area
    document.getElementById("display").value = password;
}

// length display of 25
document.getElementById("length").innerHTML = "Length: 25";

// function to set length
document.getElementById("slider").oninput = function(){
    if(document.getElementById("slider").value >0){
        document.getElementById("length").innerHTML = "Length: " + document.getElementById("slider").value;
    }
    else{
        document.getElementById("length").innerHTML = "Length: 1";
    }
}

// Clipboard function 
// Add a function to first generate the password before copy 
function copyPassword(){
    document.getElementById("display").select();

    document.execCommand("Copy");

    alert("Password copied to clipboard")
}