//Get reference to the DOM elements
const sign_Up = document.getElementById('sign_up');     
const sign_In = document.getElementById('sign_in');
const login_In = document.getElementById('login_in');
const login_Up = document.getElementById('login_up');

//Add Event Listener
sign_Up.addEventListener('click', ()=> {
    //Remove classes first if they exist

    login_In.classList.remove('block');
    login_Up.classList.remove('none');

    //Add classes
    login_In.classList.toggle('none');
    login_Up.classList.toggle('block');
});

sign_In.addEventListener('click', ()=>{
    //Remove classes first if they exist

    login_In.classList.remove('none');
    login_Up.classList.remove('block');

    //Add classes
    login_In.classList.toggle('block');
    login_Up.classList.toggle('none');
});