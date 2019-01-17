import React from 'react';

const Ourstory = ({children, ourstoryClass, ourstoryCenterClass}) => {
    return (
    	<div className={`${ourstoryClass} ${ourstoryCenterClass}`}>
			{children}
		</div>
    );
};

export default Ourstory;