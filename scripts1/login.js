// console.log('Hello Jeremiah')
const form = document.querySelector('form');
const userId = window.location.pathname.split('/')[2];


const handleSuccess = (res) => {
    document.getElementById('welcomeUser').insertAdjacentHTML('afterbegin', `${res.data.name}`);    
}


// Listen for login click event
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const name = document.getElementById('name').value;

    const userData = {
        email,
        password,
        name,
    }

    console.log(userData);

    fetch(`/api/v1/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
        .then(stream => stream.json())
        .then(res => { 
            console.log(res);
            if (res.status === 200) return window.location = `/profile/${res.data._id}`;
        })
        .catch(err => console.log(err));
});


handleSuccess();




















