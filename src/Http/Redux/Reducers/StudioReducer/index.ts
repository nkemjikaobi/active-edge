import {
	GET_ARTISTS_SUCCESS,
	GET_ARTISTS_FAIL,
} from '../../Types/StudioTypes/index';

const IStudioState = {
	artists: null,
	error: null,
	loading: false,
};

const studioReducer = (state = IStudioState, action: any) => {
	switch (action.type) {
		case GET_ARTISTS_SUCCESS:
			return {
				...state,
				artists: action.payload.data,
			};
		case GET_ARTISTS_FAIL:
			return {
				...state,
				error: action.payload,
				loading: false,
			};
		default:
			return state;
	}
};
export default studioReducer;
