export const omit = (o, key) => {
  return Object.fromEntries(Object.entries(o).filter((e) => e[0] !== key));
};

export const omitMultiple = (o, keys) => {
  const exclude = new Set(keys);
  return Object.fromEntries(Object.entries(o).filter((e) => !exclude.has(e[0])));
};

export const getType = (type, space) => {
  return `${space ? `${space}::` : ''}${type}`;
};

/**
 * Get fields object from fields array.
 *
 * @param {Array.<{key: string, value}> | Array.<string>} fields
 * @returns {object}
 */
export const getFieldsObj = fields => {
  return fields.reduce((acc, curr) => {
    let currKey;
    let currValue;
    if (typeof curr === 'object') {
      currKey = curr.key;
      currValue = curr.value;
    } else if (typeof curr === 'string') {
      currKey = curr;
      currValue = null;
    }
    return {
      ...acc,
      [currKey]: currValue,
    };
  }, {});
};
