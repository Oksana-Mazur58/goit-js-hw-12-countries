import './styles.css';
import countryCardTpl from './templates/country_card.hbs'
import debounce from 'lodash.debounce';


const refs = {
    countryContainer: document.querySelector('.js-country-container'),
    input: document.querySelector('.input')
}

refs.input.addEventListener('input', debounce(onFindCountry,2000))

function onFindCountry(e) {

    const countryName = e.target.value

    fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
        .then(response => {
            return response.json()
        })
        .then(country => {
            console.log(country);
            const markup = countryCardTpl(country[0])
            console.log(markup)
            refs.countryContainer.innerHTML = markup;

        })
        .catch(error => {
            console.log(error);
        })  
}

