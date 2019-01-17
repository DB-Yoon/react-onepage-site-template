import React from 'react';

const FooterText = ({footerTextClass, footerCenterClass, footerCopyrightClass, footerEmail, footerTel, footerFax}) => (
    <div className={`${footerTextClass} ${footerCenterClass}`}>
    	<div>
	    	<p>Sit amet consectetur adipiscing elit pellentesque.</p>
	    	<p>Vitae tempus quam pellentesque nec nam aliquam sem et tortor. Et pharetra pharetra massa massa ultricies.</p>
    	</div>
    	<div>
    		<p>
				<span>Tel.&nbsp;</span>
				<strong>{`${footerTel}`}</strong>
				<span>&nbsp;/&nbsp;</span>
				<span>Fax.&nbsp;</span> 
				<strong>{`${footerFax}`}</strong>
				<span>&nbsp;/&nbsp;</span>
				<span>E-mail.&nbsp;</span>
				<a href={`mailto:${footerEmail}`} title={`${footerEmail}`}><strong>{`${footerEmail}`}</strong></a>
			</p>
			<p className={`${footerCopyrightClass}`}>Copyright(c)2018 by <strong>slowalk</strong> All Rights Reserved.</p>
		</div>
    </div>
);

export default FooterText;