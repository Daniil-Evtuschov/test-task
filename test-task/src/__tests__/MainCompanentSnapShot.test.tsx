import { render, screen } from '@testing-library/react';
import { icons } from '../App';
import MainComponent from '../components/mainComponent/MainCompanent';

test('MainComponent snapshot', () => {
  render(<MainComponent icons={icons} />);
  const mainComponent = screen.getByTestId('main-component');
  expect(mainComponent).toMatchSnapshot();
});
