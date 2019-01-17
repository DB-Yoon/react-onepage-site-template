import React from 'react';

const FooterText = ({footerTextClass, footerCenterClass, footerCopyrightClass}) => (
    <div className={`${footerTextClass} ${footerCenterClass}`}>
    	<div>
	    	<p>Sit amet consectetur adipiscing elit pellentesque.</p>
	    	<p>Vitae tempus quam pellentesque nec nam aliquam sem et tortor. Et pharetra pharetra massa massa ultricies.</p>
    	</div>
    	<div>
    		<p>
				<span>Tel.&nbsp;</span>
				<strong>+82 2 733 1010</strong>
				<span>&nbsp;/&nbsp;</span>
				<span>Fax.&nbsp;</span> 
				<strong>+82 2 733 1040</strong>
				<span>&nbsp;/&nbsp;</span>
				<span>E-mail.&nbsp;</span>
				<a href="mailto:hello@slowalk.co.kr" title='hello@slowalk.co.kr'><strong>hello@slowalk.co.kr</strong></a>
			</p>
			<p className={footerCopyrightClass}>Copyright(c)2018 by <strong>slowalk</strong> All Rights Reserved.</p>
		</div>
    </div>
);

export default FooterText;