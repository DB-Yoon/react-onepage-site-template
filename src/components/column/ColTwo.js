import React from 'react';

const ColTwo = ({SecColOneImg, SecColTwoImg, ColExpOne, ColExpTwo}) => (
	<div className='col-two'>
		<div className='column'>
			<div className='column-img'>
				<img src={`${SecColOneImg}`} alt='이미지1' />
			</div>
			<div className='column-exp'>
				<p>{`${ColExpOne}`}</p>
			</div>
		</div>
		<div className='column'>
			<div className='column-img'>
				<img src={`${SecColTwoImg}`} alt='이미지2' />
			</div>			
			<div className='column-exp'>
				<p>{`${ColExpTwo}`}</p>
			</div>
		</div>
	</div>
);

export default ColTwo;