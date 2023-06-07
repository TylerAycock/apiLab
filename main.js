const button = document.querySelector(`button`)
const section = document.querySelector(`section`)

const btnClick = evt =>{
    console.log(`button clicked!`)
    axios.get(`https://swapi.dev/api/planets/?search=alderaan`)
        .then((resp)=>{
            let {residents} = resp.data.results[0]
            console.log(residents)
            residents.innerHTML = ``

            residents.forEach((resident)=>{
                axios.get(resident)
                    .then((resp)=>{
                        let {name} = resp.data
                        let header = document.createElement(`h2`)
                        header.textContent = name
                        section.appendChild(header)
                    })
                    .catch(err => console.log(err))
            })
        })
        .catch(err => console.log(err))
}






button.addEventListener(`click`, btnClick)