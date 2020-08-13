console.log("Weezy Outta Here");

const form = document.querySelector('form');
// const loginButton = document.querySelector('login')
// const id = window.location.pathname.split('/')[2];


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

    fetch(`/api/v1/profiles/`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
        .then(stream => stream.json())
        .then(res => {
            console.log(res);
            if (res.status === 201) return window.location = `/profile/${res.data._id}`;
        })
        .catch(err => console.log(err));
});


