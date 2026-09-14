function login(){
    const emailAddress = document.getElementById("email").value;
    const pass = document.getElementById("password").value;
    const msg = document.getElementById("message");

    if(emailAddress === "admin@gmail.com" && pass === "admin"){
        msg.style.color = "green";
        msg.textContent = "Login Successful";
    }
    else{
        msg.style.color = "red";
        msg.textContent = "Invalid email or password!";
    }
}