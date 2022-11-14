
// let url="https://jsonplaceholder.typicode.com/users"

// let api=async ()=>{
//     let response=await fetch(url)
 //     let data=await response.json()
//     console.log("data",data);
// }
// api()
// to find err

// let api=async ()=>{
//     try{
//     let response=await fetch(url)
//     let data=await response.json()
//     console.log("data",data);
//     } catch(err){
//         console.log(err);
//     }
// }


// using alert msg to find error
// let api=async()=>{
//     await fetch(url)
//     .then((response)=>{
//         if(response.status >=200 && response.status <=299){
//             return response.json();
//         }else{
//             throw Error(response.statusText);
//         }
//     })
//     .then((JSONResponse)=>{
//         return console.log("response",reponse);
//     }).catch((error)=>{
//         console.log(error);
//     });
// }
// api()
async function fetchPosts(){
    try{
        const response=await fetch(`https://jsonplaceholder.typicode.com/posts`);
        console.log(response);
        const data =await response.json();
        console.log("data",data);
        let titles="<ul>";
        data.map((val)=>{
            const title=val.title;
            titles +=`<li>${title}<li>`
        });
        titles +="<ul>"
        const ele =document.getElementById("titleData");
        ele.innerHTML=titles;
        
    }catch(error){
        console.log(("error is",error));
    }finally{
        console.log("hello finally");
    }
}
    fetchPosts();
    console.log("JS ENDED")
