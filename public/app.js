
const userProfile = document.getElementById('userProfile');
const userInput = document.getElementById('search');

const SearchUser = () => {
  userProfile.innerHTML = 'loading...';
  
  const promise = new Promise(() => {
    fetch(`https://api.github.com/users/${userInput.value}`)
    .then((response) => response.json())
    .then((response) => {
      console.log(response)
     const userBox = `
               <div class="user-box">
                   <div>
                       <a href="${response.html_url}" target="_blank">
                           <img class="avatar" src="${response.avatar_url}" alt="${response.name}">
                       </a>
                   </div>
                   <div class="user-info">
                       <h2>${response.name}</h2>
                       <div class="user-bio">
                           <p>${response.bio}</p>
                           <a href="${response.html_url}" target="_blank">View Profile</a>
                       </div>
                       <ul class="meta-data">
                           <li>${response.followers} <strong>Followers</strong></li>
                           <li>${response.following} <strong>Following</strong></li>
                           <li>${response.public_repos} <strong>Repos</strong></li>
                       </ul>
                   </div>
               </div>
           `;
           userProfile.innerHTML = userBox;
    })
    .catch((error) => console.log(error))
  })
  promise.then((res) => console.log(res)).catch((err) => console.log(err))
}
