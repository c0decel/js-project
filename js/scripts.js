
let pokemonRepository = (function() {

    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

    function add(pokemon) {
        if (
            typeof pokemon === 'object' &&
            'name' in pokemon
        ) {
            pokemonList.push(pokemon);
        } else {
            console.log('wrong pokemon');
        }
    }

    function getAll() {
        return pokemonList;
    }

    function addListItem(pokemon) {
        let pokemonList = $('.pokemon-list');
        let listPokemon = $('<div class="grid__item"><p></p></div>');
        let button = $('<button class="btn btn-primary"></button>');
        button.text(pokemon.name);
        button.click(function() {
          showDetails(pokemon);
        });
        listPokemon.append(button);
        pokemonList.append(listPokemon);
      }
        

    function loadList() {
        return fetch(apiUrl).then(function (response) {
            return response.json(); // This returns a promise!
        }).then(function (json) {
            json.results.forEach(function (item) {
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url,
                    imageUrl: null,
                    height: null,
                    types: []
                };
                add(pokemon);
                loadDetails(pokemon);
            });
        }).catch(function (e) {
            console.error(e);
        })
    }

    function loadDetails(item) {
        let url = item.detailsUrl; //uses api details url
        return fetch(url).then(function (response) {
            return response.json();
        }).then(function (details) {
            item.imageUrlFront = details.sprites.front_default;
            item.imageUrlBack = details.sprites.back_default;
            item.height = details.height;
            item.types = details.types.map(type => type.type.name);
        }).catch(function (e) {
            console.error(e);
        });
    }

    function showModal(pokemon) {
        let modalBody = $('.modal-body');
        let modalTitle = $('.modal-title');
        modalTitle.empty();
        modalBody.empty();
    
        let nameElement = $('<h1>').text(pokemon.name);
        let imageElementFront = $('<img class="modal-img" style="width:50%">').attr("src", pokemon.imageUrlFront);
        let imageElementBack = $('<img class="modal-img" style="width:50%">').attr("src", pokemon.imageUrlBack);
        let heightElement = $('<p>').text('Height: ' + pokemon.height);
        let typesElement = $('<p>').text('Types: ' + pokemon.types.join(', '));
    
        modalTitle.append(nameElement);
        modalBody.append(imageElementFront);
        modalBody.append(imageElementBack);
        modalBody.append(heightElement);
        modalBody.append(typesElement);
    
        $('#modal-container').modal('show');
    }

    function showDetails(pokemon) {
        showModal(pokemon)
    }

    return {
        getAll: getAll,
        add: add,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails
    };
})();

console.log(pokemonRepository.getAll());

pokemonRepository.loadList().then(function() {
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});