const url='https://api.github.com/users/';
const form=document.getElementById("form");
const main= document.getElementById("main");
const search=document.getElementById("search");

async function getUser(userName){
    try{
        const {data}=await axios(url+userName)
        userCard(data);
        getRepos(userName);
    }
    catch(err){
        console.error(err);

    }
}
async function getRepos(userName){
    try{
        const {data}=await axios(url+userName+'/repos?sort=created')
        reposToCard(data);
    }
    catch(err){
        console.error(err);

    }
}
function userCard(user){
    const userID = user.name || user.login
    const userBio = user.bio ? `<p>${user.bio}</p>` : ''
    const cardHTML = `
    <div class="card">
    <div>
      <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
    </div>
    <div class="user-info">
      <h2>${userID}</h2>
      ${userBio}
      <ul>
        <li>${user.followers} <strong>Followers</strong></li>
        <li>${user.following} <strong>Following</strong></li>
        <li>${user.public_repos} <strong>Repos</strong></li>
      </ul>

      <div id="repos"></div>
    </div>
  </div>
    `
    main.innerHTML = cardHTML
    
}
function reposToCard(r){
    const fines= document.getElementById("repos");
    r.slice(0,5);
    r.forEach(repo => {
        const repoEl = document.createElement('a')
        repoEl.classList.add('repo')
        repoEl.href = repo.html_url
        repoEl.target = '_blank'
        repoEl.innerText = repo.name

        fines.appendChild(repoEl)
    })
    form.addEventListener("submit",(e)=>{
        e.preventDefault();
        const user=search.value;
        if(user){
            getUser(user);
            search.value="";

        }
    });

}