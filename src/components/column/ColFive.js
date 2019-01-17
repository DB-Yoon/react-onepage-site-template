import React from 'react';

const ColFive = ({SecColOneImg, SecColTwoImg, SecColThreeImg, SecColFourImg, SecColFiveImg}) => (
	<div className='col-five'>
		<div className='column'>
			<div className='column-img'>
				<img src={`${SecColOneImg}`} alt='이미지1' />
			</div>
			<p className='column-line'></p>
			<div className='column-title'>
				<h6>LOREM IPSUM</h6>
			</div>			
			<div className='column-exp'>
				<p>Lorem ipsum dolor sit amet, 
				consectetur adipiscing elit, 
				sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
			</div>
		</div>
		<div className='column'>
			<div className='column-img'>
				<img src={`${SecColTwoImg}`} alt='이미지2' />
			</div>
			<p className='column-line'></p>
			<div className='column-title'>
				<h6>PELENTESQUE HABITANT</h6>
			</div>			
			<div className='column-exp'>
				<p>Pellentesque habitant morbi tristique senectus et. 
				Condimentum vitae sapien pellentesque habitant.</p>
			</div>
		</div>
		<div className='column'>
			<div className='column-img'>
				<img src={`${SecColThreeImg}`} alt='이미지3' />
			</div>
			<p className='column-line'></p>
			<div className='column-title'>
				<h6>DUIS AT CONSECTETUR</h6>
			</div>			
			<div className='column-exp'>
				<p>Duis at consectetur lorem donec massa. 
				Phasellus egestas tellus rutrum tellus pellentesque eu. 
				Cursus risus at ultrices mi tempus imperdiet nulla malesuada. </p>
			</div>
		</div>
		<div className='column'>
			<div className='column-img'>
				<img src={`${SecColFourImg}`} alt='이미지4' />
			</div>
			<p className='column-line'></p>
			<div className='column-title'>
				<h6>CONQUE QUISQUE</h6>
			</div>			
			<div className='column-exp'>
				<p>Pellentesque id nibh tortor id aliquet. 
				Congue quisque egestas diam in. Metus vulputate eu scelerisque felis imperdiet proin fermentum.</p>
			</div>
		</div>
		<div className='column'>
			<div className='column-img'>
				<img src={`${SecColFiveImg}`} alt='이미지5' />
			</div>
			<p className='column-line'></p>
			<div className='column-title'>
				<h6>PULVINAR PELLENTESQUE</h6>
			</div>			
			<div className='column-exp'>
				<p>Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada.</p>
			</div>
		</div>
	</div>
);

export default ColFive;