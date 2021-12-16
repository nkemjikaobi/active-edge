import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { Link } from 'react-router-dom';
import 'react-loading-skeleton/dist/skeleton.css';

const ArtistsSkeleton = () => {
	return (
		<SkeletonTheme baseColor='#202020' highlightColor='#444'>
			<div className='cards card-body mb-3'>
				<div className='row'>
					<div className='col-md-9'>
						<h4 className='my-3'>
							<Skeleton width={300} />
						</h4>
						<p className='my-3'>
							<Skeleton width={150} />
						</p>

						<p className='my-3'>
							<Skeleton width={150} />
						</p>
						<p className='my-3'>
							<Skeleton width={150} />
						</p>
					</div>
					<div className='col-md-3'>
						<Link to={''} className='btn btn-secondary'>
							<Skeleton width={100} />
						</Link>
					</div>
				</div>
			</div>
		</SkeletonTheme>
	);
};

export default ArtistsSkeleton;
