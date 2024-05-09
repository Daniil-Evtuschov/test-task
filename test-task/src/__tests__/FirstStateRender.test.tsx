import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import MainComponent from '../components/mainComponent/MainCompanent';

test('находит кнопку на странице', () => {
  render(<MainComponent icons={[]} />);
  const button = screen.getByRole('button');
  expect(button).toBeInTheDocument();
});
