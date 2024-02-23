const btnEl = document.getElementById("btn");
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const apiURL = "https://api.quotable.io/random";

async function getQuote() {
  try {
    btnEl.disabled = true;
    btnEl.innerText = "Loading...";
    quoteEl.innerText = "Updating...";
    authorEl.innerText = "";
    const data = await fetch(apiURL).then((res) => res.json());
    quoteEl.innerText = data.content;
    authorEl.innerText = "~ " + data.author;
    btnEl.disabled = false;
    btnEl.innerText = "Get a Quote";
  } catch (error) {
    btnEl.innerText = "Get a quote";
    quoteEl.innerText = "Error, Please try again later";
    authorEl.innerText = "";
    btnEl.disabled = false;
  }
}

btnEl.addEventListener("click", getQuote);
