import { omitMultiple } from './helpers';
import {
  SIMPLE_REDUX_FIELDS__OPEN,
  SIMPLE_REDUX_FIELDS__CLOSE,
  SIMPLE_REDUX_FIELDS__SET,
  REDUX_FIELD_NAME,
} from './constants';

const initialState = {};

const reducer = (state = initialState, action) => {
  const payload = action.payload;
  switch (action.type) {
    case SIMPLE_REDUX_FIELDS__OPEN:
      return fieldsSet(state, payload);

    case SIMPLE_REDUX_FIELDS__CLOSE:
      return fieldsClose(state, payload);

    case SIMPLE_REDUX_FIELDS__SET:
      return fieldsSet(state, payload);

    default:
      return state;
  }
};

export const simpleReduxFieldReducer = {
  [REDUX_FIELD_NAME]: reducer,
};

const fieldsSet = (state, payload) => {
  return Object.keys(payload).reduce((acc, curr) => {
    const value = payload[curr];
    if (typeof value === 'object' && value !== null) {
      return {
        ...acc,
        [curr]: {
          ...state[curr],
          ...value,
        },
      };
    } else {
      return {
        ...acc,
        [curr]: value,
      };
    }
  }, state);
};

const fieldsClose = (state, payload) => {
  return omitMultiple(state, payload);
};
