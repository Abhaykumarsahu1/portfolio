function sendMail(){
    let parms = {
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        message:document.getElementById("message").value

    }

    emailjs.send("service_ybt3h1a","template_5hd0lyq",parms)
    .then(alert("email sent!!"))
}
