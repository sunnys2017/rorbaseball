import { FETCH_PLAYERS, FETCH_MORE_PLAYERS } from './types'
import axios from 'axios'

const csrfToken = document.querySelector('[name="csrf-token"]').content;
axios.defaults.headers.common['X_CSRF_TOKEN'] = csrfToken;

export const fetchPlayers = (year,offset) => dispatch => {
	axios.get(`/getPlayerList/${year}/${offset}`)
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

export const fetchMorePlayers = (year, offset) => dispatch => {
	axios.get(`/getPlayerList/${year}/${offset}`)
		.then( res => {
			return dispatch({
				type: FETCH_MORE_PLAYERS,
				payload: res.data
			})
		})
		.catch(err => {
			console.log(err)
			throw new Error('Could not fetch players.')
		})
}

