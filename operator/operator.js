// percentage
var percentage=80
var per=percentage>75 ? "FCD" : (percentage>30 ? "Pass":"Fail");
console.log(per);
typeof percentage !=="number" || percentage <0 || percentage >100 ? console.log("invalid number"): console.log(per);
// bmi
 var w = 76;
 var h = 1.8;
 var bmi = w / (h * h);
 bmi <= 18.5 ? console.log("underWeight") : bmi <= 25 ? 
 console.log("Normal") : bmi <= 30 ? console.log("overweight") : console.log("obese");;;;
 console.log(bmi);
// == And ===
var data="12"
var data1=12
if (data==data1)
//compare only value
{
    console.log("true");
}else{
    console.log("false");
}
if (data===data1)
// compare value and datatype
{
    console.log("true");
}else{
    console.log("false");
}