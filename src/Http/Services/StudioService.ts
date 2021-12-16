/* eslint-disable max-len */
import IArtists from 'dto/Studio/IArtists';
import axios from 'axios';
import {
	GET_ARTISTS_URL,
	GATEWAY_API_ROUTE,
} from 'Http/Routes/StudioRoutes/index';

const authAxios = axios.create({
	baseURL: GATEWAY_API_ROUTE,
	headers: {
		'Content-Type': 'application/json',
	},
});

class StudioService {
	// /**
	//  * Method to get all artists
	//  * @param email
	//  * @returns result IWallet
	//  */
	// public static CreateWallet = async (
	// 	customer_email: string
	// ): Promise<IWallet> => {
	// 	let result: any;
	// 	const payload = {
	// 		customer_email: customer_email,
	// 	};

	// 	try {
	// 		const wallet = await authAxios.post(CREATE_WALLET_URL, payload);
	// 		result = wallet.data.data;
	// 		localStorage.setItem('wallet', JSON.stringify(result));
	// 	} catch (error: any) {}
	// 	return result;
	// };

	/**
	 * Method to get all artists
	 * @returns result Array<IArtists>
	 */
	public static GetArtists = async (): Promise<Array<IArtists>> => {
		let result: any;

		try {
			const artists = await authAxios.get(GET_ARTISTS_URL);
			console.log({ artists });
			result = artists;
		} catch (error: any) {}
		return result;
	};
}

export default StudioService;
