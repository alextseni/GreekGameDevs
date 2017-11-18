// ------------------------------------
// Constants
// ------------------------------------
export const UPDATE_EVENTS = 'UPDATE_EVENTS'
export const UPDATE_HISTORY = 'UPDATE_HISTORY'
// ------------------------------------
// Actions
// ------------------------------------
export function setCalendarEvents (data) {
  return {
    type    : UPDATE_EVENTS,
    payload : { data },
  }
}

export function setHistory (data) {
  return {
    type    : UPDATE_HISTORY,
    payload : { data },
  }
}


/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */


export const actions = {
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [UPDATE_EVENTS] : (state, action) => ({
    ...state,
    events: action.payload.data,
  }),
  [UPDATE_HISTORY] : (state, action) => ({
    ...state,
    history: action.payload.data,
  }),
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  events: [],
  history: [],
}

export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
