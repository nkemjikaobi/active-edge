import BasePageLayout from 'Components/BasePageLayout/BasePageLayout';
import { Link, useParams } from 'react-router-dom';
import {
	getArtistsAlbumsAction,
	getAlbumPhotosAction,
} from 'Http/Redux/Actions/StudioActions';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import IAlbum from 'dto/Studio/IAlbum';
import ArtistAlbums from 'Components/ArtistAlbums/ArtistAlbums';

const AlbumPage = () => {
	const { id }: any = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		let mounted = true;
		if (mounted) {
			dispatch(getArtistsAlbumsAction());
		}
		return () => {
			mounted = false;
		};
	}, [id]);

	const albums: Array<IAlbum> = useSelector(
		(state: any) => state.studio.artistsAlbums
	);

	//Filter the albums belonging to the artist
	const artistAlbums: Array<IAlbum> =
		albums && albums.filter(album => `${album.userId}` === id);
	return (
		<BasePageLayout>
			<h4>Albums</h4>
			{artistAlbums.map((album: IAlbum) => {
				return <ArtistAlbums key={album.id} album={album} />;
			})}
			<Link to='/' className='btn btn-secondary'>
				Go Back
			</Link>
		</BasePageLayout>
	);
};

export default AlbumPage;
