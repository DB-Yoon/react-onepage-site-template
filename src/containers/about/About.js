import React from 'react';

const About = ({children, aboutClass, aboutCenterClass}) => {
    return (
    	<div className={`${aboutClass} ${aboutCenterClass}`}>
			{children}
		</div>
    );
};

export default About;