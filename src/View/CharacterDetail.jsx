import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCharacterById } from '../services/characters';

export default function CharacterDetail() {
  const [charDetails, setCharDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const { characterId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const resp = await getCharacterById(characterId);
      setCharDetails(resp);
      setLoading(false);
    };
    fetchData();
  }, [characterId]);

  if (loading) return <h1>Loading...</h1>;

  const { name, imageUrl } = charDetails;

  return (
    <div>
      <p>
        <img src={imageUrl} />
      </p>
      <p>{name}</p>
    </div>
  );
}
