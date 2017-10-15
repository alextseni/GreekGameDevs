// ------------------------------------
// Constants
// ------------------------------------
export const UPDATE_FILTER = 'UPDATE_FILTER'
// ------------------------------------
// Actions
// ------------------------------------
export function updateFilter (category, subcategory = '', value = '') {
  return {
    type    : UPDATE_FILTER,
    payload : { category, subcategory, value },
  }
}

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

export const actions = {
  updateFilter,
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [UPDATE_FILTER] : (state, action) => ({
    ...state,
    filters: {
      ...state.filters,
      main: action.payload.category || state.filters.main,
      [action.payload.category] : {
        ...state.filters[action.payload.category],
        [action.payload.subcategory]: action.payload.value || state.filters[action.payload.category][action.payload.subcategory],
      }
    },
  }),
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  filters: {
    main: 'company',
    company: {

    },
    games: {
      links: ['all'],
    },

  },
}

export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
