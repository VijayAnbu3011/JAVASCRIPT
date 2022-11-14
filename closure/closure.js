













function outer(num){
    let n1=20-num
    return function inner(num){
        let sum=n1+40+num
        return console.log("sum",sum);
    }
}
outer(10)(20)