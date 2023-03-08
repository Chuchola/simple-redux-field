# simple-redux-field

Simplifies creating redux fields process.

[![NPM](https://img.shields.io/npm/v/simple-redux-field.svg)](https://www.npmjs.com/package/simple-redux-field)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

### Install

```bash
npm install --save simple-redux-field
```

### Configure redux store
1. With reduxjs/toolkit:
```jsx
import { configureStore } from '@reduxjs/toolkit';
import { simpleReduxFieldReducer } from 'simple-redux-field';

export const store = configureStore({
  reducer: {
    ...simpleReduxFieldReducer(),
    // other reducers
  },
});
```

2. With redux:
```jsx
import { legacy_createStore as createStore, combineReducers } from 'redux';
import { simpleReduxFieldReducer } from 'simple-redux-field';

export const store = createStore(combineReducers({
  ...simpleReduxFieldReducer(),
  // other reducers
}));
```

### Example
```jsx
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import {
  fieldsOpen,
  fieldsClose,
  fieldSet,
  $fields,
} from 'simple-redux-field';

const NAMESPACE = 'SimpleFormPage';
const FN_FIELD = 'person_form__first_name_field';
const LN_FIELD = 'person_form__last_name_field';
const AGE_FIELD = 'person_form__age_field';

const SimpleForm = () => {
  const dispatch = useDispatch();
  const fields = useSelector($fields);

  React.useEffect(() => {
    dispatch(fieldsOpen([
      FN_FIELD,
      LN_FIELD,
      AGE_FIELD,
    ], NAMESPACE));
    return () => dispatch(fieldsClose([
      FN_FIELD,
      LN_FIELD,
      AGE_FIELD,
    ], NAMESPACE));
  }, [dispatch]);

  const handleFirstNameChange = e => {
    const value = e.target.value;
    dispatch(fieldSet(FN_FIELD, value, NAMESPACE));
  };

  const handleLastNameChange = e => {
    const value = e.target.value;
    dispatch(fieldSet(LN_FIELD, value, NAMESPACE));
  };

  const handleAgeChange = e => {
    const value = e.target.value;
    dispatch(fieldSet(AGE_FIELD, value, NAMESPACE));
  }

  const ages = Array.from({ length: 100 }, (val, index) => 20 + index);
  const firstName = fields[FN_FIELD] || '';
  const lastName = fields[LN_FIELD] || '';
  const age = fields[AGE_FIELD] || '';

  return (
    <div>
      <form>
        <div>
          <label>First name: </label>
          <input
            value={firstName}
            onChange={handleFirstNameChange}
          />
        </div>
        <div>
          <label>First name: </label>
          <input
            value={lastName}
            onChange={handleLastNameChange}
          />
        </div>
        <div>
          <label>Age: </label>
          <select
            onChange={handleAgeChange}
            value={age}
          >
            {ages.map(age => (
              <option
                key={age.toString()}
                value={age.toString()}
              >
                {age}
              </option>
            ))}
          </select>
        </div>
      </form>
      <hr />
      <pre>
        {JSON.stringify(fields, null, 2)}
      </pre>
    </div>
  );
}

export default SimpleForm;
```

### API

- `fieldsOpen([ { key: 'key1', value: 'value1' }, ... ], namespace)` - creates multiple fields in redux storage.
`namespace` is optional parameter that identify action type in redux dev tools;

- `fieldsSet([ { key: 'key1', value: 'value1' }, ... ], namespace)` - changes multiple fields in redux storage.
`namespace` is optional parameter that identify action type in redux dev tools;

- `fieldSet(key, value, namespace)` - changes one field in redux storage.
`namespace` is optional parameter that identify action type in redux dev tools;

- `fieldsClose([ 'key1', ... ], namespace)` - removes fields from redux storage. `keys` parameter are array of strings.
`namespace` is optional parameter that identify action type in redux dev tools;

- `$fields` - selector gets fields from storage.
