import ITweet from 'dto/Studio/ITweet';
import React from 'react';

interface ITweetItem {
	tweet: ITweet;
}
const TweetItem: React.FunctionComponent<ITweetItem> = ({ tweet }) => {
	const { email, name, body } = tweet;
	return (
		<div className='cards card-body mb-3'>
			<div className='row'>
				<div className='col-md-9'>
					<h4 className='my-1'>{name}</h4>
					<p className='my-1'>Email: {email}</p>
					<p className='my-1'>Body: {body}</p>
				</div>
			</div>
		</div>
	);
};

export default TweetItem;
