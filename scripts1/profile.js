// console.log('Welcome User');
const userId = window.location.pathname.split('/')[3];
console.log(userId);
const form = document.querySelector('form');     


const handleSubmit = (event) => {
    event.preventDefault();
    console.log('form here');
    const name = document.getElementById('name');
    const email = document.getElementById('email');

    const userData = {
        name: name.value,
        email: email.value,
    };

    console.log('Submitting User Data --->', userData );

    fetch(`/api/v1/profiles/edit/${userId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
        .then(stream => stream.json())
        .then(res => {
            console.log(res);
            if(res.status === 200) return window.location = `/profile/${res.data._id}`
        })

};


form.addEventListener('submit', handleSubmit);




