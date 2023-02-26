import { getFieldsObj } from './helpers';

import * as Actions from './actions';

/**
 * Open fields in redux state.
 *
 * @param {Array.<{key: string, value}> | Array.<string>} fields
 * @param {string?} namespace
 * @returns {(function(*): void)|*}
 */
export const fieldsOpen = (fields, namespace = '') => (dispatch) => {
  dispatch(Actions.fieldsOpen(getFieldsObj(fields), namespace));
};

/**
 * Remove fields from redux state.
 *
 * @param {Array.<string>} keys
 * @param {string?} namespace
 * @returns {(function(*): void)|*}
 */
export const fieldsClose = (keys, namespace = '') => (dispatch) => {
  dispatch(Actions.fieldsClose(keys, namespace));
};

/**
 * Set fields values.
 *
 * @param {Array.<{key: string, value}>} fields
 * @param {string?} namespace
 * @returns {(function(*): void)|*}
 */
export const fieldsSet = (fields, namespace = '') => (dispatch) => {
  dispatch(Actions.fieldsSet(getFieldsObj(fields), namespace));
};

/**
 * Set one field value.
 *
 * @param {string} key
 * @param {any} value
 * @param {string?} namespace
 * @returns {(function(*): void)|*}
 */
export const fieldSet = (key, value, namespace = '') => (dispatch) => {
  dispatch(fieldsSet([{ key, value }], namespace));
};
