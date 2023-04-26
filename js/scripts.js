let pokemonList = [
    {name: 'meouth', height: 1.4, type: ['scratch cat']}, 
    {name: 'snorlax', height: 2.1, type: ['normal']}, 
    {name: 'rapidash', height: 5.7, type: ['fire horse']}];
//formats pokemon stats to write
console.log(pokemonList);
for (let i = 0; i < pokemonList.length; i++) {
    let pokemonStat = `<p>${pokemonList[i].name} (height: ${pokemonList[i].height}ft)`;
//displays after pokemon with height above 3ft
if (pokemonList[i].height > 3)
    pokemonStat += ` ${pokemonList[i].name}'s a big pokemon!`;
//displays all pokemon name and height
pokemonStat += '</p>';
document.write(pokemonStat);
}

