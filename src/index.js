import { omit, omitMultiple } from './helpers'

const REDUX_STORAGE_FIELD__OPEN = 'REDUX_STORAGE_FIELD__OPEN'
const REDUX_STORAGE_FIELD__CLOSE = 'REDUX_STORAGE_FIELD__CLOSE'
const REDUX_STORAGE_FIELD__OPEN_MULTIPLE = 'REDUX_STORAGE_FIELD__OPEN_MULTIPLE'
const REDUX_STORAGE_FIELD__CLOSE_MULTIPLE =
  'REDUX_STORAGE_FIELD__CLOSE_MULTIPLE'

const initialState = {}

export const reduxStorageFieldReducer = (state = initialState, action) => {
  const payload = action.payload
  switch (action.type) {
    case REDUX_STORAGE_FIELD__OPEN:
      return openCase(state, payload)

    case REDUX_STORAGE_FIELD__CLOSE:
      return closeCase(state, payload)

    case REDUX_STORAGE_FIELD__OPEN_MULTIPLE:
      return openMultipleCase(state, payload)

    case REDUX_STORAGE_FIELD__CLOSE_MULTIPLE:
      return closeMultipleCase(state, payload)

    default:
      return state
  }
}

const openCase = (state, payload) => {
  return {
    ...state,
    [payload.key]: payload.value
  }
}

const closeCase = (state, payload) => {
  return omit(state, payload.key)
}

const openMultipleCase = (state, payload) => {
  const fields = payload.reduce((acc, curr) => {
    return {
      ...acc,
      [curr.key]: curr.value
    }
  }, {})
  return {
    ...state,
    ...fields
  }
}

const closeMultipleCase = (state, payload) => {
  return omitMultiple(state, payload)
}

const openAction = (key, value) => ({
  type: REDUX_STORAGE_FIELD__OPEN,
  payload: { key, value }
})

const closeAction = (key) => ({
  type: REDUX_STORAGE_FIELD__CLOSE,
  payload: { key }
})

const openMultipleAction = (values) => ({
  type: REDUX_STORAGE_FIELD__OPEN_MULTIPLE,
  payload: values
})

const closeMultipleAction = (keys) => ({
  type: REDUX_STORAGE_FIELD__CLOSE_MULTIPLE,
  payload: keys
})

export const openField = (key, value) => (dispatch) => {
  dispatch(openAction(key, value))
}

export const closeField = (key) => (dispatch) => {
  dispatch(closeAction(key))
}

export const openFields = (values) => (dispatch) => {
  dispatch(openMultipleAction(values))
}

export const closeFields = (keys) => (dispatch) => {
  dispatch(closeMultipleAction(keys))
}
