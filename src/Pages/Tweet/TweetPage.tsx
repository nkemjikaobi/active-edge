import BasePageLayout from 'Components/BasePageLayout/BasePageLayout';
import Tweets from 'Components/Tweets/Tweets';
import { Link } from 'react-router-dom';

const TweetPage = () => {
	return (
		<BasePageLayout>
			<Link to='/' className='btn btn-primary'>
				Home
			</Link>
			<Tweets />
		</BasePageLayout>
	);
};

export default TweetPage;
