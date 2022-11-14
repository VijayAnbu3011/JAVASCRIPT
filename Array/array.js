var bikes=["Ducati","Ninja","Tiger","Harley","Pulser"]
for(var i=0;i<bikes.length;i++){
    console.log("bikes in index",i,bikes[i]);
}
console.log("================");
// reverse
for(var i=bikes.length-1;i>=0;i--){
    console.log("bikes in index",i,bikes[i]);

}
console.log("===================");
// array of object
var books=[{
    tittle:"JAVA",
    price:500
},
{
    tittle:"Python",
    price:1500
},
{
    tittle:"JAVA SCRIPT",
    price:1700
},
{
    tittle:"c",
    price:200
}
]
// less then price 1000 in array
for(var i=0;i<books.length;i++)
{
    if(books[i].price>1000){
        console.log(books[i].tittle);
    }
}
// greater then length 4 of tittle
for(var i=0;i<books.length;i++)
{
    if(books[i].tittle.length>4){
        console.log(books[i].tittle,books[i].price);
    }
}


