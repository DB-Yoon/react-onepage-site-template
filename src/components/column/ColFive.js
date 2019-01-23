import React from 'react';

const ColFive = ({SecColOneImg, SecColTwoImg, SecColThreeImg, SecColFourImg, SecColFiveImg, ColExpOne, ColExpTwo, ColExpThree, ColExpFour, ColExpFive}) => (
	<div className='col-five'>
		<div className='column'>
			<div className='column-img'>
				<img src={`${SecColOneImg}`} alt='이미지1' />
			</div>
			<p className='column-line'></p>
			<div className='column-title'>
				<h6>Premier League</h6>
			</div>			
			<div className='column-exp'>
				<p>{`${ColExpOne}`}</p>
			</div>
		</div>
		<div className='column'>
			<div className='column-img'>
				<img src={`${SecColTwoImg}`} alt='이미지2' />
			</div>
			<p className='column-line'></p>
			<div className='column-title'>
				<h6>Premier League</h6>
			</div>			
			<div className='column-exp'>
				<p>{`${ColExpTwo}`}</p>
			</div>
		</div>
		<div className='column'>
			<div className='column-img'>
				<img src={`${SecColThreeImg}`} alt='이미지3' />
			</div>
			<p className='column-line'></p>
			<div className='column-title'>
				<h6>Premier League</h6>
			</div>			
			<div className='column-exp'>
				<p>{`${ColExpThree}`}</p>
			</div>
		</div>
		<div className='column'>
			<div className='column-img'>
				<img src={`${SecColFourImg}`} alt='이미지4' />
			</div>
			<p className='column-line'></p>
			<div className='column-title'>
				<h6>Premier League</h6>
			</div>			
			<div className='column-exp'>
				<p>{`${ColExpFour}`}</p>
			</div>
		</div>
		<div className='column'>
			<div className='column-img'>
				<img src={`${SecColFiveImg}`} alt='이미지5' />
			</div>
			<p className='column-line'></p>
			<div className='column-title'>
				<h6>Premier League</h6>
			</div>			
			<div className='column-exp'>
				<p>{`${ColExpFive}`}</p>
			</div>
		</div>
	</div>
);

export default ColFive;