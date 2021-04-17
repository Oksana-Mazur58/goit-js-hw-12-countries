import './styles.css';
import countryCardTpl from './templates/country_card.hbs'

fetch('https://restcountries.eu/rest/v2/name/Ukraine')
    .then(response => {
    return response.json()
})
    .then(country => {
        console.log(country);
        const markup = countryCardTpl(country)
        console.log (markup)
    })
    .catch(error => {
        console.log(error);
})