import React from 'react';
import { Link } from 'react-router-dom';
import './CharacterList.css';

export default function CharacterList({ characters }) {
  return (
    <div>
      <h1>Disney Characters</h1>
      <div className="character-list">
        {characters.data.map(({ imageUrl, name, _id }) => (
          <div key={_id}>
            <div className="character-card">
              <p>{name}</p>
              <Link to={`/characters/${_id}`}>
                <p>
                  <img src={imageUrl} width={200} height={200} alt={`${name}`} />
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
