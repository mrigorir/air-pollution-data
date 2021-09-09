import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import DataDetails from '../../../components/details/DataDetails';
import store from '../../../redux/configureStore';

const setRender = () => {
  const component = render(<Provider store={store}><Router><DataDetails /></Router></Provider>);
  return component;
};

describe('Test Details Component', () => {
  // Arrange
  // Act
  const component = setRender();

  // Assert
  test('Should render the Home view', () => {
    const { getByTestId } = component;
    expect(getByTestId('detailsContainer')).toBeInTheDocument();
  });
});
