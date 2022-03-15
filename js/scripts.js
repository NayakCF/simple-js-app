let pokemon = [
    { name: 'Bulbasaur', height: 1.5, types: ['grass', 'poison'] },
    { name: 'Charizard', height: 1, type: ['fire', 'flying'] },
    { name: 'Pikachu', height: 0.5, type: ['electric'] }
    ];
    for (let i=0; i < pokemon.length; i++){
    if (pokemon[i].height >1.4) {
    console.log(pokemon[i].name+"Wow, that is big pokeman!");
      { document.write("Bulbasaur "+"Height 1.5" )
          }
    }else if (pokemon[i].height <1){
    console.log(pokemon[i].name+"this is average pokemon");
      { document.write("Charizard "+"Height 1" )
          }
    } else { console.log(pokemon[i].name+"this is a small pokemon"); 
            { document.write("Pikachu "+"Height 0.5" )
          }
    }
    }