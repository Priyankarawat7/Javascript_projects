const passwordBox= document.getElementById('password');

const passlength=10;

const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase="abcdefghijklmnopqrstuvwxyz";
const symbol="!@#$%^&*()_+=-{}[]|/<>~";
const number="1234567890";

const allCars=upperCase+lowerCase+symbol+number;


function createPassword()
{
    let password="";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += symbol[Math.floor(Math.random() *    symbol.length)];
    password += number[Math.floor(Math.random() * number.length)];

    while(passlength> password.length)
    {
          password += allCars[Math.floor(Math.random() * allCars.length)];

    }
    passwordBox.value=password;

}


function copypassword(){

    passwordBox.select();
    document.execCommand("copy");
}