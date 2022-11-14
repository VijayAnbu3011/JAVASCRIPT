
let api = async()=>{
    let searchText =document.getElementById("search").value
let imdbApi = `http://www.omdbapi.com/?s=${searchText}&apikey=f056e2f7`;
    try{
        let res= await fetch(imdbApi);
        console.log("res",res);
        let data =await res.json();
        console.log("data",data);
        console.log(data.Search);
        let titles=data.Search.map((val)=>{
            return (`<div class="card" style="width: 15rem;">
            <img   src=${val.Poster} />
            <div class="card-body">
            <h5 class="card-title">${val.Title}</h5>
            <h6 class="card-title">${val.Year}</h6>
            <a href="data.Poster" class="btn btn-primary" >Movie Details</a>
            </div>
            </div>`)             
        })
        console.log(titles);
        document.getElementById("movie").innerHTML=titles
    }catch(error) {
    console.log("Error is ", error);
  } 
}
