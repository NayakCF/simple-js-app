let pokemonRepository = (function () {
    let repository = [
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
  
    function add(pokemon) {
      if (
        typeof pokemon === "object" &&
        "name" in pokemon &&
        "height" in pokemon &&
        "types" in pokemon
      ) {
        repository.push(pokemon);
      } else {
        console.log("pokemon is not correct");
      }
    }
    function getAll() {
      return repository;
    }
    function addListItem(pokemon){
      //Traversing using DOM in JS and access the pokemonlist in index.html  // 
      let pokemonList = document.querySelector(".pokemon-list");
      let listpokemon = document.createElement("li");
      let button = document.createElement("button");
      button.innerText = pokemon.name;
      button.classList.add("button-class");
      listpokemon.appendChild(button);
      pokemonList.appendChild(listpokemon);
    }
    return {
      add: add,
      getAll: getAll,
      addListItem: addListItem
    };
  })();
  // Add the object to existing array and ussing getall() to check the same in console//
  pokemonRepository.add({ name: "Eevee", height: 1, types: ["Run Away","Adaptability"] });
  
  console.log(pokemonRepository.getAll());

  
  pokemonRepository.getAll().forEach(function(pokemon){
  pokemonRepository.addListItem(pokemon);

  });