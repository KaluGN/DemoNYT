const form = document.getElementById('search-form');
const searchField = document.getElementById('search-keyword');
const responseContainer = document.getElementById('response-container');
let searchedForText;

form.addEventListener('submit', function (e) {
    e.preventDefault();
    responseContainer.innerHTML = '';
    searchedForText = searchField.value;
    getNews();
});

function getNews() {
    const articleRequest = new XMLHttpRequest();
    articleRequest.open('GET', `HTTP://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedForText}&api-key=<TU KEY>`);
    articleRequest.onload = addNews;
    articleRequest.onerror = handleError;
    articleRequest.send();
}

function handleError () {
    console.log('Error, error... retirada');
}

