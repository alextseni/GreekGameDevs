// ------------------------------------
// Constants
// ------------------------------------
export const UPDATE_EVENTS = 'UPDATE_EVENTS'

// ------------------------------------
// Actions
// ------------------------------------
export function setCalendarEvents (data) {
  return {
    type    : UPDATE_EVENTS,
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
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  events: [],
}

export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
