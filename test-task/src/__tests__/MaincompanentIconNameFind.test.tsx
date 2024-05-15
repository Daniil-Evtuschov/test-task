import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MainComponent from '../components/mainComponent/MainCompanent';
import { icons } from '../App';

describe('MainComponent', () => {
  const testIcons = icons

  test('displays an icon from the provided icons array', () => {
    render(<MainComponent icons={testIcons} />);
    const iconNameElement = screen.getByTestId('icon-name');
    expect(testIcons).toContain(iconNameElement.textContent);
  });
});
