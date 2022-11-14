let person={
    fname:"Vijay",
    address:"Bangalore",
    pincode:123456
}
let stringifiedPerson=JSON.stringify(person)
console.log("stringifiedPerson",stringifiedPerson);

localStorage.setItem("person",stringifiedPerson)

localStorage.setItem("name","Vijay")
let getName=localStorage.getItem("name")
console.log("getName",getName);
document.write(getName)

let logout=()=>{
    localStorage.clear()
}