import React from 'react';

const ApplyBtn = ({children, onClick}) => (
	<div className='btn-wrap'>
		<button onClick={onClick}>
			{children}
		</button>
	</div>
);

export default ApplyBtn;