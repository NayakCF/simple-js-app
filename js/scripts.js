//IIFE
let pokemonRepository = (function () {
    let pokemonList = [
        {
            name: "Bulbasaur",
            height: 0.7,
            types: ["grass", "poison"],
        },
        {
            name: "Charizard",
            height: 1.7,
            types: ["fire", "flying"],
        },
        {
            name: "Squirtle",
            height: 1,
            types: ["water"],
        },
    ];

    function add (pokemon){
        pokemonList.push(pokemon)
    }   
    function getAll() {
        return pokemonList;
    }
    //show the pokemon name when clicked on the name//
    function showDetails(pokemon) {
        console.log(pokemon.name)
    }

    function addlistener (button,pokemon) {
        button.addEventListener("click", function () {
            showDetails(pokemon)
        })
    }
    //Adds the pokemon creating the UL as buttons//
     //Traversing using DOM in JS and access the pokemonlist in index.html  //
    function addListItem(pokemon) {
        let pokemonList = document.querySelector(".pokemon-list");
        let listpokemon = document.createElement("li");
        let button = document.createElement("button");
        button.innerText = pokemon.name;
        button.classList.add("button-class");
        listpokemon.appendChild(button);
        pokemonList.appendChild(listpokemon);
        addlistener(button,pokemon);
    }
    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem
    }
})();
// Add the object to existing array and ussing getall() to check the same in console//
pokemonRepository.add({ name: "Eevee", height: 1, types: ["Run Away", "Adaptability"] });
console.log(pokemonRepository.getAll());

// Updated forEach loop
pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon)
});