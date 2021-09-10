import { getValues } from '../services/apiResources';

const GET_VALUES = 'airPollution/values/GET_VALUES';

const getValuesAction = () => async (dispatch) => {
  const values = await getValues();
  dispatch({
    type: GET_VALUES,
    payload: values,
  });
};

const valuesReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_VALUES:
      return { ...action.payload };
    default:
      return state;
  }
};

export { getValuesAction, valuesReducer, GET_VALUES };
