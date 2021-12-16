import IAlbumPhoto from 'dto/Studio/IAlbumPhoto';
import React from 'react';

interface IAlbumPhotoC {
	album: IAlbumPhoto;
}
const AlbumPhoto: React.FunctionComponent<IAlbumPhotoC> = ({ album }) => {
	const { title, url } = album;
	return (
		<div className='cards card-body mb-3'>
			<div className='row'>
				<div className='col-md-12'>
					<p className='my-1'>Title: {title}</p>
					<img src={url} alt='avatar' width='100' />
				</div>
			</div>
		</div>
	);
};

export default AlbumPhoto;
