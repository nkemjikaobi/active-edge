import React, { Fragment } from 'react';
import styles from './BasePageLayout.module.scss';

interface IBasePageLayout {
	children: any;
	showNavigation?: boolean;
	showFooter?: boolean;
}
const BasePageLayout: React.FunctionComponent<IBasePageLayout> = ({
	children,
	showNavigation,
	showFooter,
}) => {
	return (
		<section className={styles.basePageLayout}>
			{showNavigation && (
				<>
					<div className={styles.tabletAndAboveOnly}>
						{/* <DesktopNavigation /> */}
						desktop nav
					</div>
					<div className={styles.mobileOnly}>
						{/* <MobileNavigation /> */}
						mobile nav
					</div>
				</>
			)}
			<main className={styles.children}>{children}</main>
			{showFooter && (
				<>
					<div className={styles.tabletAndAboveOnly}>
						{/* <DesktopFooter /> */}Desktopfooter
					</div>
					<div className={styles.mobileOnly}>
						{/* <MobileFooter /> */}mobilefooter
					</div>
				</>
			)}
		</section>
	);
};

BasePageLayout.defaultProps = {
	showFooter: true,
	showNavigation: true,
	children: <Fragment />,
};

export default BasePageLayout;
