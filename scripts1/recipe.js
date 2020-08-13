console.log('See the Recipes')
const recipeId = window.location.pathname.split('/')[3];
console.log(recipeId);
const form = document.querySelector('form');

const handleSubmit = (event) => {
    event.preventDefault();
    console.log('form here');
    const text = document.getElementById('recipeText');

    const recipeData = {
        text: text.value,
    };

    console.log('Submitting Recipe Data ---->', recipeData );

    fetch(`/api/v1/recipe/edit/${recipeId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(recipeData)
        })
            .then(stream => stream.json())
            .then(res => {
            console.log(res);
            if(res.status === 200) return window.location = `/recipe/${res.data._id}`
        })

          
};

form.addEventListener('submit', handleSubmit);