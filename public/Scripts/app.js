/* app.js, Asylhan Ukenov, 301108165, 07-10-2020*/
// Invoked at the start
(function(){
	function Start()
	{
        let deleteButtons = document.querySelectorAll('.btn-outline-danger');
        
        for(button of deleteButtons) 
        {
            button.addEventListener('click', (event)=>{
                if(!confirm("Are you sure?")) 
                {
                    event.preventDefault();
                    window.location.assign('/bcontact-list');
                }
            });
        }
	}
	window.addEventListener("load", Start);
})();

/* Call function after form submit button clicked to store information in variables */
$(function(){
        if($('div').is('.contact-information')){
            var submitButton = document.getElementById('submitBtn');

            submitButton.onclick = function() {
            let firstName = document.getElementById("firstName").value;
            let lastName = document.getElementById("lastName").value;
            let phoneNumber = document.getElementById("phoneNumber").value;
            let emailAddress = document.getElementById("emailAddress").value;
            let shortMessage = document.getElementById("shortMessage").value;
            console.log(firstName, lastName, phoneNumber, emailAddress, shortMessage);
            
            location.href = '/home';
        }
    }
});


