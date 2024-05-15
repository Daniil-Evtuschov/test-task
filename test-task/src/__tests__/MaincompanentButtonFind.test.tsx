import { render, screen } from '@testing-library/react';
import MainComponent from '../components/mainComponent/MainCompanent';
import { icons } from '../App';

test('find the button on page', () => {
  render(<MainComponent icons={icons} />);
  const button = screen.getByRole('button');
  expect(button).toBeInTheDocument();
});
