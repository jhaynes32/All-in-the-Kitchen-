const recipeSeciton = document.querySelector('.recipes');
const userId = window.location.pathname.split('/')[3];


const handleSuccess = (recipes) => {
    console.log(recipes);
    recipeSeciton.innerHTML = '';
    recipes.forEach(recipe => {
        const template = `
        <li>${recipeText}<button class="delete" id="${recipe._id}">Delete</button><button class="update" id="${recipe._id}">Edit</></li>`;

        document.querySelector('.recipes').insertAdjacentHTML('afterbegin', template);
    })
    
}

const getAllRecipes = () => {
    fetch('/api/v1/recipe-index', {
        method: 'GET'
    })
    .then(streamm => streamm.json())
    .then(res => {
        handleSuccess(res.data);
    })
    .catch((err) => console.log(err));
};

getAllRecipes();

const recipeData = {};
recipeSeciton.addEventListener('click', (event) => {
    event.preventDefault();
    const recipeId = event.target.id;
    console.log(recipeId);
    if (event.target.classList.contains('update')) {
        return window.location = `/recipe/edit/${recipeId}`
    }
});


recipeSection.addEventListener('click', (event) => {
    const recipeId = event.target.id;
    if (event.target.classList.contains('delete')) {
      fetch(`/api/v1/profiles/${recipeId}`, {
        method: 'DELETE'
      })
        .then(stream => stream.json())
        .then(res => {
          // handleSuccess(res.data);
          getAllRecipes();
        })
        .catch((err) => console.log(err));
    }
  });
  
  
  
  
//   const recipeData = {};
  recipeSection.addEventListener('click', (event) => {
    event.preventDefault();
    const recipeId = event.target.id;
    // if (event.target.classList.contains('u'))
    console.log(recipeId);
    if (event.target.classList.contains('update')) {
      return window.location = `/profile/edit/${recipeId}`
    }
  });
  