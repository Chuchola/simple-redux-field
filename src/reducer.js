import { omit, omitMultiple } from './helpers';
import {
  SIMPLE_REDUX_FIELD__OPEN,
  SIMPLE_REDUX_FIELD__CLOSE,
  SIMPLE_REDUX_FIELD__OPEN_MULTIPLE,
  SIMPLE_REDUX_FIELD__CLOSE_MULTIPLE, REDUX_FIELD_NAME,
} from './constants';

const initialState = {};

const reducer = (state = initialState, action) => {
  const payload = action.payload;
  switch (action.type) {
    case SIMPLE_REDUX_FIELD__OPEN:
      return openCase(state, payload);

    case SIMPLE_REDUX_FIELD__CLOSE:
      return closeCase(state, payload);

    case SIMPLE_REDUX_FIELD__OPEN_MULTIPLE:
      return openMultipleCase(state, payload);

    case SIMPLE_REDUX_FIELD__CLOSE_MULTIPLE:
      return closeMultipleCase(state, payload);

    default:
      return state;
  }
};

export const simpleReduxFieldReducer = {
  [REDUX_FIELD_NAME]: reducer,
};

const openCase = (state, payload) => {
  return {
    ...state,
    [payload.key]: payload.value,
  };
};

const closeCase = (state, payload) => {
  return omit(state, payload.key);
};

const openMultipleCase = (state, payload) => {
  const fields = payload.reduce((acc, curr) => {
    return {
      ...acc,
      [curr.key]: curr.value,
    };
  }, {});
  return {
    ...state,
    ...fields,
  };
};

const closeMultipleCase = (state, payload) => {
  return omitMultiple(state, payload);
};
