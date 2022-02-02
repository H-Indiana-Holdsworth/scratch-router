import { screen, render } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import Characters from './Characters';
import { character } from '../../mocks/TestData';
import { MemoryRouter } from 'react-router-dom';

const server = setupServer(
  rest.get('https://api.disneyapi.dev/characters', (req, res, ctx) => {
    return res(ctx.json(character));
  })
);

beforeAll(() => server.listen());
afterAll(() => server.close());

test.only('should render header and character names with images', async () => {
  render(
    <MemoryRouter>
      <Characters />
    </MemoryRouter>
  );

  const heading = await screen.findByRole('heading', { name: /disney characters/i });
  const img = screen.getByRole('img', { name: /627/i });
  const name = screen.getByText(/'olu mel/i);

  expect(heading).toBeInTheDocument();
  expect(img).toBeInTheDocument();
  expect(name).toBeInTheDocument();
});
