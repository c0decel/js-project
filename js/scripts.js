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

    function addListItem(pokemon) {
        let pokemonList = document.querySelector('.pokemon-list');
        let listPokemon = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.addEventListener('click', function(event) {
            showDetails(pokemon);
        });
        listPokemon.appendChild(button);
        pokemonList.appendChild(listPokemon);
    }

    function showDetails(pokemon) {
        console.log(pokemon.name + ' is ' + pokemon.height + 'm tall, type is ' + pokemon.type);
    }

    return {
        getAll: getAll,
        add: add,
        addListItem: addListItem,
        showDetails : showDetails
    };
})();

pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
