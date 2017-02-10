import {SET_LYRICS} from '../constants.js'

const intitialState = {text: ''}; 

function reducer(state = intitialState, action){

	switch(action.type){
		case SET_LYRICS:
			return Object.assign({}, state, {
				text: action.lyrics 
			})
		default:
			return state; 
	}
}

export default reducer; 