import {
  SIMPLE_REDUX_FIELD__OPEN,
  SIMPLE_REDUX_FIELD__CLOSE,
  SIMPLE_REDUX_FIELD__OPEN_MULTIPLE,
  SIMPLE_REDUX_FIELD__CLOSE_MULTIPLE,
} from './constants';

export const openAction = (key, value) => ({
  type: SIMPLE_REDUX_FIELD__OPEN,
  payload: { key, value },
});

export const closeAction = (key) => ({
  type: SIMPLE_REDUX_FIELD__CLOSE,
  payload: { key },
});

export const openMultipleAction = (values) => ({
  type: SIMPLE_REDUX_FIELD__OPEN_MULTIPLE,
  payload: values,
});

export const closeMultipleAction = (keys) => ({
  type: SIMPLE_REDUX_FIELD__CLOSE_MULTIPLE,
  payload: keys,
});
