function sum(...num){
    let sum=0;
    for(let i=0;i<num.length;i++){
        sum=sum+num[i];
    }
    console.log(sum);
}
sum(10,20,30,40,50,60)
//  to get default parameter
function greet(name="Test Yantra"){
    console.log("Hello ",name);
}
greet();
greet("vijay ")