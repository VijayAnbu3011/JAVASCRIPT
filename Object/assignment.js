// object using without new keyword
var book={
    title:'you can',
    author:'Vijay',
    cover:function(){
        return book.title+" Author is "+book.author 
    }
}
console.log(book.cover());
//  object with new keyword
var book=new Object()
book.title='you can'
book.author='vijay'
book.cover=function(){
    return book.title+" Author is "+book.author 
}
console.log(book.title);