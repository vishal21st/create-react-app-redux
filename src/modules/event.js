import axios from 'axios';
export const UPDATE_STORE = 'event/UPDATE_STORE';
export const SHOW_TRAILER = 'event/SHOW_TRAILER';
export const SELECT_LANGUAGE = "event/SELECT_LANGUAGE"
const initialState = {
  events: {},
  languages: [],
  rowIndexForTrailer: null,
  trailerEvent: {},
  selectedLanguages: []
}


export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_STORE:
      return {
        ...state,
        ...action.data
      }
    case SHOW_TRAILER:
      return {
        ...state,
        ...action.data
      }
    case SELECT_LANGUAGE:
      return {
        ...state,
        ...action.data
      }
    default:
      return state
  }
}

export const updateState = () => {
  return async (dispatch) => {
    const response = await axios.get("/api/serv/getData?cmd=GETTRAILERS&mtype=cs")
    const { data } = response
    dispatch({
      type: UPDATE_STORE,
      data: {
        languages: data[0],
        events: data[1]
      }
    })
  }
}

export const showTrailer = (rowIndexForTrailer, trailerEvent) => {
  return (dispatch) => {
    dispatch({
      type: SHOW_TRAILER,
      data: {
        rowIndexForTrailer,
        trailerEvent
      }
    })
  }
}

export const selectLanguage = (selectedLanguages) => {
  
  return (dispatch) => {
    dispatch({
      type: SELECT_LANGUAGE,
      data: {
        selectedLanguages
      }
    })
  }
}