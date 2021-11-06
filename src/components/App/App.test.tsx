import { render, screen } from '@testing-library/react';
import App from '.';

test('renders learn react link', () => {
  render(<App />);
  const textElement = screen.getByText(/hello world/i);
  expect(textElement).toBeInTheDocument();
});
