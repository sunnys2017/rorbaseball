import { FETCH_PLAYERS } from '../actions/types'

const initialState = {
	players: [],
}

export default function(state=initialState, action){
	switch(action.type){
    case FETCH_PLAYERS:
      return {
        ...state,
        items: action.payload
      }
    default:
      return state;
  }
}
