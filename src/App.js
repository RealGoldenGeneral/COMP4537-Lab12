import Page from './Page';
import Pagination from  './Pagination';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  // this code will execute aftyer the component is mounted
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json')
      setPokemons(result.data);
    }
    fetchData();
  }, []);
  return (
    <h1>
      <Page
        pokemons={pokemons}
        currentPage={currentPage}
      />
      <Pagination 
        pokemons={pokemons}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </h1>
  );
}

export default App;
