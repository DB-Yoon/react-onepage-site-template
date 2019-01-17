import React, { Component } from 'react';
import Apply                from './Apply';
import ApplyText            from './ApplyText';
import { ColThree }         from 'components/column';
import { ApplyBtn }         from 'components/button';
import SecColImg_1          from 'images/sec3_col_1.png';
import SecColImg_2          from 'images/sec3_col_2.png';
import SecColImg_3          from 'images/sec3_col_3.png';
import Arrow                from 'images/sec3_col_arrow.png';

class ApplyContainer extends Component{
    static defaultProps = {
        applyClass       : 'apply',
        applyTitleClass  : 'apply-title',
        applyCenterClass : 'center'
    }

    render(){
        return(
            <Apply applyClass={this.props.applyClass} applyCenterClass={this.props.applyCenterClass}>
              <ApplyText applyTitleClass={this.props.applyTitleClass} />
                <ColThree
                  SecColOneImg={SecColImg_1} 
                  SecColTwoImg={SecColImg_2} 
                  SecColThreeImg={SecColImg_3}
                  SecColArrowImg={Arrow}
                />
                <ApplyBtn>Apply now</ApplyBtn>
            </Apply>

        );
    }
}

export default ApplyContainer;