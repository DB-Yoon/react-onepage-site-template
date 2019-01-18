import React from 'react';
import { Link } from 'react-router-dom';

const HeaderCustomers = ({headerCusMenuClass, onClick}) => (
	<div className={`${headerCusMenuClass}`}>
		<ul>
			<li><Link to='#about' title='ABOUT' onClick={onClick}>ABOUT</Link></li>
			<li><Link to='#benefits' title='BENEFITS' onClick={onClick}>BENEFITS</Link></li>
			<li><Link to='#apply' title='APPLY' onClick={onClick}>APPLY</Link></li>
			<li><Link to='#ourstory' title='OURSTORY' onClick={onClick}>OUR STORY</Link></li>
	    </ul>
    </div>
);

export default HeaderCustomers;