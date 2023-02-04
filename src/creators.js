import {
  openAction,
  closeAction,
  openMultipleAction,
  closeMultipleAction,
} from './actions';

export const openField = (key, value) => (dispatch) => {
  dispatch(openAction(key, value));
};

export const closeField = (key) => (dispatch) => {
  dispatch(closeAction(key));
};

export const openFields = (values) => (dispatch) => {
  dispatch(openMultipleAction(values));
};

export const closeFields = (keys) => (dispatch) => {
  dispatch(closeMultipleAction(keys));
};
