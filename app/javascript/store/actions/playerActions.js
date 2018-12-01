import { FETCH_PLAYERS } from './types'
import axios from 'axios'

const csrfToken = document.querySelector('[name="csrf-token"]').content;
axios.defaults.headers.common['X_CSRF_TOKEN'] = csrfToken;

export const fetchPlayers = year => dispatch => {
	axios.get(`/getPlayerList/${year}`)
		.then( res => {
			return dispatch({ 
				type: FETCH_PLAYERS, 
				payload: res.data 
			})
		})
		.catch(err => {
			console.log(err)
			throw new Error('Could not fetch players.')
		})
}