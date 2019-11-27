import actions from './actions'

const initState = {
  currentItem: null,
  list: []
};

export default function appReducer(state = initState, action) {
  switch (action.type) {
    case actions.SET_ITEM_LIST:
      return {...state,  list: action.payload}
    case actions.SET_CURRENT_ITEM:
      return {...state, currentItem: action.payload}
    default:
      return state;
  }
}
