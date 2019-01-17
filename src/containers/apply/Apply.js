import React from 'react';

const Apply = ({children, applyClass, applyCenterClass}) => {
    return (
    	<div className={`${applyClass} ${applyCenterClass}`}>
			{children}
		</div>
    );
};

export default Apply;