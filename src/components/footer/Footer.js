import React from 'react';

const Footer = ({children, footerClass}) => {
    return (
    	<div className={footerClass}>
			{children}
		</div>
    );
};

export default Footer;