/* eslint-disable max-len */
import IArtists from 'dto/Studio/IArtists';
import axios from 'axios';
import {
	GET_ARTISTS_URL,
	GATEWAY_API_ROUTE,
	GET_ALBUM_PHOTOS_URL,
	GET_ARTISTS_ALBUMS_URL,
	TWEET_URL,
	MODIFY_TWEET_URL,
} from 'Http/Routes/StudioRoutes/index';
import IAlbumPhoto from 'dto/Studio/IAlbumPhoto';
import IAlbum from 'dto/Studio/IAlbum';
import ITweet from 'dto/Studio/ITweet';

const authAxios = axios.create({
	baseURL: GATEWAY_API_ROUTE,
	headers: {
		'Content-Type': 'application/json',
	},
});

class StudioService {
	/**
	 * Method to get all artists
	 * @returns result Array<IArtists>
	 */
	public static GetArtists = async (): Promise<Array<IArtists>> => {
		let result: any;

		try {
			const artists = await authAxios.get(GET_ARTISTS_URL);
			result = artists;
		} catch (error: any) {}
		return result;
	};

	/**
	 * Method to get all artistes albums
	 * @returns result Array<IAlbum>
	 */
	public static GetArtistsAlbums = async (): Promise<Array<IAlbum>> => {
		let result: any;

		try {
			const artistsAlbums = await authAxios.get(GET_ARTISTS_ALBUMS_URL);
			result = artistsAlbums;
		} catch (error: any) {}
		return result;
	};

	/**
	 * Method to get all album photos
	 * @param album_id
	 * @returns result Array<IAlbumPhoto>
	 */
	public static GetAlbumPhotos = async (
		album_id: number
	): Promise<Array<IAlbumPhoto>> => {
		let result;

		try {
			const albumPhotos = await authAxios.get(GET_ALBUM_PHOTOS_URL(album_id));
			result = albumPhotos.data;
		} catch (error: any) {}
		return result;
	};

	/**
	 * Method to get all tweets
	 * @returns result Array<ITweet>
	 */
	public static GetAllTweets = async (): Promise<Array<ITweet>> => {
		let result: any;

		try {
			const tweets = await authAxios.get(TWEET_URL);
			result = tweets;
		} catch (error: any) {}
		return result;
	};

	/**
	 * Method to post tweet
	 * @param tweetDetails<ITweet>
	 * @returns result any
	 */
	public static PostTweet = async (tweetDetails: ITweet): Promise<ITweet> => {
		let result: any;

		try {
			const tweet = await authAxios.post(TWEET_URL, tweetDetails);
			result = tweet.data;
			console.log({ result });
		} catch (error: any) {}
		return result;
	};
	/**
	 * Method to update tweet
	 * @param comment_id<number>
	 * @returns result any
	 */
	public static UpdateTweet = async (comment_id: number): Promise<ITweet> => {
		let result: any;

		try {
			const tweet = await authAxios.put(MODIFY_TWEET_URL(comment_id));
			result = tweet.data;
			console.log({ result });
		} catch (error: any) {}
		return result;
	};
	/**
	 * Method to delete tweet
	 * @param comment_id<number>
	 * @returns result any
	 */
	public static DeleteTweet = async (comment_id: number): Promise<ITweet> => {
		let result: any;

		try {
			const tweet = await authAxios.delete(MODIFY_TWEET_URL(comment_id));
			result = tweet.data;
			console.log({ result });
		} catch (error: any) {}
		return result;
	};
}

export default StudioService;
