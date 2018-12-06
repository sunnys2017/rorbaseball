import { FETCH_PLAYERS, FETCH_MORE_PLAYERS } from '../actions/types'

const initialState = {
	players: [],
}

export default function(state=initialState, action){
	switch(action.type){
    case FETCH_PLAYERS:
      return {
        ...state,
        players: action.payload
      }
    case FETCH_MORE_PLAYERS:

      return {
        ...state,
        players: [...action.payload, ...state.players]
      }
    default:
      return state;
  }
}
