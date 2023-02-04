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
    ...simpleReduxFieldReducer,
    // other reducers
  },
});
```

2. With redux:
```jsx
import { legacy_createStore as createStore, combineReducers } from 'redux';
import { simpleReduxFieldReducer } from 'simple-redux-field';

export const store = createStore(combineReducers({
  ...simpleReduxFieldReducer,
  // other reducers
}));
```

### Example
```jsx
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { openField, closeField, $fields } from 'simple-redux-field';

const AGE_FIELD = 'person_form__age_field';

const App = () => {
  const dispatch = useDispatch();
  const fields = useSelector($fields);

  const handleAgeSet = () => {
    dispatch(openField(AGE_FIELD, 23));
  }

  const handleAgeReset = () => {
    dispatch(closeField(AGE_FIELD));
  }

  // ...
  return (
    <pre>
      {JSON.stringify(fields, null, 2)}
    </pre>
  );
}
```

### API
`openField(key, value)` - creates field in redux storage: `key: value`;

`closeField(key)` - removes field from redux storage by specify `key`;

`openFields([ { key: 'key1', value: 'value1' }, ... ])` - creates multiple fields in redux storage;

`closeFields([ 'key1', ... ])` - removes multiple fields from redux storage by specify keys.
