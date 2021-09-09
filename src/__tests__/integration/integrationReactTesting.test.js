import React from 'react';
// import { Link, HashRouter as Router } from 'react-router-dom';
import {
  render, screen, waitFor, fireEvent,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import App from '../../App';
import '@testing-library/jest-dom/extend-expect';
import { getValues } from '../../services/apiResources';

import store from '../../redux/configureStore';

jest.mock('../../services/apiResources.js');

describe('Proper functionality of the website', () => {
  // Arrange
  // Act
  const components = {
    co: 500.68,
    no: 2.47,
    no2: 1.26,
    o3: 7.63,
    so2: 47.21,
    pm2_5: 0,
    pm10: 0,
    nh3: 2.38,
    dt: 1631203200,
    aqi: 2,
  };

  // Assert
  test('Should render a set of air pollution values of a specific country', async () => {
    // const getCountry = jest.fn();
    getValues.mockResolvedValueOnce(components);
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    fireEvent.click(screen.getByTestId('0'));
    await waitFor(() => {
      expect(screen.getByText('Air data details')).toBeInTheDocument();
    });

    expect(screen.getByText(components.co)).toBeInTheDocument();
  });
});
