import React from 'react'
import { useDispatch } from 'react-redux';

import { openField, closeField, openFields, closeFields } from 'redux-storage-field';

const App = () => {
  const dispatch = useDispatch();

  const handleAddField = () => {
    dispatch(openField('one', 'hello one!'));
  }

  const handleRemoveField = () => {
    dispatch(closeField('one'));
  }

  const handleAddFields = () => {
    dispatch(openFields([
      { key: 'one', value: 'one' },
      { key: 'two', value: 'two' },
      { key: 'three', value: 'three' },
      { key: 'four', value: 'four' },
    ]));
  }

  const handleRemoveFields = () => {
    dispatch(closeFields([
      'one',
      'two',
      'three',
      'four',
    ]));
  }

  return (
    <>
      <div>
        <button
          onClick={handleAddField}
        >
          Add field
        </button>
      </div>
      <div>
        <button
          onClick={handleRemoveField}
        >
          Remove field
        </button>
      </div>
      <hr />
      <div>
        <button
          onClick={handleAddFields}
        >
          Add fields
        </button>
      </div>
      <div>
        <button
          onClick={handleRemoveFields}
        >
          Remove fields
        </button>
      </div>
    </>
  );
}



export default App
