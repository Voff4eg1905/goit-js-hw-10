import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
var debounce = require('lodash.debounce');
import { fetchCountries } from './fetchCountries';
const DEBOUNCE_DELAY = 300;
const inputEl = document.querySelector('#search-box');
const countryInfoEl = document.querySelector('.country-info');
const countryListEl = document.querySelector('.country-list');

const onInputEntry = event => {
  let enteredText = event.target.value.trim();
  countryInfoEl.innerHTML = '';
  countryListEl.innerHTML = '';
  if (!enteredText) {
    return;
  }
  console.log(enteredText);
  fetchCountries(enteredText)
    .then(data => {
      console.log(data);
      if (data.length > 10) {
        Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
      } else if (data.length > 2 && data.length < 10) {
        renderListOfCountries(data);
      } else if (data.length === 1) {
        renderCountry(data);
      }
    })
    .catch(err => {
      if (err.message === '404') {
        Notify.failure('Oops, there is no country with that name');
        return;
      }
      console.log(err);
    });
};
inputEl.addEventListener('input', debounce(onInputEntry, DEBOUNCE_DELAY));

function renderCountry(country) {
  let countryInfo = country[0];
  const { flags, name, capital, population, languages } = countryInfo;
  let languagesList = '';
  languages.forEach(language => {
    languagesList += `<li class="language">${language.name}</li>`;
  });

  return countryInfoEl.innerHTML = ` <img src="${flags.svg}" alt="${name}"> <h1 class = "country_name">${name}</h1>
<p>Capital: ${capital} </p>
<p>Population: ${population} </p>
<p> Languages: </p>

<ul class="languages"> 
${languagesList}
   </ul>`;
}

function renderListOfCountries(list) {
  console.log('2-10');
  let renderedList = '';
  const countriesList = list.map(({ name, flags: { svg } }) => {
    renderedList += `<li class="country"><img src="${svg}" alt="${name}"> ${name}</li>`;
  });
  return countryListEl.innerHTML = renderedList;
}
