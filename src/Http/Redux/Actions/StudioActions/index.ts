import StudioService from 'Http/Services/StudioService';
import {
	GET_ARTISTS_SUCCESS,
	GET_ARTISTS_FAIL,
	SET_LOADING,
	GET_ARTISTS_ALBUMS_SUCCESS,
	GET_ARTISTS_ALBUMS_FAIL,
	GET_ALBUM_PHOTOS_SUCCESS,
	GET_ALBUM_PHOTOS_FAIL,
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
//Get Artists Albums Action
export const getArtistsAlbumsAction = () => async (dispatch: any) => {
	try {
		const res = await StudioService.GetArtistsAlbums();
		dispatch({
			type: GET_ARTISTS_ALBUMS_SUCCESS,
			payload: res,
		});
	} catch (error: any) {
		dispatch({
			type: GET_ARTISTS_ALBUMS_FAIL,
			payload: error.response.data.message,
		});
	}
};
//Get Album Photos Action
export const getAlbumPhotosAction =
	(album_id: number) => async (dispatch: any) => {
		try {
			const res = await StudioService.GetAlbumPhotos(album_id);
			dispatch({
				type: GET_ALBUM_PHOTOS_SUCCESS,
				payload: res,
			});
		} catch (error: any) {
			dispatch({
				type: GET_ALBUM_PHOTOS_FAIL,
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
