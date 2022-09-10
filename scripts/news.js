var countryName = localStorage.getItem("UserInpSearch");
var getDataApiFun = async (countryName) => {
  try {
    var data = await fetch(
      `https://masai-api.herokuapp.com/news?q=${countryName}`
    );
    var ddd = await data.json();
    dapi = ddd.articles;
    var results = document.getElementById("results");
    results.innerHTML = "";
    dapi.forEach((element) => {
      const { description, title, urlToImage } = element;
      var NewsToUser = `
            <div class="news " onclick="storeNews()">
              <div >
                <img
                  src=${urlToImage}
                  alt=""
                />
                <div>
                  <h3 >${title}</h3>
                  <h5>${description}</h5>
                </div>
              </div>
            </div>;`;
      results.innerHTML += NewsToUser;
    });
  } catch (err) {}
};
getDataApiFun(countryName);

function storeNews() {
  location.href = "news.html";
}

var Seinp = document.getElementById("search_input");
Seinp.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    var uinp = document.getElementById("search_input").value;
    localStorage.setItem("Uinp", uinp);
    location.href = "search.html";
  }
});
