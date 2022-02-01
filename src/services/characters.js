export async function getCharacters() {
  const response = await fetch('https://api.disneyapi.dev/characters');
  const data = await response.json();
  console.log(data);
  return data;
}
