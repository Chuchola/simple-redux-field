import {
  SIMPLE_REDUX_FIELDS__OPEN,
  SIMPLE_REDUX_FIELDS__CLOSE,
  SIMPLE_REDUX_FIELDS__SET,
} from './constants';

/**
 * Open fields.
 *
 * @param {object} fieldsObj
 * @returns {{payload, type: string}}
 */
export const fieldsOpen = fieldsObj => ({
  type: SIMPLE_REDUX_FIELDS__OPEN,
  payload: fieldsObj,
});

/**
 * Close fields.
 *
 * @param {Array.<string>} keys
 * @returns {{payload, type: string}}
 */
export const fieldsClose = keys => ({
  type: SIMPLE_REDUX_FIELDS__CLOSE,
  payload: keys,
});

/**
 * Set fields.
 *
 * @param {Object} fieldsObj
 * @returns {{payload, type: string}}
 */
export const fieldsSet = fieldsObj => ({
  type: SIMPLE_REDUX_FIELDS__SET,
  payload: fieldsObj,
});
