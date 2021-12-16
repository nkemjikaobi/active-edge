import {
	GET_ARTISTS_SUCCESS,
	GET_ARTISTS_FAIL,
	SET_LOADING,
} from '../../Types/StudioTypes/index';
import axios from 'axios';

//Get Artists
export const getArtists = () => async (dispatch: any) => {
	try {
		const res = await axios.get('');
		dispatch({
			type: GET_ARTISTS_SUCCESS,
			payload: res.data,
		});
	} catch (error: any) {
		dispatch({
			type: GET_ARTISTS_FAIL,
			payload: error.response.data.message,
		});
	}
};

//Set BookLoading
export const setBookLoading = () => async (dispatch: any) => {
	dispatch({
		type: SET_LOADING,
	});
};
