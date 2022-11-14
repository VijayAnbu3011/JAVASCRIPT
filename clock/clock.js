setInterval(mindisp,1000)
function mindisp(){

    let element=document.getElementById("hrs");
    let hour = new Date();
    let hours=hour.getHours();
    let min=hour.getMinutes();
    element.innerText=`${hours} : ${min}`

    let ampmElement=document.getElementById("ampm")
    let ampm = hours >=12 ? "PM":"AM";
    ampmElement.innerText=`${ampm} `
}
setInterval(secdisp,1000)
function secdisp(){
    let secElement=document.getElementById("sec")
    let sec= new Date()
    let secs=sec.getSeconds()
    secElement.innerText=`${secs}`
}