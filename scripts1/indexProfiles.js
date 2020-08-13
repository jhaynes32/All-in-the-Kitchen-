// console.log('Index Profiles');
const profilesSection = document.querySelector('.profiles');
const userId = window.location.pathname.split('/')[3];


const handleSuccess = (profiles) => {
  console.log(profiles);
  profilesSection.innerHTML = '';
  profiles.forEach(profile => {
    const template = `
      <li>${profile.name} | ${profile.email} <button class="delete" id="${profile._id}">Delete</button>
      <button class="update" id="${profile._id}">Edit</>
      </li>
    `;

    document.querySelector('.profiles').insertAdjacentHTML('afterbegin', template);
  })
}

const getAllProfiles = () => {
  fetch('/api/v1/profiles-index', {
    method: 'GET'
  })
    .then(stream => stream.json())
    .then(res => {
      handleSuccess(res.data);
    })
    .catch((err) => console.log(err));
};

getAllProfiles();



profilesSection.addEventListener('click', (event) => {
  const userId = event.target.id;
  if (event.target.classList.contains('delete')) {
    fetch(`/api/v1/profiles/${userId}`, {
      method: 'DELETE'
    })
      .then(stream => stream.json())
      .then(res => {
        // handleSuccess(res.data);
        getAllProfiles();
      })
      .catch((err) => console.log(err));
  }
});




const userData = {};
profilesSection.addEventListener('click', (event) => {
  event.preventDefault();
  const userId = event.target.id;
  // if (event.target.classList.contains('u'))
  console.log(userId);
  if (event.target.classList.contains('update')) {
    return window.location = `/profile/edit/${userId}`
  }
});

















// // const userData = {};
// profilesSection.addEventListener('click', (event) => {
//   event.preventDefault();
//   const userId = event.target.id;
//   if (event.target.classList.contains('update')) {
//     fetch(`/api/v1/profile`, {
//       method: 'PUT'
//     })
//     .then(stream => stream.json())
//     .then(res => {
//       getAllProfiles();
//     })
//   }
// });
