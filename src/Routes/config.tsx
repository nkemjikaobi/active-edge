import HomePage from 'Pages/Home/HomePage';
import RouteModel from 'Models/IRouteModel';
import AlbumPage from 'Pages/Album/AlbumPage';

const config: Array<RouteModel> = [
	{
		path: '/',
		exact: true,
		auth: false,
		component: HomePage,
	},
	{
		path: '/artist/:id',
		exact: true,
		auth: false,
		component: AlbumPage,
	},
];

export default config;
