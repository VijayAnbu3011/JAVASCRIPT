// let promise1 =new Promise(function(resolve,reject){
//     if(10>5){
//         resolve("10 is greater than 5");
//     }
//     else{
//         reject("10 is smaller");
//     }
// })
// promise1.then(function(resolve){
//     console.log("result ,",resolve);
// })
// promise1.catch(function(reject){
//     console.log("reject ,",reject);
// })

// let a=[10,20,30,30,40,50,40,50]
// let duplicate=a.filter((value,index)=>{
//     // return a.indexOf(value)===index
//     return value>30;
// })
//  console.log(a);
//  console.log(duplicate);
// fetch

let url="https://jsonplaceholder.typicode.com/users"

let getData=async()=>{
    await fetch(url)
    .then(function (response,reject){
        if(response.status>=200 && response.status<=299){
            return response.json()
        }else{
            throw("error",reject)
        }
    })
    .then(function (response){
        console.log(response);
    })
    .catch(function (reject){
        console.log("error");
    })
}
getData()

































































