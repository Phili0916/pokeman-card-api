const url =" https://pokeapi.co/api/v2/pokemon/"
const card = document.getElementById("card")
const generateBtn = document.getElementById("generate-btn")

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
    const pokemonName = data.species.name
    console.log("pokemonName: ", pokemonName)
    const type1 = data.types[0].type.name
    // console.log(type1, 'type1')
    const type2 = data.types[1].type.name
    // console.log(type2, 'type2')
    const statAttack = data.stats[1].base_stat;


    if (!type2)  {
        return type1
    }


}

generateBtn.addEventListener("click", getPokemonData)

window.addEventListener("load", getPokemonData)