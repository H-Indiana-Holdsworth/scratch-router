import React from 'react';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getCharacterById } from '../../services/characters';

export default function CharacterDetail() {
  const [charDetails, setCharDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const { characterId } = useParams();
  const history = useHistory('/');

  useEffect(() => {
    const fetchData = async () => {
      const resp = await getCharacterById(characterId);
      setCharDetails(resp);
      setLoading(false);
    };
    fetchData();
  }, [characterId]);

  if (loading) return <h1>Loading...</h1>;

  function handleClick() {
    history.push('/');
  }

  const { name, imageUrl, url } = charDetails;

  return (
    <div>
      <p>
        <img src={imageUrl} />
      </p>
      <p>{name}</p>
      <div>
        If, for some reason, you would like to look at the json for this character, paste this link
        into your browser:
        <br></br>
        <p to={`${url}`}>{url}</p>
      </div>
      <button onClick={handleClick}>Back</button>
    </div>
  );
}
