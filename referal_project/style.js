

let email = document.getElementById('user_email').value;


const validateEmail = (email) => {
    return String(email)
        .toLocaleLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
};

document.getElementById('referal_landing').onclick = function(){
    location.href = ("/Users/javi/Desktop/JS/Referal_project/refer.html");
}
