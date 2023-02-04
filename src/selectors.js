import { REDUX_FIELD_NAME } from './constants';

export const $fields = state => {
  return state[REDUX_FIELD_NAME];
};
