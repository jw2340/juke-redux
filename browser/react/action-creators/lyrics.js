import {SET_LYRICS} from '../constants.js';

const setLyrics = function(text){

	return {
		type: SET_LYRICS,
		lyrics: text
	};
};

export default setLyrics
