console.log("JS started");

async function fetchPosts() {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    console.log(response);
    const data = await response.json();
    console.log("data", data);

    let titles = "<ul>";
    data.map((val) => {
      const title = val.title;
      titles += `<li> ${title} </li>`;
    });
    titles += "</ul>";
    const ele = document.getElementById("titleData");
    ele.innerHTML = titles;
  } catch (error) {
    console.log("Error is ", error);
  } finally {
    console.log("Hello finally");
  }
}
fetchPosts();
console.log("JS ended");
