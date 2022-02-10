import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { mockSingleCharacter } from './mocks/TestData';
import App from './App';
import userEvent from '@testing-library/user-event';

const server = setupServer(
  rest.get('https://api.disneyapi.dev/characters/:characterId', (req, res, ctx) => {
    return res(ctx.json(mockSingleCharacter));
  })
);

beforeAll(() => server.listen);
afterAll(() => server.close);

test.only('ensures character detail renders when a character is clicked', async () => {
  render(<App />);

  const img = await screen.findByRole('img', { name: /'olu mel/i });
  userEvent.click(img);

  const backButton = await screen.findByRole('img', { name: /'olu mel/i });

  expect(backButton).toBeInTheDocument();
});
