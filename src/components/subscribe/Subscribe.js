import React from 'react';

const Subscribe = ({children, subscribeCenterClass, subscribeClass}) => {
    return (
    	<div className={`${subscribeClass} ${subscribeCenterClass}`}>
			{children}
		</div>
    );
};

export default Subscribe;