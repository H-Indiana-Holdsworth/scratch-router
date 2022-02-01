export async function getCharacters() {
  const response = await fetch('https://api.disneyapi.dev/characters');
  const { data } = await response.json();
  return { data };
}

export async function getCharacterById(characterId) {
  const response = await fetch(`https://api.disneyapi.dev/characters/${characterId}`);
  const data = await response.json();
  console.log('data with id', data);
  return data;
}
