const loginBtn = document.querySelector('.clicked');
let signUpBtn = document.querySelector('.clicked1');
const upContainer = document.querySelector('.up');
const sucessContainer = document.querySelector('.sucess');
const recieved = document.querySelector('.recieved');
const noFirst = document.querySelector('.down'); 
let emailInput = document.getElementById('email');
let passwordInput = document.getElementById('password');
let userNameInput = document.getElementById('username');
const required = document.querySelector('.required');
let rR = document.querySelector('.r2');
const signU = document.querySelector('.sign-u');
const signI = document.querySelector('.sign-i');
const sigU = document.querySelector('.sig-u'); 





loginBtn.addEventListener('click', () => {

    
    if (emailInput.value !== "" && passwordInput.value !== "") {

        
    sucessContainer.classList.add('active');
    noFirst.classList.add('passive');


    recieved.innerHTML = `welcome ${emailInput.value}`;


    } else {

        required.innerHTML = `invalid email or password`;
    }


});


sigU.addEventListener('click', () => {

    sucessContainer.classList.remove('active');
    noFirst.classList.remove('passive');

    emailInput.value ="";
    passwordInput.value = "";
});

signU.addEventListener('click', () => {

    upContainer.classList.add('active');
    noFirst.classList.add('passive');
});


signI.addEventListener('click', () => {

    upContainer.classList.remove('active');
    
    noFirst.classList.remove('passive');
});



signUpBtn.addEventListener('click', () => {

    let userName = userNameInput.value;
    let email = emailInput.value;
    let password = passwordInput.value;

    localStorage.setItem('userName', userName);
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);

    
    rR.innerHTML = `Sucess`;
    
});
