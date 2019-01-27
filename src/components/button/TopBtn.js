import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class TopBtn extends Component{
  constructor(){
    super();

    this.state = {
        intervalId    : 0,
        btnOpacity    : 0,
        btnVisibility : 'hidden'
    };
  }

  componentDidMount(){
      // 외부 라이브러리 연동: D3, masonry, etc
      // 컴포넌트에서 필요한 데이터 요청: Ajax, GraphQL, etc
      // DOM 에 관련된 작업: 스크롤 설정, 크기 읽어오기 등    
      window.addEventListener('scroll', this.scrollBtnStyle);
  }

  componentDidUpdate() {
    //window.scrollTo(0,0);
  }

  componentWillUnmount() {
      // 이벤트, setTimeout, 외부 라이브러리 인스턴스 제거
      window.removeEventListener('scroll', this.scrollBtnStyle);
  }
  
  scrollBtnStyle = () => {
    if (window.pageYOffset === 0){
      this.setState({ 
        btnOpacity : 0,
        btnVisibility : 'hidden'
      });
    }else{
      this.setState({ 
        btnOpacity : 1,
        btnVisibility : 'visible'
      });
    }
  } 
   
  scrollStep = () => {
    if (window.pageYOffset === 0){
        clearInterval(this.state.intervalId);
    }else{
      window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
    }
  }
  
  scrollToTop = () => {
    let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
    this.setState({ intervalId: intervalId });
  }
  
  render(){
    return(
      <div className='scroll-wrap' style={{ opacity:this.state.btnOpacity, visibility:this.state.btnVisibility }}>
        <button title='BackToTop' className='scroll-btn' onClick={()=>{this.scrollToTop();}}>
          <span className='arrow-up'>
          	<FontAwesomeIcon icon={['fas', 'angle-up']} size='1x' fixedWidth />
          </span>
        </button>
      </div>
    );
  }
}

export default TopBtn;