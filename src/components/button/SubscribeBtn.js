import React from 'react';

const SubscribeBtn = ({children, onClick}) => (
	<div className='btn-wrap'>
		<button onClick={onClick}>
			{children}
		</button>
	</div>
);

export default SubscribeBtn;