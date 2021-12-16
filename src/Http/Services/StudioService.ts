/* eslint-disable max-len */
import IArtists from 'dto/Studio/IArtists';
import axios from 'axios';
import {
	GET_ARTISTS_URL,
	GATEWAY_API_ROUTE,
	GET_ALBUM_PHOTOS_URL,
	GET_ARTISTS_ALBUMS_URL,
} from 'Http/Routes/StudioRoutes/index';
import IAlbumPhoto from 'dto/Studio/IAlbumPhoto';
import IAlbum from 'dto/Studio/IAlbum';

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
}

export default StudioService;
