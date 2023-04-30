let pokemonList = [
    {name: 'meouth', height: 1.4, type: ['scratch cat']}, 
    {name: 'snorlax', height: 2.1, type: ['normal']}, 
    {name: 'rapidash', height: 5.7, type: ['fire horse']}];
//formats pokemon stats to write
console.log(pokemonList);
pokemonList.forEach(function(pokemon) {
    console.log(pokemon);
    document.write(`<p>${pokemon.name} (height: ${pokemon.height}ft)`)
    if (pokemon.height > 3)
        document.write(pokemon.name + ' is a tall pokemon!')
});
//writes out pokemon stats
