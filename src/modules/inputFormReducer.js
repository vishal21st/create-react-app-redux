import {
  INPUT_CHANGE,
  UPDATE_UNIQ_NUMBERS, 
  UPDATE_DUPLICATE_NUMBERS,
  UPDATE_NUMBERS_BY_VALUE,
  UPDATE_NUMBERS,
  SAVING,
  SAVING_SUCCESS,
  FETCHING,
  FETCHING_SUCCESS,
  ERROR 
} from '../constants/actionTypes'


const initialState = {
  numbersByValue: {
    
  },
  numberList: [],
  duplicateNumbers: [],
  inputText: "",
  newUniqNumbers: [],
  isSaving: false,
  isFetching: false,
  error: ""
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NUMBERS:
      return {
        ...state,
        numberList: action.payload
      }
    case UPDATE_NUMBERS_BY_VALUE:
      return {
        ...state,
        numbersByValue: action.payload
      }
    case INPUT_CHANGE:
      return {
        ...state,
        inputText:  action.payload
      }
    case UPDATE_UNIQ_NUMBERS:
      return {
        ...state,
        newUniqNumbers: action.payload
      }
    case UPDATE_DUPLICATE_NUMBERS:
      return {
        ...state,
        duplicateNumbers: action.payload
      }
    case SAVING:
      return {
        ...state,
        isSaving: true
      }
    case SAVING_SUCCESS:
      return {
        ...state,
        isSaving: false
      }
    case FETCHING:
      return {
        ...state,
        isFetching: true
      }
    case FETCHING_SUCCESS:
      return {
        ...state,
        isFetching: false
      }
    case ERROR:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  }
}

