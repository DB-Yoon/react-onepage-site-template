import React from 'react';
import { Link } from 'react-router-dom';

const HeaderCustomers = ({headerCusMenuClass, onClick, onBlur}) => (
	<div className={headerCusMenuClass}>
		<ul>
			<li><Link to='#about' title='ABOUT' onClick={onClick} onBlur={onBlur}>ABOUT</Link></li>
			<li><Link to='#benefits' title='BENEFITS' onClick={onClick} onBlur={onBlur}>BENEFITS</Link></li>
			<li><Link to='#apply' title='APPLY' onClick={onClick} onBlur={onBlur}>APPLY</Link></li>
			<li><Link to='#ourstory' title='OURSTORY' onClick={onClick} onBlur={onBlur}>OUR STORY</Link></li>
	    </ul>
    </div>
);

export default HeaderCustomers;