function show(){
    return "Hello";
}
function demo(fun){
    console.log(fun);
}
setTimeout(demo(show),0);