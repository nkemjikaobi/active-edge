import { composeClasses } from 'Libs/utils/utils';
import React, { Fragment } from 'react';
import styles from './BasePageLayout.module.scss';

interface IBasePageLayout {
	children: any;
}
const BasePageLayout: React.FunctionComponent<IBasePageLayout> = ({
	children,
}) => {
	return (
		<section className={composeClasses(styles.basePageLayout, 'container')}>
			<h1>Chocolate City Studios</h1>
			<main className={styles.children}>{children}</main>
		</section>
	);
};

BasePageLayout.defaultProps = {
	children: <Fragment />,
};

export default BasePageLayout;
