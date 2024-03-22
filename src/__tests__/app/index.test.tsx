import '@root/__mocks__/matchMedia.mock';
import { render } from '@testing-library/react';

import MainPage from '@app/page';

const unmockedFetch = global.fetch;

beforeAll(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ test: 100 }),
    })
  ) as jest.Mock;
});

afterAll(() => {
  global.fetch = unmockedFetch;
});

it('Renders main page with loader', () => {
  const { container } = render(<MainPage />);
  expect(container).toMatchSnapshot();
});
