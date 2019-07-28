import {
  INPUT_CHANGE,
  UPDATE_DUPLICATE_NUMBERS,
  UPDATE_UNIQ_NUMBERS,
  UPDATE_NUMBERS_BY_VALUE,
  UPDATE_NUMBERS,
  FETCHING,
  FETCHING_SUCCESS,
  SAVING,
  SAVING_SUCCESS,
  ERROR
} from '../constants/actionTypes'

import axios from 'axios';

import {
  findDuplicatesNumbers, 
  getNumbersFromTextInput,
  validateInput
} from '../helpers/index';


export const fetchNumbers = () => {
  
  return (dispatch) => {
    dispatch({type: FETCHING})
    axios.get('http://localhost:3001/api/numbers')
    .then((response) => {
      let { numbers } = response.data
      dispatch(initializeNumbersByValue(numbers))
      dispatch({
        type: UPDATE_NUMBERS,
        payload: numbers
      })
      dispatch({type: FETCHING_SUCCESS})
    })
    .catch((err) => {
      
    })
  }
}

export const initializeNumbersByValue = (payload) => {
  let numberByValues = {}
  for (let key in payload) {
    const number = payload[key]
    numberByValues[number] = {
      value: number, 
      isDuplicate: false
    }
  }

  return (dispatch) => {
    dispatch({
      type: UPDATE_NUMBERS_BY_VALUE,
      payload: numberByValues
    })
  }
}


export const updateNumbersByValue = (payload) => {
  return (dispatch) => {
    dispatch({
      type: UPDATE_NUMBERS_BY_VALUE,
      payload
    })
  }
}

export const handleInputChange = (payload) => {
  return  (dispatch, getState) =>{
    if (!validateInput(payload)) {
      dispatch({
        type: ERROR,
        payload: "Please enter comma seperated numbers or range only"
      })
    } else {
      dispatch({
        type: ERROR,
        payload: ""
      })
      const { numberList, numbersByValue } = getState().InputForm
      dispatch(updateDuplicateAndUniqInputsFromText(payload, numberList, numbersByValue))
      dispatch({
        type: INPUT_CHANGE,
        payload
      })
    }
  }
}

export const updateDuplicateAndUniqInputsFromText = (text, numberList, numbersByValue) => {
  return (dispatch) => {

    try {
      let numberHash = getNumbersFromTextInput(text)
      let {uniqNumbers, duplicateNumberHash} = findDuplicatesNumbers(numberList, numberHash)
      
      for (let key in numbersByValue) {
        if (duplicateNumberHash[key]) {
          numbersByValue[key]['isDuplicate'] = true
        } else {
          numbersByValue[key]['isDuplicate'] = false
        }
      } 

      dispatch({
        type: UPDATE_UNIQ_NUMBERS,
        payload: uniqNumbers
      })
      dispatch({
        type: UPDATE_DUPLICATE_NUMBERS,
        payload: duplicateNumberHash
      })

      dispatch(updateNumbersByValue(numbersByValue))

    } catch (e) {
      dispatch({
        type: ERROR,
        payload: e.message
      })
    }
  }
}


export const addNumbersToArray = (payload) => {
  let {newNumbers, oldNumbers} = payload
  let newArray = newNumbers.concat(oldNumbers)
  return (dispatch) => {
    dispatch({type: SAVING})
    dispatch(handleInputChange(""))
    dispatch(initializeNumbersByValue(newArray))
    dispatch({
      type: UPDATE_NUMBERS,
      payload: newArray
    })
    dispatch({type: SAVING_SUCCESS})
  }

}