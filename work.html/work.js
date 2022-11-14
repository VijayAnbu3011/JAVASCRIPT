function first(){
    setTimeout(()=>{
        console.log("first Function");
    },3000);
    console.log("test u r Brain");
}
function second(){
    console.log("second function");
}
function third(){
    setTimeout(()=>{
        console.log("test ur brain2");
    },1000);
    console.log("third function");
}
first()
second()
third()