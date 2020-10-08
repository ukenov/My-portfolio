/* app.js, Asylhan Ukenov, 301108165, 07-10-2020*/
/* Call function after form submit button clicked to store information in variables */
var button = document.getElementById('submitBtn');

button.onclick = function() {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let emailAddress = document.getElementById("emailAddress").value;
    let shortMessage = document.getElementById("shortMessage").value;
    console.log(firstName, lastName, phoneNumber, emailAddress, shortMessage);

    location.href = '/home';
}