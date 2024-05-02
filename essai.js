function id_verify(value){
    
    let usernameContainer = document.getElementById('username-container');
    let errorMessage = document.querySelector('#username-container > small');
    

    if(value.length > 0 && (value.length < 6 || value.length > 12)){
        usernameContainer.classList.add('error');
        errorMessage.textContent = "L'Id doit faire entre 6 et 12 caractères";
        errorMessage.style.color = "red";
    }
    else{
        usernameContainer.classList.remove('error');
        errorMessage.textContent = "";
        errorMessage.style.color = "";
    }
}