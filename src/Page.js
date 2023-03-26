import React from 'react'
import "./style.css"

function Page({pokemons, currentPage}) {
    const pageSize = 10;
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const currentPokemons = pokemons.slice(startIndex, endIndex);

  return (
    <div className='pokemonList'>
        {
            currentPokemons.map(pokemon => (
                <div key={pokemon.id}>
                    { (pokemon.id < 10) ? (
                        <img src={`https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/00${pokemon.id}.png`} alt={pokemon.name.english} />
                    ) : (pokemon.id < 100) ? (
                        <img src={`https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/0${pokemon.id}.png`} alt={pokemon.name.english} />
                    ) : (
                        <img src={`https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/${pokemon.id}.png`} alt={pokemon.name.english} />
                    )
                    }
                </div>
            ))
        }
    </div>
  )
}

export default Page