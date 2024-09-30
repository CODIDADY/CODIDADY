//validation code for inputs

var email = document.forms['form']['email'];
var password = document.forms['form']['password'];



var email_error = document.forms['form']['email_error'];
var pass_error = document.forms['form']['pass_error'];

function validated(){
    if(email.value.length <9){
        email.style.border ="1px solid red";
        email_error.style.display ="block";
        email .focus();
        return false;
    }
}



