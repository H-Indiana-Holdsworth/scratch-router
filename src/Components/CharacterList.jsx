import React from 'react';

export default function CharacterList({ characters }) {
  return (
    <div>
      <h1>CharacterList</h1>
      {characters.data.map(({ imageUrl, name, _id }) => (
        <div key={_id}>
          <p>{name}</p>
          <p>
            <img src={imageUrl}></img>
          </p>
        </div>
      ))}
    </div>
  );
}
