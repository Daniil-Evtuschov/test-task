import { render, screen } from '@testing-library/react';
import MainComponent from '../components/mainComponent/MainCompanent';

test('find the button on page', () => {
  render(<MainComponent icons={[]} />);
  const button = screen.getByRole('button');
  expect(button).toBeInTheDocument();
});
