import ITweet from 'dto/Studio/ITweet';
import StudioService from 'Http/Services/StudioService';
import {
	GET_ARTISTS_SUCCESS,
	GET_ARTISTS_FAIL,
	SET_LOADING,
	GET_ARTISTS_ALBUMS_SUCCESS,
	GET_ARTISTS_ALBUMS_FAIL,
	GET_ALBUM_PHOTOS_SUCCESS,
	GET_ALBUM_PHOTOS_FAIL,
	GET_TWEETS_SUCCESS,
	GET_TWEETS_FAIL,
	POST_TWEETS_SUCCESS,
	POST_TWEETS_FAIL,
	UPDATE_TWEETS_SUCCESS,
	UPDATE_TWEETS_FAIL,
	DELETE_TWEETS_SUCCESS,
	DELETE_TWEETS_FAIL,
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

//Get Tweets Action
export const getTweetsAction = () => async (dispatch: any) => {
	try {
		const res = await StudioService.GetAllTweets;
		dispatch({
			type: GET_TWEETS_SUCCESS,
			payload: res,
		});
	} catch (error: any) {
		dispatch({
			type: GET_TWEETS_FAIL,
			payload: error.response.data.message,
		});
	}
};
//Post Tweets Action
export const postTweetAction = (tweet: ITweet) => async (dispatch: any) => {
	try {
		const res = await StudioService.PostTweet(tweet);
		dispatch({
			type: POST_TWEETS_SUCCESS,
			payload: res,
		});
	} catch (error: any) {
		dispatch({
			type: POST_TWEETS_FAIL,
			payload: error.response.data.message,
		});
	}
};

//Update Tweet Action
export const updateTweetAction =
	(comment_id: number) => async (dispatch: any) => {
		try {
			const res = await StudioService.UpdateTweet(comment_id);
			dispatch({
				type: UPDATE_TWEETS_SUCCESS,
				payload: res,
			});
		} catch (error: any) {
			dispatch({
				type: UPDATE_TWEETS_FAIL,
				payload: error.response.data.message,
			});
		}
	};

//Delete Tweet Action
export const deleteTweetAction =
	(comment_id: number) => async (dispatch: any) => {
		try {
			const res = await StudioService.DeleteTweet(comment_id);
			dispatch({
				type: DELETE_TWEETS_SUCCESS,
				payload: res,
			});
		} catch (error: any) {
			dispatch({
				type: DELETE_TWEETS_FAIL,
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
