var form = document.getElementById('contact');


form.addEventListener('submit', validateForm);

function validateForm(event) {
  event.preventDefault();
  var isValid = true;
  var patientNameValue = document.getElementById('patientName').value;
  var patientLastNameValue = document.getElementById('lastName').value;
 
  var emailValue = document.getElementById('email').value;


  //      //// First Name Validation ////

  if (patientNameValue === 0) {
    isValid = false;
    document.getElementById('firstNameRequied').innerHTML = "Please enter a valid firstlast name * ";
  }
  if (patientNameValue.indexOf(" ") !== -1) {
    isValid = false;
    document.getElementById('firstNameRequied').innerHTML = "Please enter a valid firstlast name * ";
  }
  if (!isNaN(patientNameValue)) {
    isValid = false;
    document.getElementById('firstNameRequied').innerHTML = "Please enter a valid firstlast name * ";
  }


  //    //// Last Name Validation ////

  if (patientLastNameValue  === 0) {
    isValid = false;
    document.getElementById('lastNameRequied').innerHTML = "Please enter a valid last name * ";
  }
  if (patientLastNameValue.indexOf(" ") !== -1) {
    isValid = false;
    document.getElementById('lastNameRequied').innerHTML = "Please enter a valid last name * ";
  }
  if (!isNaN(patientLastNameValue)) {
    isValid = false;
    document.getElementById('lastNameRequied').innerHTML = "Please enter a valid last name * ";
  }

         //// SEX ////
  
 
  
  //        //// Phone - optional ////

 


  
  //        //// Email ////

  
  if (emailValue.indexOf('@') === -1 || emailValue.indexOf('.') === -1 ) {
    document.getElementById('emailCheck').innerHTML = "Please enter a valid Email * ";
    isValid = false;

  }
  if (emailValue.length <5 ) {
    document.getElementById('emailCheck').innerHTML = "Please enter a valid Email * ";
    isValid = false;

  }



}

console.log("deda");