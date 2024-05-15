import React from 'react';
import renderer from 'react-test-renderer';
import MainComponent from '../components/mainComponent/MainCompanent';

test('MainComponent renders correctly', () => {
  const component = renderer.create(<MainComponent icons={['icon1', 'icon2', 'icon3']} />).toJSON();
  expect(component).toMatchSnapshot();
});
