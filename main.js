var signinBtn = document.querySelector(".signin-btn");
var signupBtn = document.querySelector(".signup-btn");
var btn = document.querySelector("#btn");
var Enregistrement = document.querySelector("#Enregistrement");
var Connexion = document.querySelector("#Connexion");

    signupBtn.onclick = function(){
        Enregistrement.classList.add("active")
        Connexion.classList.add("active")
        btn.classList.add("active")
    }

    signinBtn.onclick = function(){
        Connexion.classList.remove("active")
        Enregistrement.classList.remove("active")
        btn.classList.remove("active")
    }

//---------------------------------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------------------------------


const inputs = document.querySelectorAll('input');
// console.log(inputs);

let id,loginPassword,username,email,registerPassword,confirmPassword;

//-------------------------------------------------------------------------------------

function ErrorDisplay(tag, message, valid){


    const container = document.getElementById(tag +'-container');
    const small = document.querySelector('#' + tag + '-container > small');

    // console.log(small, container);

    if(!valid){
        container.classList.add("error");
        small.textContent = message;
        small.style.color = "red";
    }
    else{
        container.classList.remove('error');
        small.textContent = "";
        small.style.color = "";
    }
}

//-------------------------------------------------------------------------------------

function id_verify(value){

   /*  if(value.length > 0 && (value.length < 6 || value.length > 12)){
        ErrorDisplay('id', 'L\'Id doit faire entre 6 et 12 caractères');
    } */
    if(value != 125565555){
        ErrorDisplay('id', 'L\'Id est incorect');
        id = null;
    }
    else{
        ErrorDisplay('id', '', true);
        id = value;
    }
}

//------------------------------------------------------------------------------------------

function loginPassword_verify(value){

    /* if(value.length < 8 && !value.match(/^[\w]+[1-9]$/)){
        ErrorDisplay('loginPassword', '8 caractères minimum et au moins un chiffre');
    } */
    if(value != 'Euvince2003'){
        ErrorDisplay('loginPassword', 'Le mot de passe est incorrect');
        loginPassword = null;
    }
    else{
        ErrorDisplay('loginPassword', '', true);
        loginPassword = value;
    }
}

//------------------------------------------------------------------------------------------

function username_verify(value){

    if(value.length > 0 && (value.length < 6 || value.length > 20)){
        ErrorDisplay('username', 'Le nom d\'utilisateur doit faire entre 6 et 20 caractères');
        username = null;
    }
    /* else if(!value.match(/^[a-zA-Z0-9_.-]$/)){
        ErrorDisplay("username", "Le nom d\'utilisateur ne doit pas contenir de caractères spéciaux");
    } */
    else{
        ErrorDisplay('username', '', true);
        username = value;
    }
}

//------------------------------------------------------------------------------------------

function email_verify(value) {

    if(!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)){
        ErrorDisplay('email', 'L\'email ne respecte pas le format habituel');
        email = null;
    }
    else{
        ErrorDisplay('email', '', true);
        email = value;
    }
}

//------------------------------------------------------------------------------------------

function registerPassword_verify(value){
    
    if(value.length < 8){
        ErrorDisplay('registerPassword', '8 caractères minimum');
        registerPassword = null;
    }
    else{
        ErrorDisplay('registerPassword', '', true);
        registerPassword = value;
    }

    if(confirmPassword) confirmPassword_verify(confirmPassword);
}


//----------------------------------------------------------------------------------------

function confirmPassword_verify(value){

    if(value != registerPassword){
        ErrorDisplay("confirm", "Les mots de passes ne correspondent pas !");
        confirmPassword = false;
    }
    else{
        ErrorDisplay("confirm", "", true);
        confirmPassword = true;
    }
}

//-----------------------------------------------------------------------------------------

inputs.forEach((input) => {
    input.addEventListener('input', (e) => {
        switch(e.target.id){
            case "ID" :
                id_verify(e.target.value);
            break;
            case "loginPassword" :
                loginPassword_verify(e.target.value);
            break;
            case "username" :
                username_verify(e.target.value);
            break;
            case "email" :
                email_verify(e.target.value);
            break;
            case "registerPassword" :
                registerPassword_verify(e.target.value);
            break;
            case "confirmPassword" :
                confirmPassword_verify(e.target.value);
            default : 
                null;
        };
    })
})

const compteur = null;

Connexion.addEventListener('submit', (e) => {
    const msgCrr = document.getElementById('msgCrr');
    e.preventDefault();
    if(id && loginPassword){
        alert("Connexion Validée");
    }
    else{
        msgCrr.textContent = "Veuillez remplir correctement les champs";
        msgCrr.style.color = "red";
    }
  
    for(i = 0; i < 3; i++){
        if(!id || !loginPassword)  compteur++;
    }

    if(compteur == 3) alert("Vous êtes un imposteur");
   
})

Enregistrement.addEventListener('submit', (e) => {
    const msgErr = document.getElementById('msgErr');
    e.preventDefault();
    if(username && email && registerPassword  && confirmPassword){
        alert("Enrégistrement Validé");
    }
    else{
        msgErr.textContent = "Veuillez remplir correctement les champs";
        msgErr.style.color = "red";
    }
  
})