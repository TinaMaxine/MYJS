document.getElementById("one").addEventListener("click",print);
function print(){
    fetch ("file1.txt")
    .then(res => res.text())
    .then(data => {console.log(data)
    document.getElementById("output").innerHTML=data})
    .catch(err => {console.log(err)
        document.getElementById("output").innerHTML=err})
}
document.getElementById("two").addEventListener("click",print2);
function print2(){
    fetch ("file1.json")
    .then(res => res.json())
    .then(data => {console.log(data)
    
    let output='';
    data.forEach(function(post) {
        output+=`<li>${post.title}:${post.Post}`;
        document.getElementById("output").innerHTML=output;
        
    });
})
    .catch(err => {console.log(err)
        document.getElementById("output").innerHTML=err})
}

document.getElementById("three").addEventListener("click",print3);
function print3(){
    fetch ("https://api.github.com/users")
    .then(res => res.json())
    .then(data => {console.log(data)
    
    let output='';
    data.forEach(function(post) {
        output+=`<li>${post.login}:${post.id}`;
        document.getElementById("output").innerHTML=output;
        
    });
})
    .catch(err => {console.log(err)
        document.getElementById("output").innerHTML=err})
}
axios
  .get("https://jsonplaceholder.typicode.com/todos")
  .then((response) => console.log(response.data))
  .catch((error) => console.error(error));