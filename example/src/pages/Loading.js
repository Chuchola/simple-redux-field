import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import omit from 'lodash/omit';

import {
  fieldsOpen,
  fieldsClose,
  fieldSet,
  $fields,
} from 'simple-redux-field';

const FN_FIELD = 'person_form__first_name_field';
const LN_FIELD = 'person_form__last_name_field';
const AGE_FIELD = 'person_form__age_field';
const LOADING_FIELD = 'person_form__loading_field';

const Loading = () => {
  const dispatch = useDispatch();
  const fields = useSelector($fields);

  React.useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    dispatch(fieldsOpen([
      { key: FN_FIELD, value: searchParams.get('fn') || null },
      { key: LN_FIELD, value: searchParams.get('ln') || null },
      { key: AGE_FIELD, value: searchParams.get('age') || null },
      { key: LOADING_FIELD, value: { inProgress: false, error: null } },
    ]));
    return () => dispatch(fieldsClose([
      FN_FIELD,
      LN_FIELD,
      AGE_FIELD,
      LOADING_FIELD,
    ]));
  }, [dispatch]);

  const handleFirstNameChange = e => {
    const value = e.target.value;
    dispatch(fieldSet(FN_FIELD, value));
  };

  const handleLastNameChange = e => {
    const value = e.target.value;
    dispatch(fieldSet(LN_FIELD, value));
  };

  const handleAgeChange = e => {
    const value = e.target.value;
    dispatch(fieldSet(AGE_FIELD, value));
  }

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(fieldSet(LOADING_FIELD, {
      inProgress: true,
    }));
    setTimeout(() => {
      dispatch(fieldSet(LOADING_FIELD, {
        inProgress: false,
      }));
    }, 3000);
  };

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

        <button
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
      <hr />
      <pre>
        {JSON.stringify(omit(fields, [FN_FIELD, LN_FIELD, AGE_FIELD]), null, 2)}
      </pre>
    </div>
  );
}

export default Loading;
