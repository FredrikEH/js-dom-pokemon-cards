
console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);

const cardListUl = document.querySelector(".cards")

function renderCards(data){
    data[0]
    data.forEach (pokemon => {
        const pokemonLi = document.createElement('li')
        pokemonLi.classList.add('card')

        const statListUl = document.createElement('ul')
        statListUl.classList.add('card--text')

        const extraListUl = document.createElement('ul')
        extraListUl.classList.add('card--text')

        const nameLi = document.createElement('h2')
        nameLi.classList.add('card--title')
        nameLi.textContent = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
        pokemonLi.appendChild(nameLi)

        let image = document.createElement('img')
        image.width = 256
        image.classList.add('card--img')
        image.src = pokemon.sprites.other['official-artwork'].front_default
        pokemonLi.appendChild(image)

        const hpLi = document.createElement('li')
        hpLi.textContent = 'HP: ' + pokemon.stats[0].base_stat
        statListUl.appendChild(hpLi)

        const atkLi = document.createElement('li')
        atkLi.textContent = 'ATTACK: ' + pokemon.stats[1].base_stat
        statListUl.appendChild(atkLi)

        const defLi = document.createElement('li')
        defLi.textContent = 'DEFENSE: ' + pokemon.stats[2].base_stat
        statListUl.appendChild(defLi)

        const satkLi = document.createElement('li')
        satkLi.textContent = 'SPECIAL-ATTACK: ' + pokemon.stats[3].base_stat
        statListUl.appendChild(satkLi)

        const sdefLi = document.createElement('li')
        sdefLi.textContent = 'SPECIAL-DEFENSE: ' + pokemon.stats[4].base_stat
        statListUl.appendChild(sdefLi)

        const speedLi = document.createElement('li')
        speedLi.textContent = 'SPEED: ' + pokemon.stats[5].base_stat
        statListUl.appendChild(speedLi)

        for(let i = 0; i < pokemon.game_indices.length; i++){
            const gameLi = document.createElement('li')
            gameLi.textContent = pokemon.game_indices[i].version.name
            extraListUl.appendChild(gameLi)
        }

        const gamesLi = document.createElement('li')
        gamesLi.textContent = 'Games'

        pokemonLi.appendChild(statListUl)
        pokemonLi.appendChild(gamesLi)
        pokemonLi.appendChild(extraListUl)
        cardListUl.appendChild(pokemonLi)
    })
}

renderCards(data)