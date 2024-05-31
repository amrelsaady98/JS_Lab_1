
// JS Lab_1

var userName, userBirthYear, userAge;
var textPattern = /^([a-zA-Z\s]+$)/;
var numbersPattern = /^[0-9]+$/;
var isUserNameValid, isBirthYearValid;

alert('Welcome to My Site');


do{
  userName = prompt('Enter your name');
  isUserNameValid = textPattern.test(userName);
  console.log(isUserNameValid);
  if(!isUserNameValid){
    alert('Please enter a valid name');
  }
} while(!isUserNameValid);



do {
  userBirthYear = prompt('Enter your birth year');
  isBirthYearValid = true;
  console.log(isBirthYearValid);
  if(!numbersPattern.test(userBirthYear) ){
    alert('Please enter a valid year');
    isBirthYearValid = false;
  } else if(userBirthYear > 2009 || userBirthYear < 1950){
    alert('Age must be between 14 ~ ' + (2024 - 1950));
    isBirthYearValid  = false;
  }

} while(!isBirthYearValid);


userAge = 2024 - userBirthYear;

document.write(`
<span style="font-weight: bold">Name : </span> ${userName} </br>
<span style="font-weight: bold">Birth Year : </span> ${userBirthYear} </br>
<span style="font-weight: bold">Age : </span> ${userAge} </br>
`);
