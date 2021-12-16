import AlbumPhoto from 'Components/AlbumPhoto/AlbumPhoto';
import IAlbumPhoto from 'dto/Studio/IAlbumPhoto';
import {
	getAlbumPhotosAction,
	setLoadingAction,
} from 'Http/Redux/Actions/StudioActions';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const AlbumPhotos = () => {
	const dispatch = useDispatch();
	const albumPhotos = useSelector((state: any) => state.studio.albumPhotos);
	const loading = useSelector((state: any) => state.studio.loading);
	const { id }: any = useParams();

	useEffect(() => {
		let mounted = true;
		if (mounted && id) {
			dispatch(setLoadingAction());

			dispatch(getAlbumPhotosAction(id));
		}
		return () => {
			mounted = false;
		};
	}, []);
	return (
		<div>
			{loading ? (
				<div>Loading...</div>
			) : (
				albumPhotos &&
				albumPhotos.map((album: IAlbumPhoto) => (
					<AlbumPhoto key={album.id} album={album} />
				))
			)}
		</div>
	);
};

export default AlbumPhotos;
