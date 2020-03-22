const searchBar=document.querySelector('.searchbar')
const button=document.querySelector('.button')
const countriesDiv=document.querySelector('.Countries-div')

const url='https://restcountries.eu/rest/v2/all'
fetch(url)
.then(response => response.json())
.then(countries => {
    for (const country of countries) {
        let {
            name,
            capital,
            population,
            region,
            languages,
            flag,
        } = country
      const langua=languages.map(x=>x.name)
      console.log(langua)
    
        
        countriesDiv.innerHTML += `<div class='small-div'>
        <img class='image' src=${flag}>    
        <h2>${name}</h2>
        <p>capital:${capital}</p>
        <p>Languages:${langua}</p>
        <p>Population:${population}</p>
        </div>`
    }
})