import React, { Component } from 'react';
import Footer               from './Footer';
import FooterText           from './FooterText';

class FooterContainer extends Component{
    static defaultProps = {
        footerClass          : 'footer',
        footerTextClass      : 'footer-text',
        footerCenterClass    : 'center',
        footerCopyrightClass : 'footer-copyright',
        footerEmail          : 'hello@slowalk.co.kr',
        footerFax            : '+82 2 733 1040',
        footerTel            : '+82 2 733 1010'
    }

    render(){
        return(
            <Footer footerClass={this.props.footerClass}>
               	<FooterText 
               		footerTextClass={this.props.footerTextClass} 
               		footerCenterClass={this.props.footerCenterClass} 
               		footerCopyrightClass={this.props.footerCopyrightClass} 
                  footerEmail={this.props.footerEmail}
                  footerFax={this.props.footerFax}
                  footerTel={this.props.footerTel}
               	/>
            </Footer>
        );
    }
}

export default FooterContainer;