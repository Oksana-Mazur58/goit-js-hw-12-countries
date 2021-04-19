
import './styles.css';
import countryCardTpl from './templates/country_card.hbs'
import debounce from 'lodash.debounce';
import fetchCountries from './js/fetchCountries';
import refs from './js/refs';
import countryCardList from './templates/country_card-list.hbs'
import featchError from './js/fetchError'


refs.input.addEventListener('input', debounce(onFindCountry, 2000))

function onFindCountry(e) {
    const currentEl = e.currentTarget;
    const countryName = e.target.value;
    if (countryName === '') {
        countryMarkup('')
    }
        
        fetchCountries(countryName)
        .then(renderCountryCard)
        //.catch(error => countryMarkup('<h1>Sorry! Could not find this page</h1>'))
    .finally(()=>countryName.reset())
}

function renderCountryCard(country) {
    if (country.length === 1) {
        const markupCard = countryCardTpl(country[0])
            countryMarkup(markupCard)
        refs.countryContainer.innerHTML = markup;
    }
    else if (country.length > 10) {
        featchError()
    }
    else {const markupList = countryCardList(country)
            countryMarkup(markupList)
        
        
    }
     
}

function countryMarkup(markup) {
    refs.countryContainer.innerHTML = markup;
}