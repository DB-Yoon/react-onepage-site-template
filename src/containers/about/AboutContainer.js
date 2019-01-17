import React, { Component } from 'react';
import About                from './About';
import AboutText            from './AboutText';
import { ColTwo }           from 'components/column';
import { ApplyBtn }         from 'components/button';
import SecColImg_1          from 'images/sec1_col_1.png';
import SecColImg_2          from 'images/sec1_col_2.png';

class AboutContainer extends Component{
    static defaultProps = {
        aboutClass       : 'about',
        aboutTitleClass  : 'about-title',
        aboutCenterClass : 'center',
        aboutColExpOne      : `Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Viverra suspendisse potenti nullam ac tortor. 
                            A scelerisque purus semper eget duis at tellus at urna.`,
        aboutColExpTwo      : `Sit amet consectetur adipiscing elit pellentesque. 
                            Vitae tempus quam pellentesque nec nam aliquam sem et tortor. 
                            Et pharetra pharetra massa massa ultricies. 
                            Sit amet consectetur adipiscing elit pellentesque. 
                            Ac tortor vitae purus faucibus ornare. `,
        aboutExp            : `Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. 
                            Leo vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. 
                            Libero enim sed faucibus turpis in eu mi. 
                            Consequat ac felis donec et odio pellentesque diam volutpat.`                            

    }

    render(){
        return(
            <About aboutClass={this.props.aboutClass} aboutCenterClass={this.props.aboutCenterClass}>
              <AboutText aboutTitleClass={this.props.aboutTitleClass} AboutExp={this.props.aboutExp} />
                <ColTwo
                  SecColOneImg={SecColImg_1} 
                  SecColTwoImg={SecColImg_2}
                  ColExpOne={this.props.aboutColExpOne}
                  ColExpTwo={this.props.aboutColExpTwo}
                />
                <ApplyBtn>Apply now</ApplyBtn>
            </About>

        );
    }
}

export default AboutContainer;