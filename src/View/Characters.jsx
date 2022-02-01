import React from 'react';
import { useState, useEffect } from 'react';
import CharacterList from '../Components/CharacterList';
import { getCharacters } from '../services/characters';

export default function Fruits() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await getCharacters();
      setCharacters(resp);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) return <h1>Loading...</h1>;

  return (
    <div>
      <h1>Characters view</h1>
      <CharacterList characters={characters} />
    </div>
  );
}
