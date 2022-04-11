

const defaultState = {
  items: [],
  isFetching: true,
}


export default function reposReducer(state = defaultState, action) {
  switch (action.type) {

    // case AUTH_USER:
    //   return { ...state, user: action.payload }

    default:
      return state
  }
}
