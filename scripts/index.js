// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page  


 let country = "in";
let getData = async (country) => {
  try {
    let data = await fetch(
      `https://masai-api.herokuapp.com/news/top-headlines?country=${country}`
    );
    let a1 = await data.json();
    a1 = a1.articles;
    console.log(a1);
    let results = document.getElementById("results");
    results.innerHTML = "";
    a1.forEach((element) => {
      let { content, description, title, urlToImage } = element;
      let showNewsHtml = `
            <div >
              <div >
                <img
                  src=${urlToImage}
                  alt=""
                />
                <div>
                  <h1 class="font-bold">${title}</h1>
        
                  <h4>${description}</h4>
                </div>
              </div>
            </div>;`;
      results.innerHTML += showNewsHtml;
    });
  } catch (error) {
    console.log(error);
  }
};

getData("in");


function showUs() {
  getData("us");
}

function showUk() {
  getData("uk");
}

function showNz() {
  getData("nz");
}

function showIn() {
  getData("in");
}
function showCh() {
  getData("ch");
}
