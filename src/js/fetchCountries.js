export default (searchQuery) => {
    const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`
   return fetch(url)
       .then(response => {
            if (!response.ok) {
                throw error;
            }
            return response.json()
        })
}