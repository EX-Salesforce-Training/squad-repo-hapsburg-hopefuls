import { LightningElement, track } from 'lwc';

export default class App extends LightningElement {

    @track
    pokemonList = []
    currentPokemon = ''
    currentIndex = 0

    connectedCallback() {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
            .then(response => response.json())
            .then(data => {
                this.pokemonList = data.results
                for (const pokemon of this.pokemonList) {
                    pokemon.name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1, pokemon.name.length)
                    fetch(pokemon.url)
                        .then(response => response.json())
                        .then(data => {
                            pokemon.id = data.id
                            pokemon.img = data.sprites.front_default
                            pokemon.height = data.height
                            pokemon.weight = data.weight
                            pokemon.types = []
                            for (const typeObj of data.types) {
                                const typeName = typeObj.type.name
                                const type = {}
                                type.id = typeObj.slot
                                type.name = typeName[0].toUpperCase() + typeName.slice(1, typeName.length)
                                pokemon.types.push(type)
                            }
                            // Issue: Proxy {}
                            // Expected ['grass', 'poison']
                            // Received Proxy {}
                            console.log(this.pokemonList[0].types[0])
                        }) 
                }
                this.currentPokemon = this.pokemonList[0]

            })

    }

    nextPokemon(event) {
        if (this.currentPokemon.id === this.pokemonList.length) {
            this.currentPokemon = this.pokemonList[0]
        } else {
            this.currentPokemon = this.pokemonList[this.currentPokemon.id]
        }
    }

    prevPokemon(event) {
        if (this.currentPokemon.id === this.pokemonList[0].id) {
            this.currentPokemon = this.pokemonList[this.pokemonList.length - 1]
        } else {
            this.currentPokemon = this.pokemonList[this.currentPokemon.id - 2]
        }
    }
}
