# redux-storage-field

Simplifies creating redux fields process.

[![NPM](https://img.shields.io/npm/v/redux-storage-field.svg)](https://www.npmjs.com/package/redux-storage-field)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

### Install

```bash
npm install --save redux-storage-field
```

### Configure redux store
1. With reduxjs/toolkit:
```jsx
import { configureStore } from '@reduxjs/toolkit';
import { reduxStorageFieldReducer } from 'redux-storage-field';

export const store = configureStore({
  reducer: {
    fields: reduxStorageFieldReducer,
    // other reducers
  },
});
```

2. With redux:
```jsx
import { legacy_createStore as createStore, combineReducers } from 'redux';
import { reduxStorageFieldReducer } from 'redux-storage-field';

export const store = createStore(combineReducers({
  fields: reduxStorageFieldReducer,
  // other reducers
}));
```

### Example
```jsx
import React from 'react'
import { useDispatch } from 'react-redux';

import { openField, closeField } from 'redux-storage-field';

const AGE_FIELD = 'person_form__age_field';

const App = () => {
  const dispatch = useDispatch();

  const handleAgeSet = () => {
    dispatch(openField(AGE_FIELD, 23));
  }

  const handleAgeReset = () => {
    dispatch(closeField(AGE_FIELD));
  }

  // ...
}
```

### API
`openField(key, value)` - creates field in redux storage: `key: value`;

`closeField(key)` - removes field from redux storage by specify `key`;

`openFields([ { key: 'key1', value: 'value1' }, ... ])` - creates multiple fields in redux storage;

`closeFields([ 'key1', ... ])` - removes multiple fields from redux storage by specify keys.
