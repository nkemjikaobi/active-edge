import TweetItem from 'Components/TweetItem/TweetItem';
import ITweet from 'dto/Studio/ITweet';
import {
	getTweetsAction,
	setLoadingAction,
} from 'Http/Redux/Actions/StudioActions';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Tweets = () => {
	const dispatch = useDispatch();
	const tweets = useSelector((state: any) => state.studio.tweets);
	const loading = useSelector((state: any) => state.studio.loading);
	useEffect(() => {
		let mounted = true;
		if (mounted) {
			dispatch(setLoadingAction());
			dispatch(getTweetsAction());
		}

		return () => {
			mounted = false;
        };
        //eslint-disable-next-line
	}, []);
	return (
		<div>
			{loading ? (
				<div>Loading...</div>
			) : (
				tweets && tweets.map((tweet: ITweet) => (
					<TweetItem key={tweet.id} tweet={tweet} />
				))
			)}
		</div>
	);
};

export default Tweets;
