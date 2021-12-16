import IArtists from 'dto/Studio/IArtists';
import React from 'react';
import { Link } from 'react-router-dom';

interface IArtist {
	artist: IArtists;
}
const Artist: React.FunctionComponent<IArtist> = ({ artist }) => {
	const { name, id, company, username, email } = artist;
	return (
		<div className='cards card-body mb-3'>
			<div className='row'>
				<div className='col-md-9'>
					<h4 className='my-1'>{name}</h4>
					<p className='my-1'>Stage name: {username}</p>
					{/* I didnt destructure to prevent conflict
					of name since name already exists */}
					<p className='my-1'>Signed to: {company.name}</p>
					<p className='my-1'>Contact: {email}</p>
				</div>
				<div className='col-md-3'>
					<Link to={`/artist/${id}`} className='btn btn-secondary'>
						Artist Details
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Artist;
