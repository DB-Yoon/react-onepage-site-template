import React from 'react';

const PostThree = ({SecPostOneImg, SecPostTwoImg, SecPostThreeImg, PostExpOne, PostExpTwo, PostExpThree}) => (
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
					<p>{`${PostExpOne}`}</p>
				</div>
				<div className='post-link'>
					<a href='http://luckyd.be:3000/' title='Link'><p>Link</p></a>
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
				<p>{`${PostExpTwo}`}</p>
			</div>
			<div className='post-link'>
				<a href='http://luckyd.be:3000/' title='Link'><p>Link</p></a>
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
				<p>{`${PostExpThree}`}</p>
			</div>
			<div className='post-link'>
				<a href='http://luckyd.be:3000/' title='Link'><p>Link</p></a>
			</div>				
		</div>
	</div>
);

export default PostThree;