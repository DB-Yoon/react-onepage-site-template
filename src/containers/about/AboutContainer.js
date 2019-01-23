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
        aboutColExpOne      : `Juventus AC Milan Inter Milan Chelsea Manchester City 
                               Tottenham Manchester United Arsenal Liverpool Newcastle Leicester City Everton 
                               Watford Real Madrid Barcelona Atletico Madrid Valencia Dortmund Bayern Munich.`,
        aboutColExpTwo      : `Juventus AC Milan Inter Milan Chelsea Manchester City 
                               Tottenham Manchester United Arsenal Liverpool Newcastle Leicester City Everton 
                               Watford Real Madrid Barcelona Atletico Madrid Valencia Dortmund Bayern Munich.`,
        aboutExp            : `Juventus AC Milan Inter Milan Chelsea Manchester City 
                               Tottenham Manchester United Arsenal Liverpool Newcastle Leicester City Everton 
                               Watford Real Madrid Barcelona Atletico Madrid Valencia Dortmund Bayern Munich`                            

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