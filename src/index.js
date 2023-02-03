import { omit, omitMultiple } from './helpers'

const SIMPLE_REDUX_FIELD__OPEN = 'SIMPLE_REDUX_FIELD__OPEN'
const SIMPLE_REDUX_FIELD__CLOSE = 'SIMPLE_REDUX_FIELD__CLOSE'
const SIMPLE_REDUX_FIELD__OPEN_MULTIPLE = 'SIMPLE_REDUX_FIELD__OPEN_MULTIPLE'
const SIMPLE_REDUX_FIELD__CLOSE_MULTIPLE = 'SIMPLE_REDUX_FIELD__CLOSE_MULTIPLE'

const initialState = {}

export const simpleReduxFieldReducer = (state = initialState, action) => {
  const payload = action.payload
  switch (action.type) {
    case SIMPLE_REDUX_FIELD__OPEN:
      return openCase(state, payload)

    case SIMPLE_REDUX_FIELD__CLOSE:
      return closeCase(state, payload)

    case SIMPLE_REDUX_FIELD__OPEN_MULTIPLE:
      return openMultipleCase(state, payload)

    case SIMPLE_REDUX_FIELD__CLOSE_MULTIPLE:
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
  type: SIMPLE_REDUX_FIELD__OPEN,
  payload: { key, value }
})

const closeAction = (key) => ({
  type: SIMPLE_REDUX_FIELD__CLOSE,
  payload: { key }
})

const openMultipleAction = (values) => ({
  type: SIMPLE_REDUX_FIELD__OPEN_MULTIPLE,
  payload: values
})

const closeMultipleAction = (keys) => ({
  type: SIMPLE_REDUX_FIELD__CLOSE_MULTIPLE,
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
