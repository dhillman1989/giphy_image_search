//API KEY
const API_KEY = "R9qWf9OebFgqBl4NQi7w8SfWghlHADHH";

//SELECT PAGE ITEMS
const container = document.querySelector("#container");
const form = document.querySelector("#searchForm");
const searchbox = document.querySelector(".searchForm__box");
const giphyImage = document.querySelector("#giphyImage");
//event listener for form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();
  getImage(searchbox.value);
});

const getImage = (search) => {
  fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=${
      search || "cats"
    }`,
    {
      mode: "cors",
    }
  )
    .then((res) => res.json())
    .then((res) => (giphyImage.src = res.data.images.original.url))
    .catch((err) => {
      giphyImage.src = "./clipart2883707.png";
      container.append;
    });
};

getImage("cats");
