import React, { Component } from 'react';
import Benefits             from './Benefits';
import BenefitsText         from './BenefitsText';
import { ColFive }          from 'components/column';
//import { SubscribeBtn }     from 'components/button';
import SecColImg_1          from 'images/sec2_col_1.png';
import SecColImg_2          from 'images/sec2_col_2.png';
import SecColImg_3          from 'images/sec2_col_3.png';
import SecColImg_4          from 'images/sec2_col_4.png';
import SecColImg_5          from 'images/sec2_col_5.png';

class BenefitsContainer extends Component{
    static defaultProps = {
        benefitsClass       : `benefits`,
        benefitsTitleClass  : `benefits-title`,
        benefitsCenterClass : `center`,
        benefitsColExpOne   : `Juventus AC Milan Inter Milan Chelsea Manchester City 
                               Tottenham Manchester United Arsenal Liverpool Newcastle Leicester City Everton 
                               Watford Real Madrid Barcelona Atletico Madrid Valencia Dortmund Bayern Munich.`,
        benefitsColExpTwo   : `Juventus AC Milan Inter Milan Chelsea Manchester City 
                               Tottenham Manchester United Arsenal Liverpool Newcastle Leicester City Everton 
                               Watford Real Madrid Barcelona Atletico Madrid Valencia Dortmund Bayern Munich.`,
        benefitsColExpThree : `Juventus AC Milan Inter Milan Chelsea Manchester City 
                               Tottenham Manchester United Arsenal Liverpool Newcastle Leicester City Everton 
                               Watford Real Madrid Barcelona Atletico Madrid Valencia Dortmund Bayern Munich.`,
        benefitsColExpFour  : `Juventus AC Milan Inter Milan Chelsea Manchester City 
                               Tottenham Manchester United Arsenal Liverpool Newcastle Leicester City Everton 
                               Watford Real Madrid Barcelona Atletico Madrid Valencia Dortmund Bayern Munich.`,
        benefitsColExpFive  : `Juventus AC Milan Inter Milan Chelsea Manchester City 
                               Tottenham Manchester United Arsenal Liverpool Newcastle Leicester City Everton 
                               Watford Real Madrid Barcelona Atletico Madrid Valencia Dortmund Bayern Munich.`
    }

    render(){
        return(
            <Benefits benefitsClass={this.props.benefitsClass} benefitsCenterClass={this.props.benefitsCenterClass}>
              <BenefitsText benefitsTitleClass={this.props.benefitsTitleClass} />
                <ColFive 
                  SecColOneImg={SecColImg_1} 
                  SecColTwoImg={SecColImg_2} 
                  SecColThreeImg={SecColImg_3} 
                  SecColFourImg={SecColImg_4} 
                  SecColFiveImg={SecColImg_5}
                  ColExpOne={this.props.benefitsColExpOne}
                  ColExpTwo={this.props.benefitsColExpTwo}
                  ColExpThree={this.props.benefitsColExpThree}
                  ColExpFour={this.props.benefitsColExpFour}
                  ColExpFive={this.props.benefitsColExpFive}

                />
            </Benefits>

        );
    }
}

export default BenefitsContainer;