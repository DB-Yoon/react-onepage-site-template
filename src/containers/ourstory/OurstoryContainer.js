import React, { Component } from 'react';
import Ourstory             from './Ourstory';
import OurstoryText         from './OurstoryText';
import { PostThree }        from 'components/post';
import { SeeMoreBtn }       from 'components/button';
import secPostImg_1         from 'images/sec4_post_1.jpg';
import secPostImg_2         from 'images/sec4_post_2.jpg';
import secPostImg_3         from 'images/sec4_post_3.jpg';

class OurstoryContainer extends Component{
    static defaultProps = {
      ourstoryClass        : 'ourstory',
      ourstoryTitleClass   : 'ourstory-title',
      ourstoryCenterClass  : 'center',
      ourstoryPostExpOne   : `Juventus AC Milan Inter Milan Chelsea Manchester City 
                              Tottenham Manchester United Arsenal Liverpool Newcastle Leicester City Everton 
                              Watford Real Madrid Barcelona Atletico Madrid Valencia Dortmund Bayern Munich.`,
      ourstoryPostExpTwo   : `Juventus AC Milan Inter Milan Chelsea Manchester City 
                              Tottenham Manchester United Arsenal Liverpool Newcastle Leicester City Everton 
                              Watford Real Madrid Barcelona Atletico Madrid Valencia Dortmund Bayern Munich.`,
      ourstoryPostExpThree : `Juventus AC Milan Inter Milan Chelsea Manchester City 
                              Tottenham Manchester United Arsenal Liverpool Newcastle Leicester City Everton 
                              Watford Real Madrid Barcelona Atletico Madrid Valencia Dortmund Bayern Munich.`
    }

    render(){
        return(
            <Ourstory ourstoryClass={this.props.ourstoryClass} ourstoryCenterClass={this.props.ourstoryCenterClass}>
              <OurstoryText ourstoryTitleClass={this.props.ourstoryTitleClass} />
                <PostThree
                  SecPostOneImg   = {secPostImg_1} 
                  SecPostTwoImg   = {secPostImg_2} 
                  SecPostThreeImg = {secPostImg_3}
                  PostExpOne      = {this.props.ourstoryPostExpOne}
                  PostExpTwo      = {this.props.ourstoryPostExpTwo}
                  PostExpThree    = {this.props.ourstoryPostExpThree}
                />
                <SeeMoreBtn>See more</SeeMoreBtn>
            </Ourstory>

        );
    }
}

export default OurstoryContainer;