import { screen, render } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import CharacterDetail from './CharacterDetail';
import { mockSingleCharacter } from '../../mocks/TestData';
import { MemoryRouter } from 'react-router-dom';

const server = setupServer(
  rest.get('https://api.disneyapi.dev/characters/:characterId', (req, res, ctx) => {
    return res(ctx.json(mockSingleCharacter));
  })
);

beforeAll(() => server.listen());
afterAll(() => server.close());

test('should render a character image, name, and link', async () => {
  render(
    <MemoryRouter>
      <CharacterDetail />
    </MemoryRouter>
  );

  const img = await screen.findByRole('img', { name: /'olu mel/i });
  const name = screen.getByText(/'olu mel/i);
  const link = screen.getByText(/https:\/\/api\.disneyapi\.dev\/characters\/6/i);
  const button = screen.getByRole('button', { name: /back/i });

  expect(img).toBeInTheDocument();
  expect(name).toBeInTheDocument();
  expect(link).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});
