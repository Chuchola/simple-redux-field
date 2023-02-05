import { getFieldsObj } from './helpers';

import * as Actions from './actions';

/**
 * Open fields in redux state.
 *
 * @param {Array.<{key: string, value}> | Array.<string>} fields
 */
export const fieldsOpen = fields => (dispatch) => {
  dispatch(Actions.fieldsOpen(getFieldsObj(fields)));
};

/**
 * Remove fields from redux state.
 *
 * @param {Array.<string>} keys
 * @returns {(function(*): void)|*}
 */
export const fieldsClose = keys => (dispatch) => {
  dispatch(Actions.fieldsClose(keys));
};

/**
 * Set fields values.
 *
 * @param {Array.<{key: string, value}>} fields
 * @returns {(function(*): void)|*}
 */
export const fieldsSet = fields => (dispatch) => {
  dispatch(Actions.fieldsSet(getFieldsObj(fields)));
};

/**
 * Set one field value.
 *
 * @param {string} key
 * @param {any} value
 * @returns {(function(*): void)|*}
 */
export const fieldSet = (key, value) => (dispatch) => {
  dispatch(fieldsSet([{ key, value }]));
};
