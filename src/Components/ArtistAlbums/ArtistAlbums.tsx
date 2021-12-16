import IAlbum from 'dto/Studio/IAlbum';
import React from 'react';
import { Link } from 'react-router-dom';

interface IArtistAlbums {
	album: IAlbum;
}
const ArtistAlbums: React.FunctionComponent<IArtistAlbums> = ({ album }) => {
	const { title, id } = album;
	return (
		<div className='cards card-body mb-3'>
			<div className='row'>
				<div className='col-md-9'>
					<p className='my-1'>Title: {title}</p>
				</div>
				<div className='col-md-3'>
					<Link to={`/album/${id}/photos`} className='btn btn-secondary'>
						View Album Photos
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ArtistAlbums;
