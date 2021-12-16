import BasePageLayout from 'Components/BasePageLayout/BasePageLayout';
import { useParams } from 'react-router-dom';

const AlbumPage = () => {
	const { id }: any = useParams();
	return <BasePageLayout>album {id}</BasePageLayout>;
};

export default AlbumPage;
