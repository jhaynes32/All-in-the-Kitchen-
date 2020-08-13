// import { Stream } from "stream";

console.log("Hello there");

const form = document.querySelector('form'); //grabs anything html

const handleSubmit = (event) => {
    event.preventDefault();
    console.log('form here');
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const password2 = document.getElementById('password2');

    if (password.value !== password2.value) {
        alert('Passwords do not match');
    } else {
        const userData = {
        name: name.value,
        email: email.value,
        password: password.value,
    };

     console.log('Submitting new user -->', userData);

     fetch('/api/v1/profiles', {
         method: 'POST',
         headers: {
             'Content-Type': 'application/json'
         },
         body: JSON.stringify(userData)
     })
        .then(stream => stream.json())
        .then(res => {
            console.log(res);
            if(res.status === 201) return window.location = `/profile/${res.data._id}`;})
        .catch((err) => console.log (err));   
    }
};



form.addEventListener('submit', handleSubmit);




// connect comment section to recipe page 
// create post posts on user profile 
// create create-recipe 
// Logout button 
// profile link in dropdown should go to profile page
