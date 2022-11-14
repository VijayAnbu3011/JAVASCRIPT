let url = "https://jsonplaceholder.typicode.com/users";

let api = async () => {
  try {
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err.message);
  }
};

api()

// let api = async () => {
//   await fetch(url)
//     .then((response) => {
//       if (response.status >= 200 && response.status <= 299) {
//         return response.json();
//       } else {
//         throw Error(response.statusText);
//       }
//     })
//     .then((data) => {
//       console.log("data", data);
//     })
//     .catch((err) => {
//         alert("Not able to fetch the api")
//       console.log("inside catch block",err);
//     });
// };
