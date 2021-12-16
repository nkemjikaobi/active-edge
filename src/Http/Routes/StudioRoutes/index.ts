/**
 * Routes for Studio
 */

import config from 'Configurations/configurations';

export const GATEWAY_API_ROUTE = config.web.baseUrl;

export const GET_ARTISTS_URL = `${GATEWAY_API_ROUTE}/users`;
