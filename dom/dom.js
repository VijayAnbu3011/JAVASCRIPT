let element=document.getElementById("test")
console.log("element",element);
// element.innerHTML="<button>good Morning</button>"
// element.innerText="<button>good Morning</button>"
element.style.color="blue";
let pTag=document.createElement("p")
let pText=pTag.textContent="Some thing written inside p tag"   
document.write(pText)
// document.write(pTag.textContent="Some thing written inside p tag")
let democlass=document.querySelector(".demo")
console.log(democlass);
let demoClass1=document.querySelectorAll(".demo")
console.log(democlass1);
let pElement=document.getElementsByTagName("p")
console.log(pElement);
let randomText=document.getElementById("randomText2")
randomText.className="randomText"
randomText.classList="randomText randomText1"