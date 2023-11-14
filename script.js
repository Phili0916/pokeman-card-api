const url =" https://pokeapi.co/api/v2/pokemon/"
const card = document.getElementById("card")
const generateBtn = document.getElementById("generate-btn")
const hitPoints = document.querySelector(".hit-points")

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
    console.log("data", data)
    const hp = data.stats[0].base_stat;
    console.log("hp",hp)
    const imgSrc = data.sprites.other.dream_world.front_default


    const pokemonName = data.species.name;
    console.log("pokemonName: ", pokemonName)
    const type1 = data.types[0].type.name;
    // console.log(type1, 'type1')
    const type2 = data.types[1].type.name;
    // console.log(type2, 'type2')
    const statAttack = data.stats[1].base_stat;
    console.log('statAttack:',statAttack)
    const statDefence = data.stats[2].base_stat;
    console.log('statDefence', statDefence)
    const statSpeed = data.stats[5].base_stat;
    console.log('statSpeed', statSpeed)

    card.innerHTML = `
        <p class="hit-points">
            <span>hp</span>
            ${hp}
        </p>
        <img src=${imgSrc} alt="pokemon demo-image" id="pokemonImage"/>
        <h2 class="pokemon-name">Some name</h2>
        <div class="pokemon-type">
            <span>${type1}</span>
            <span>${type2}</span>
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
    `


}

generateBtn.addEventListener("click", getPokemonData)

window.addEventListener("load", getPokemonData)