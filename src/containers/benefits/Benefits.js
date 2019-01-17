import React from 'react';

const Benefits = ({children, benefitsClass, benefitsCenterClass}) => {
    return (
    	<div className={`${benefitsClass} ${benefitsCenterClass}`}>
			{children}
		</div>
    );
};

export default Benefits;