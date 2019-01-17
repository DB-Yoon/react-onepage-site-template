import React from 'react';

const AboutText = ({aboutTitleClass, AboutExp}) => (
    <div className={`${aboutTitleClass}`}>
    	<h1>ABOUT</h1>
    	<p>{`${AboutExp}`}</p>
    </div>
);

export default AboutText;