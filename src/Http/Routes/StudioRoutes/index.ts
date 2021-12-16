/**
 * Routes for Studio
 */

import config from 'Configurations/configurations';

export const GATEWAY_API_ROUTE = config.web.baseUrl;

export const GET_ARTISTS_URL = `${GATEWAY_API_ROUTE}/users`;
export const GET_ARTISTS_ALBUMS_URL = `${GATEWAY_API_ROUTE}/albums`;
export const GET_ALBUM_PHOTOS_URL: any = (album_id: number) =>
	`${GATEWAY_API_ROUTE}/albums/${album_id}/photos`;
