const url =" https://pokeapi.co/api/v2/pokemon/"
const card = document.getElementById("card")
const generateBtn = document.getElementById("generate-btn")
const hitPoints = document.querySelector(".hit-points")

const colorType = {
    normal: '#A8A77A',
	fire: '#EE8130',
	water: '#6390F0',
	electric: '#F7D02C',
	grass: '#7AC74C',
	ice: '#96D9D6',
	fighting: '#C22E28',
	poison: '#A33EA1',
	ground: '#E2BF65',
	flying: '#A98FF3',
	psychic: '#F95587',
	bug: '#A6B91A',
	rock: '#B6A136',
	ghost: '#735797',
	dragon: '#6F35FC',
	dark: '#705746',
	steel: '#B7B7CE',
	fairy: '#D685AD',
}

const getPokemonData = async () => {
    const pokemonId = Math.floor(Math.random() * 150) +1
    // console.log(pokemonId)
    const uniqueUrl = url + pokemonId
    const response = await fetch(uniqueUrl)
    const returnedData = await response.json()
    const cardResults = returnedData
    
    generatePokeCard(cardResults)

}

const generatePokeCard = (data) => {

    const hp = data.stats[0].base_stat;
    const imgSrc = data.sprites.other.dream_world.front_default
    const pokemonName = data.species.name;
    const statAttack = data.stats[1].base_stat;
    const statDefence = data.stats[2].base_stat;
    const statSpeed = data.stats[5].base_stat;

    const pokemonThemeColor = colorType[data.types[0].type.name]

    card.innerHTML = `
        <p class="hit-points">
            <span>hp</span>
            ${hp}
        </p>
        <img src=${imgSrc} alt="pokemon demo-image" id="pokemonImage"/>
        <h2 class="pokemon-name">${pokemonName}</h2>
        <div class="pokemon-type">
            
        </div>
        <div class="stats">
            <div>
                <h3>${statAttack}</h3>
                <p>Attack</p>
            </div>
            <div>
                <h3>${statDefence}</h3>
                <p>Defense</p>
            </div>
            <div>
                <h3>${statSpeed}</h3>
                <p>Speed</p>
            </div>
        </div>
    `;

appendTypes(data.types)
styleCard(pokemonThemeColor)

}

const appendTypes = (types) => {
    types.forEach(itemType => {
        let typeSpan = document.createElement("SPAN")
        typeSpan.textContent = itemType.type.name
        document.querySelector(".pokemon-type").appendChild(typeSpan)
    })
}

const styleCard = (colors) => {
    card.style.background = `radial-gradient(circle at 50% 0%, ${colors} 36%, #ffffff 36%) `
    card.querySelectorAll(".pokemon-type span").forEach(typeColor => {
        typeColor.style.background = colors
    }) 
}

generateBtn.addEventListener("click", getPokemonData)

window.addEventListener("load", getPokemonData)