import { getType } from './helpers';
import {
  SIMPLE_REDUX_FIELDS__OPEN,
  SIMPLE_REDUX_FIELDS__CLOSE,
  SIMPLE_REDUX_FIELDS__SET,
} from './constants';

/**
 * Open fields.
 *
 * @param {object} fieldsObj
 * @param {string} space
 * @returns {{payload, type: string}}
 */
export const fieldsOpen = (fieldsObj, space) => ({
  type: getType(SIMPLE_REDUX_FIELDS__OPEN, space),
  payload: { space, fieldsObj },
});

/**
 * Close fields.
 *
 * @param {Array.<string>} keys
 * @param {string} space
 * @returns {{payload, type: string}}
 */
export const fieldsClose = (keys, space) => ({
  type: getType(SIMPLE_REDUX_FIELDS__CLOSE, space),
  payload: { space, keys },
});

/**
 * Set fields.
 *
 * @param {Object} fieldsObj
 * @param {string} space
 * @returns {{payload, type: string}}
 */
export const fieldsSet = (fieldsObj, space) => ({
  type: getType(SIMPLE_REDUX_FIELDS__SET, space),
  payload: { space, fieldsObj },
});
