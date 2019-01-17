import React, { Component } from 'react';
import Footer               from './Footer';
import FooterText           from './FooterText';

class FooterContainer extends Component{
    static defaultProps = {
        footerClass          : 'footer',
        footerTextClass      : 'footer-text',
        footerCenterClass    : 'center',
        footerCopyrightClass : 'footer-copyright'
    }

    render(){
        return(
            <Footer footerClass={this.props.footerClass}>
               	<FooterText 
               		footerTextClass={this.props.footerTextClass} 
               		footerCenterClass={this.props.footerCenterClass} 
               		footerCopyrightClass={this.props.footerCopyrightClass} 
               	/>
            </Footer>
        );
    }
}

export default FooterContainer;