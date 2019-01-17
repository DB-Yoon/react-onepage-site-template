import React from 'react';

const PostThree = ({SecPostOneImg, SecPostTwoImg, SecPostThreeImg}) => (
	<div className='post-three'>
		<div className='post'>
				<div className='post-thumbnail thumbnail'>
					<div className='scale'>
						<a href='http://luckyd.be:3000' title='thumbnail'>
							<img src={`${SecPostOneImg}`} alt='포스트 이미지1' />
						</a>
					</div>
				</div>
				<div className='post-exp'>
					<p>Lorem ipsum dolor sit amet, 
					consectetur adipiscing elit, 
					sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
					Ut enim ad minim veniam.
					</p>
				</div>
				<div className='post-link'>
					<a href='http://luckyd.be:3000/' title='Lorem ipsum'><p>Lorem ipsum</p></a>
				</div>
		</div>
		<div className='post'>		
			<div className='post-thumbnail thumbnail'>
				<div className='scale'>
					<a href='http://luckyd.be:3000/' title='thumbnail'>
						<img src={`${SecPostTwoImg}`} alt='포스트 이미지2' />
					</a>
				</div>
			</div>
			<div className='post-exp'>
				<p>Bacon ipsum dolor amet short ribs brisket venison rump drumstick 
				pig sausage prosciutto chicken spare ribs salami picanha doner. 
				</p>
			</div>
			<div className='post-link'>
				<a href='http://luckyd.be:3000/' title='Bacon ipsum'><p>Bacon ipsum</p></a>
			</div>				
		</div>
		<div className='post'>
			<div className='post-thumbnail thumbnail'>
				<div className='scale'>
					<a href='http://luckyd.be:3000/' title='thumbnail'>
						<img src={`${SecPostThreeImg}`} alt='포스트 이미지3' />
					</a>
				</div>
			</div>
			<div className='post-exp'>
				<p>Cupcake ipsum dolor. 
				Sit amet marshmallow topping cheesecake muffin. 
				Halvah croissant candy canes bonbon candy. 
				</p>
			</div>
			<div className='post-link'>
				<a href='http://luckyd.be:3000/' title='Cupcake ipsum'><p>Cupcake ipsum</p></a>
			</div>				
		</div>
	</div>
);

export default PostThree;