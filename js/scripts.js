let pokemonList = [
    { name: 'Bulbasaur', height: 1.5, type: ['grass', 'poison'] },
    { name: 'Charizard', height: 1, type: ['fire', 'flying'] },
    { name: 'Pikachu', height: 0.5, type: ['electric'] }
    ];
    // forEach () being used to fetch the information from the pokemonList array

    pokemonList.forEach(function(pokemonList){
      console.log(pokemonList.name +' is a person with height of ' + pokemonList.height + ' ' + pokemonList.type + ' are the charectoristics type.')
    });
    // created the repository and added Eevee to the array list using add property
    let pokemonRepository = (function () {
      let pokemonList = [
        { name: 'Bulbasaur', height: 1.5, type: ['grass', 'poison'] },
        { name: 'Charizard', height: 1, type: ['fire', 'flying'] },
        { name: 'Pikachu', height: 0.5, type: ['electric'] }]; 
      return {
        add: function(pokemon) {
          pokemonList.push(pokemon);
        },
        getAll: function() {
          return pokemonList;
        }
      };
    })();
    pokemonRepository.add({ name: 'Eevee', height:30.5, type:['Normal'] });
    console.log(pokemonRepository.getAll());  
  