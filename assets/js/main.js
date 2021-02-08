document.getElementById("submit").addEventListener("click", function () {
    //console.log("button geklickt");
    let fullName = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    console.log("Full name: " + fullName + ", Email: " + email + ", Message: " + message);
});