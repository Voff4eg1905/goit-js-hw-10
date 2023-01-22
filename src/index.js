// import './css/styles.css';
var debounce = require('lodash.debounce')
import {fetchCountries} from './fetchCountries';
const DEBOUNCE_DELAY = 300;
const inputEl = document.querySelector('#search-box');
const countryInfoEl = document.querySelector(".country-info")

const onInputEntry = event => {
  let enteredText = event.target.value.trim();
  if (!enteredText) {
    return;
  }
  console.log(enteredText);
  fetchCountries(enteredText).then(data => { console.log(data);  renderCountry(data)}).catch(err => console.log(err))
};
inputEl.addEventListener('input', debounce(onInputEntry, DEBOUNCE_DELAY) );


    

function renderCountry (country) {
return countryInfoEl.innerHTML = ` <img src="${country[0].flags.svg}" alt=""> <h1>${country[0].name}</h1>
<p>Capital: ${country[0].capital} </p>
<p>Population: ${country[0].population} </p>
<p>Languages: ${country[0].languages[0].name}</p>`;
}