import React from 'react';

const Header = ({children, headerClass}) => {
    return (
    	<div className={`${headerClass}`}>
			{children}
		</div>
    );
};

export default Header;