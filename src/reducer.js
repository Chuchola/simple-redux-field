import { omitMultiple, getType } from './helpers';
import {
  SIMPLE_REDUX_FIELDS__OPEN,
  SIMPLE_REDUX_FIELDS__CLOSE,
  SIMPLE_REDUX_FIELDS__SET,
  REDUX_FIELD_NAME,
} from './constants';

const initialState = {};

const reducer = (state = initialState, action) => {
  const payload = action.payload;
  const space = payload && payload.space ? payload.space : '';
  switch (action.type) {
    case getType(SIMPLE_REDUX_FIELDS__OPEN, space):
      return fieldsSet(state, payload);

    case getType(SIMPLE_REDUX_FIELDS__CLOSE, space):
      return fieldsClose(state, payload);

    case getType(SIMPLE_REDUX_FIELDS__SET, space):
      return fieldsSet(state, payload);

    default:
      return state;
  }
};

export const simpleReduxFieldReducer = {
  [REDUX_FIELD_NAME]: reducer,
};

const fieldsSet = (state, payload) => {
  const fieldsObj = payload.fieldsObj;
  return Object.keys(fieldsObj).reduce((acc, curr) => {
    const value = fieldsObj[curr];
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
  return omitMultiple(state, payload.keys);
};
