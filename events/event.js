function hideName(){
    let element=document.querySelector("h1")
    console.log("element",element);
    element.style.visibility="hidden"    
}

function showName(){
    let element=document.querySelector("h1")
    console.log("element",element);
    element.style.visibility="visible"
}

function showHideName(){
    let element=document.querySelector("h1")
    if(    element.style.visibility=="visible"){
        element.style.visibility="hidden"
    }
    else{
        element.style.visibility="visible"
    }
}

let uniqueBtn=document.getElementById("uniqueBtn")

uniqueBtn.addEventListener("click",function(){
//    console.log("event",event);
   console.log("unique is clicked");
   let element=document.querySelector("h1")
   element.style.visibility="hidden"  
})
uniqueBtn.addEventListener("mouseover",function(){
    console.log("move over on the button");
    let element=document.querySelector("h1")
    element.style.visibility="visible"  
})

