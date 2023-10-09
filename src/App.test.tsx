import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('check for jugador', () => {
  render(<App />);
  const linkElement = screen.getByText(/Siguiente jugador/i);
  expect(linkElement).toBeInTheDocument();
});
