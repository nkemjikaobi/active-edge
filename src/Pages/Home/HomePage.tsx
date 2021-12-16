import Artists from 'Components/Artists/Artists';
import BasePageLayout from 'Components/BasePageLayout/BasePageLayout';
import { Link } from 'react-router-dom';

const HomePage = () => {
	return (
		<BasePageLayout>
			<Link to='/tweets' className='btn btn-primary'>
				View Tweets
			</Link>
			<Artists />
		</BasePageLayout>
	);
};

export default HomePage;
