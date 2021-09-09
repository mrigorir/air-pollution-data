import { valuesReducer, GET_VALUES } from '../../redux/values';

describe('Test valuesReducer', () => {
  // Arrange
  // Act
  let state;
  let action;
  beforeEach(() => {
    state = undefined;
    action = {
      type: GET_VALUES,
      payload: {
        co: 50.1,
        no: 20.78,
        no2: 0.98,
      },
    };
  });
  // Assert
  test('Should return default state', () => {
    const newState = valuesReducer(state, {});
    expect(newState).toEqual({});
  });

  test('Should return a state if receiving a type', () => {
    const newState = valuesReducer(state = {}, action);
    expect(newState).toEqual({ ...action.payload });
  });
});
