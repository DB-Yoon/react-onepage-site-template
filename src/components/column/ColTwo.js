import React from 'react';

const ColTwo = ({children, SecColOneImg, SecColTwoImg, SecColThreeImg, SecColFourImg, SecColFiveImg}) => (
	<div className='col-two'>
		<div className='column'>
			<div className='column-img'>
				<img src={SecColOneImg} alt='이미지1' />
			</div>
			<div className='column-exp'>
				<p>Lorem ipsum dolor sit amet, 
				consectetur adipiscing elit, 
				sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
				Viverra suspendisse potenti nullam ac tortor. 
				A scelerisque purus semper eget duis at tellus at urna.
				</p>
			</div>
		</div>
		<div className='column'>
			<div className='column-img'>
				<img src={SecColTwoImg} alt='이미지2' />
			</div>			
			<div className='column-exp'>
				<p>Sit amet consectetur adipiscing elit pellentesque. 
				Vitae tempus quam pellentesque nec nam aliquam sem et tortor. 
				Et pharetra pharetra massa massa ultricies. 
				Sit amet consectetur adipiscing elit pellentesque. 
				Ac tortor vitae purus faucibus ornare. 
				</p>
			</div>
		</div>
	</div>
);

export default ColTwo;