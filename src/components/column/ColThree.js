import React from 'react';

const ColThree = ({SecColOneImg, SecColTwoImg, SecColThreeImg, SecColArrowImg}) => (
	<div className='col-three'>
		<div className='column'>
			<div className='column-step'>
				<h6>STEP 1</h6>
			</div>		
			<div className='column-img'>
				<img src={`${SecColOneImg}`} alt='이미지1' />
			</div>
			<div className='column-exp'>
				<p>Register</p>
			</div>
		</div>
		<div className='column column-arrow'>
			<div className='column-img'>
				<img src={`${SecColArrowImg}`} alt='화살표' />
			</div>
		</div>
		<div className='column'>
			<div className='column-step'>
				<h6>STEP 2</h6>
			</div>		
			<div className='column-img'>
				<img src={`${SecColTwoImg}`} alt='이미지2' />
			</div>
			<div className='column-exp'>
				<p>Check the date</p>
			</div>
		</div>
		<div className='column column-arrow'>
			<div className='column-img'>
				<img src={`${SecColArrowImg}`} alt='화살표' />
			</div>			
		</div>
		<div className='column'>
			<div className='column-step'>
				<h6>STEP 3</h6>
			</div>		
			<div className='column-img'>
				<img src={`${SecColThreeImg}`} alt='이미지3' />
			</div>
			<div className='column-exp'>
				<p>Take a cup of beer</p>
			</div>
		</div>
	</div>
);

export default ColThree;