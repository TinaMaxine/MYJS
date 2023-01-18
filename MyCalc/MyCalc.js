let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
// let hclass=document.querySelector('.h1class');
// console.log(e.target);

let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {//e is event //target is the element that triggered the event which in this case is the input,
        buttonText = e.target.innerText;//the target property of the event object(e) will give the CURRENT HTML Element that the event is triggered on
        console.log('Button text is ', buttonText);//mohotutut
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}


// we will use console to do calculations and then we will reflect it's output in our screen
//selector
const result= document.querySelector(".blankScreen");
const output = document.querySelector("#output");
const keys = document.querySelectorAll("button");

//eventlistener
keys.forEach(key=>{
    key.addEventListener("click",calculate);
});
// function calculate(){
    // }
    
    function calculate(){

    let buttonText = this.innerText;
    // buttonText
    if(buttonText==="C"){
       output.innerText = "";
        result.innerText = "";
      
        return;
    }

    if(buttonText === "="){
        result.innerText = eval(output.innerText);
    }

    else{
        output.textContent += buttonText;
        return;
    }

  
}
