const SET_REPOS = 'SET_REPOS'

const defaultState = {
  items: [],
  isFetching: true,
}


export default function reposReducer(state = defaultState, action) {
  console.log(action.payload, 'ЭКШН В РЕДЬЮС');
  switch (action.type) {
   
    case SET_REPOS:
      return {...state, items: action.payload.items}

    default:
      return state
  }
}

export const setRepos = (repos) => ({type: SET_REPOS, payload: repos})
