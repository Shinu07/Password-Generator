const passwordBox = document.getElementById("Password");
const button = document.getElementById("btn");
const length = 14;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()_-+{}[]:'\/=~";


let allChars = upperCase + lowerCase + number + symbol ;

function createPassword(){
  let password = "";
  password += upperCase[Math.floor(Math.random()*upperCase.length)]
  password += lowerCase[Math.floor(Math.random()*lowerCase.length)]
  password += number[Math.floor(Math.random()*number.length)]
  password += symbol[Math.floor(Math.random()*symbol.length)]

while (length > password.length){
password += allChars[Math.floor(Math.random()*allChars.length )]
}
passwordBox.value = password
}

button.addEventListener("click",createPassword)



function copyPassword() {
  navigator.clipboard.writeText(passwordBox.value).then(() => {
    alert("Password copied to clipboard");
  });
}






















// const allChars = upperCase + lowerCase + number + symbol ;
// console.log(typeof allChars);

// function createPassword(){
//     let password = "";
//     password += upperCase[Math.floor(Math.random()* upperCase.length)];
//     password += lowerCase[Math.floor(Math.random()* lowerCase.length)];
//     password += number[Math.floor(Math.random()* number.length)];
//     password += symbol[Math.floor(Math.random()* symbol.length)];

// while(length>password.length){
// password += allChars[Math.floor(Math.random()*allChars.length)];
// }
// passwordBox.value = password;
// }
// button.addEventListener("click",createPassword);

// function copyPassword() {
 
// navigator.clipboard.readText()
// .then(text => {
//     console.log('Clipboard content:', text);
// })
// .catch(err => {
//     console.error('Failed to read from clipboard:', err);
// });
// }
// navigator.clipboard
//   .readText()
//   .then(
//     (clipText) => (document.querySelector(".editor").innerText += clipText),
//   );