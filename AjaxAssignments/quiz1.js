let P= new Promise((res,rej)=>{
    if(1==2){
        res(true);
    }
    else{
        rej(false);
    }
});
P.then((message)=>{
    console.log("Inside then method");
},(message)=>{
    console.log("Inside then method");
}).catch((message)=>{
    console.log("Inside catch method");
});