let pokemonList = [
    { name: 'Bulbasaur', height: 1.5, types: ['grass', 'poison'] },
    { name: 'Charizard', height: 1, type: ['fire', 'flying'] },
    { name: 'Pikachu', height: 0.5, type: ['electric'] }
    ];
    // forEach () being used to fetch the information from the pokemonList array

    pokemonList.forEach(function(pokemonList){
      console.log(pokemonList.name +' is a person with height of ' + pokemonList.height + ' ' + pokemonList.type + ' are the charectoristics.')
    });

