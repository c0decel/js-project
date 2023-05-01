let pokemonRepository = (function() {

    let pokemonList = [
        {
            name: 'meouth',
            height: 1.4,
            type: ['scratch cat']
        }, 
        {
            name: 'snorlax',
            height: 2.1,
            type: ['normal']
        }, 
        {
            name: 'rapidash',
            height: 5.7,
            type: ['fire horse']
        }
    ];

    function getAll() {
        return pokemonList;
    }
    
    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    return {
        getAll: getAll,
        add: add
    };

})();

pokemonRepository.getAll().forEach(function(pokemon) {
    if (pokemon.height > 3)
        document.write(pokemon.name + ' at '+ pokemon.height + 'm is a tall pokemon!' + '<br>')
    else
        document.write(pokemon.name + ' - '+ pokemon.height + 'm' + '<br>');
  });
  




