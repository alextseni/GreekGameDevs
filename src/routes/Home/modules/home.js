// ------------------------------------
// Constants
// ------------------------------------
export const COUNTER_INCREMENT = 'COUNTER_INCREMENT'
export const COUNTER_DECREMENT = 'COUNTER_DECREMENT'
export const RESET = 'RESET'
export const DICE_ROLL = 'DICE_ROLL'
// ------------------------------------
// Actions
// ------------------------------------
export function increment (index, value = 1) {
  return {
    type    : COUNTER_INCREMENT,
    payload : {index, value},
  }
}

export function decrement (index, value = 1) {
  return {
    type    : COUNTER_DECREMENT,
    payload : {index, value},
  }
}

export function roll (value, instances) {
  const rollsArray = new Array(instances)
  return {
    type    : DICE_ROLL,
    payload : rollsArray.fill(null).map(e => Math.floor((Math.random() * value) + 1)),
  }
}

export function reset () {
  return {
    type    : RESET,
    payload : 0,
  }
}

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

export const actions = {
  increment,
  decrement,
  reset,
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [COUNTER_INCREMENT] : (state, action) => ({
    ...state,
    dice: state.dice.map((die, idx) => ({
      ...die,
      instances: idx !== action.payload.index ? die.instances : die.instances + action.payload.value,
  })),
}),
  [COUNTER_DECREMENT]  : (state, action) => ({
    ...state,
    dice: state.dice.map((die, idx) => ({
      ...die,
      instances: idx !== action.payload.index ? die.instances : die.instances - action.payload.value,
  })),
}),
  [RESET] : (state, action) => ({
    ...state,
    dice: state.dice.map((die, idx) => ({
      ...die,
      instances: 1,
  })),
  }),
  [DICE_ROLL] : (state, action) => ({
    ...state,
    result: action.payload,
  }),
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  result: [],
  success: [],
  dice: [
    {
      label: 'd4',
      instances: 1,
      value: 4,
    },
    {
      label: 'd6',
      instances: 1,
      value: 6,
    },
    {
      label: 'd8',
      instances: 1,
      value: 8,
    },
    {
      label: 'd10',
      instances: 1,
      value: 10,
    },
    {
      label: 'd12',
      instances: 1,
      value: 12,
    },
    {
      label: 'd20',
      instances: 1,
      value: 20,
    },
    {
      label: 'd100',
      instances: 1,
      value: 100,
    },
    {
      label: 'DX',
      instances: 1,
      value: 0,
    },
  ],
}
export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
