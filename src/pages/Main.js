import React, { Component }    from 'react';
import { AboutContainer }      from 'containers/about';
import { BenefitsContainer }   from 'containers/benefits';
import { ApplyContainer }      from 'containers/apply';
import { OurstoryContainer }   from 'containers/ourstory';
import { MainSlider }          from 'components/slider';
import { SubscribeContainer }  from 'components/subscribe';

class main extends Component{
	componentDidMount(){
	}

	componentDidUpdate(){
	}

	componentWillUnmount(){
	}

    render(){
        return(
        	<div className='main'>
                <section className='front-slider-sec'>
                    <MainSlider />
                </section>
                <section className='front-about-sec' id='about'>
                    <AboutContainer /> 
                </section>
                <section className='front-benefits-sec' id='benefits'>
                    <BenefitsContainer />
                </section>
                <section className='front-apply-sec' id='apply'>
                    <ApplyContainer />
                </section>
                <section className='front-ourstory-sec' id='ourstory'>
                    <OurstoryContainer />
                </section>
                <section className='front-subscribe-sec'>
                    <SubscribeContainer />
                </section>
        	</div>
        );
    }
}

export default main;