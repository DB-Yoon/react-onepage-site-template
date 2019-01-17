import React from 'react';

const SeeMoreBtn = ({children, onClick}) => (
	<div className='btn-wrap'>
		<button onClick={onClick}>
			{children}
		</button>
	</div>
);

export default SeeMoreBtn;