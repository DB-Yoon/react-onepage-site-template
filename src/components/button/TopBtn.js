import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class TopBtn extends Component{
  constructor(){
    super();

    this.state = {
        intervalId: 0
    };
  }
  
  scrollStep = () => {
    if (window.pageYOffset === 0) {
        clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }
  
  scrollToTop = () => {
    let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
    this.setState({ intervalId: intervalId });
  }
  
  render(){
    return(
      <div className='scroll-wrap'>
        <button title='BackToTop' className='scroll' onClick={()=>{this.scrollToTop();}}>
          <span className='arrow-up'>
          	<FontAwesomeIcon icon={['fas', 'angle-up']} size='1x' fixedWidth />
          </span>
        </button>
      </div>
    );
  }
}

export default TopBtn;