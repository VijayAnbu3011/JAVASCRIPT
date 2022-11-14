console.log("JS started");
// promise
let promiseExample=new Promise(function (resolve,reject){
    if(10<5){
        resolve("10 is greater than 5")
    }else{
        reject("10 is smaller")
    }    
});
promiseExample.then(function (resolve){
    console.log("result",resolve);
})
promiseExample.catch (function (reject){
    console.log("reject",reject);
});

// function greet(){
//     console.log("hello everyone");
// }
// greet();
// console.log("JS ENDED");
