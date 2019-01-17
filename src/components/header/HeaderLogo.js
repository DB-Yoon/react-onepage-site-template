import React    from 'react';
import { Link } from 'react-router-dom';

const HeaderLogo = ({headerLogoClass, HeaderLogoImport}) => (
	<div className={headerLogoClass}>
		<Link to='/' title='로고'>
			<img src={HeaderLogoImport} alt='로고' />
		</Link>
	</div>
);

export default HeaderLogo;