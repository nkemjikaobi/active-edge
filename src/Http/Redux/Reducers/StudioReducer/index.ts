import {
	GET_ARTISTS_SUCCESS,
	GET_ARTISTS_FAIL,
	SET_LOADING,
	GET_ARTISTS_ALBUMS_SUCCESS,
	GET_ARTISTS_ALBUMS_FAIL,
	GET_ALBUM_PHOTOS_SUCCESS,
	GET_ALBUM_PHOTOS_FAIL,
} from '../../Types/StudioTypes/index';

const IStudioState = {
	artists: null,
	artistsAlbums: null,
	albumPhotos: null,
	error: null,
	loading: false,
};

const studioReducer = (state = IStudioState, action: any) => {
	switch (action.type) {
		case GET_ARTISTS_SUCCESS:
			return {
				...state,
				artists: action.payload.data,
				loading: false,
			};
		case GET_ARTISTS_ALBUMS_SUCCESS:
			return {
				...state,
				artistsAlbums: action.payload.data,
				loading: false,
			};
		case GET_ALBUM_PHOTOS_SUCCESS:
			return {
				...state,
				albumPhotos: action.payload,
				loading: false,
			};
		case GET_ARTISTS_FAIL:
			return {
				...state,
				error: action.payload,
				loading: false,
			};
		case GET_ARTISTS_ALBUMS_FAIL:
			return {
				...state,
				error: action.payload,
				loading: false,
			};
		case GET_ALBUM_PHOTOS_FAIL:
			return {
				...state,
				error: action.payload,
				loading: false,
			};
		case SET_LOADING:
			return {
				...state,
				loading: true,
			};
		default:
			return state;
	}
};
export default studioReducer;
