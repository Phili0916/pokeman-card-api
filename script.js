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
    const hpElement = document.createElement("p")
    let totalHP = data.stats[0].base_stat;
    hpElement.textContent = `HP ${totalHP}`;
    hitPoints.append(hpElement)
    hitPoints.classList.add("hit-points");

    const imgSrcElement = document.createElement("img")
    imgSrcElement.src = data.sprites.other.dream_world.front_default
    document.appendChild(imgSrcElement)
    imgSrcElement.setAttribute("id", "pokemonImage")

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


    if (!type2)  {
        return type1
    }


}

generateBtn.addEventListener("click", getPokemonData)

window.addEventListener("load", getPokemonData)