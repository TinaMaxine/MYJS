var users=[
    {
        username:"Shakul",
        password:"Malik"
    },
    {
        username:"Anjani",
        password:"Priyanka"
    },

]
function getDetails(){
    var username=document.getElementById("username").value
    var password=document.getElementById("password").value

    for (i=0;i<=users.length;i++){
        if(username==users[i].username && password==users[i].password){
            console.log("Login Success!");
            window.location.href="https://www.w3schools.com"; 
            // window.location.replace("https://www.w3schools.com");
        }
        else{
            console.log("Authentication error");
        }
    }
}


