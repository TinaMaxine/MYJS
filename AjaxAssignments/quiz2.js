function show(){
    console.log("Hello");
}
function demo(fun){
    return fun;
}
setTimeout(demo(show),0);