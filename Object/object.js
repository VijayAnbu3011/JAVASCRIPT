var book={
    title:'You Can',
    Author:'vijay',
    Price:500,
    isonline:true,
    cover:function(){
        return book.title+" Auther is "+book.Author
    }
}
console.log(book.cover());

// with using new 
var book=new Object()
book.name="You can",
book.Author="Vijay",
book.price=500,
book.cover=function(){
    return book.name
}
console.log(book.cover());