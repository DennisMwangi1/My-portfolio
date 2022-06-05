function validateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

if (inputText.value.length === 0) {
    alert("Enter Email address")
    
} else {
    
    if(inputText.value.match(mailformat))
    {
    document.form.email.focus();
    alert("Thank you for your submission.Ill get back to you soon.")
    valid();
     return true;
    }
    else
    {
    alert("You have entered an invalid email address!");
    document.form.email.focus();
    checker()
    return false;
    }}
}

function checker() {
    window.location.assign("#sect6container")
}
function valid() {
    window.location.assign("#sect1")
}
