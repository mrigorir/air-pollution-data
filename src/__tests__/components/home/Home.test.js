import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from '../../../components/home/Home';

const setRender = () => {
  const component = render(<Router><Home /></Router>);
  return component;
};

describe('Test Home Component', () => {
  // Arrange
  // Act
  const component = setRender();

  // Assert
  test('Should render the Home view', () => {
    const { getByTestId } = component;
    expect(getByTestId('homeContainer')).toBeInTheDocument();
  });
});
