import HomePage from 'Pages/Home/HomePage';
import RouteModel from 'Models/IRouteModel';
import AlbumPage from 'Pages/Album/AlbumPage';
import AlbumPhotos from 'Components/AlbumPhotos/AlbumPhotos';
import TweetPage from 'Pages/Tweet/TweetPage';

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
	{
		path: '/album/:id/photos',
		exact: true,
		auth: false,
		component: AlbumPhotos,
	},
	{
		path: '/tweets',
		exact: true,
		auth: false,
		component: TweetPage,
	},
];

export default config;
