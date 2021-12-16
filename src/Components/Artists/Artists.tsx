import React from 'react';
import {
	getArtistsAction,
	setLoadingAction,
} from 'Http/Redux/Actions/StudioActions';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Artist from 'Components/Artist/Artist';
import IArtists from 'dto/Studio/IArtists';
import ArtistsSkeleton from 'Skeletons/ArtistsSkeleton';
import { range } from 'lodash';

const Artists = () => {
	const dispatch = useDispatch();
	const artists: Array<IArtists> = useSelector(
		(state: any) => state.studio.artists
	);
	const loading: Array<IArtists> = useSelector(
		(state: any) => state.studio.loading
	);

	useEffect(() => {
		let mounted = true;
		if (mounted) {
			dispatch(setLoadingAction());
			dispatch(getArtistsAction());
		}

		return () => {
			mounted = false;
		};
	}, []);
	return (
		<div>
			{loading
				? range(10).map((index: number) => <ArtistsSkeleton key={index} />)
				: artists &&
				  artists.map((artist: IArtists, index: number) => (
						<Artist key={artist.id} artist={artist} />
				  ))}
		</div>
	);
};

export default Artists;
