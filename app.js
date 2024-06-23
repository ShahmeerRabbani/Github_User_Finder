const userInput = document.getElementById("userInput");
const box = document.getElementById("box");

// const SearchUser = () => {
//     fetch(`https://api.github.com/users/${userInput.value}`)
//     .then((response) => response.json())
//     .then((response) => console.log(response))
//     .catch((error) => console.log(error))
// }



const SearchUser = () => {
    const promise = new Promise(() => {
      fetch(`https://api.github.com/users/${userInput.value}`)
        .then((response) => response.json())
        .then((response) => {
            console.log(response)
            box.innerHTML = `<img src=${response.avatar_url} class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${response.name}</h5>
          <p class="card-text">${response.bio}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Company <b> ${response.company} </b></li>
          <li class="list-group-item">Public repository <b> ${response.public_repos} </b></li>
          <li class="list-group-item">Followers <b> ${response.followers} </b></li>
          <li class="list-group-item">Following <b> ${response.following} </b></li>
          <li class="list-group-item">Email <b>${response.email} </b></li>
          <li class="list-group-item">Twitter <b> ${response.twitter_username} </b></li>
        </ul>
        <div class="card-body">
          <a href=${response.blog} class="card-link" target = 'blank'>Blog</a>
          <a href=${response.html_url} class="card-link" target = 'blank'>Github Page</a>
        </div>`
        })
        .catch((error) => console.log(error));
    });
    
    // promise.then((res) => console.log(res)).catch((err) => console.log(err));
}

