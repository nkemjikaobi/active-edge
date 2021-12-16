import React from 'react';
import { getArtistsAction } from 'Http/Redux/Actions/StudioActions';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Artist from 'Components/Artist/Artist';
import IArtists from 'dto/Studio/IArtists';

const Artists = () => {
	const dispatch = useDispatch();
	const artists: Array<IArtists> = useSelector(
		(state: any) => state.studio.artists
	);

	useEffect(() => {
		let mounted = true;
		dispatch(getArtistsAction());
		return () => {
			mounted = false;
		};
	}, []);
	return (
		<div>
			{artists &&
				artists.map((artist: IArtists) => <Artist artist={artist} key={artist.id} />)}
		</div>
	);
};

export default Artists;
