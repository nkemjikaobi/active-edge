import StudioService from 'Http/Services/StudioService';
import {
	GET_ARTISTS_SUCCESS,
	GET_ARTISTS_FAIL,
	SET_LOADING,
} from '../../Types/StudioTypes/index';

//Get Artists Action
export const getArtistsAction = () => async (dispatch: any) => {
	try {
		const res = await StudioService.GetArtists();
		dispatch({
			type: GET_ARTISTS_SUCCESS,
			payload: res,
		});
	} catch (error: any) {
		dispatch({
			type: GET_ARTISTS_FAIL,
			payload: error.response.data.message,
		});
	}
};

//Set BookLoading Action
export const setLoadingAction = () => async (dispatch: any) => {
	dispatch({
		type: SET_LOADING,
	});
};
