export const UPDATE_STATS = 'UPDATE_STATS';
// ------------------------------------
// Actions
// ------------------------------------
export function updateStats(data) {
  return {
    type: UPDATE_STATS,
    payload: { data },
  };
}

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

export const actions = {};

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [UPDATE_STATS]: (state, action) => ({
    ...state,
    data: {
      ...state.data,
      ...action.payload.data,
    },
  }),
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  data: {},
};

export default function counterReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
