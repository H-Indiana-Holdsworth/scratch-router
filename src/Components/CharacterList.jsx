import React from 'react';
import { Link } from 'react-router-dom';

export default function CharacterList({ characters }) {
  return (
    <div>
      <h1>CharacterList</h1>
      {characters.data.map(({ imageUrl, name, _id }) => (
        <div key={_id}>
          <p>{name}</p>
          <Link to={`/characters/${_id}`}>
            <p>
              <img src={imageUrl}></img>
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
}
