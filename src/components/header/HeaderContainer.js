import React, { Component } from 'react';
import Header               from './Header';
import HeaderLogo           from './HeaderLogo';
import HeaderCustomers      from './HeaderCustomers';
import HeaderLogoImg        from 'images/logo.png';

let timer = null;
class HeaderContainer extends Component{
    constructor(props){
        super(props);
    }
    
    static defaultProps = {
        headerClass        : 'header',
        headerLogoClass    : 'header-logo',
        headerCusMenuClass : 'header-cus-menu'
    }

    componentDidMount(){
    // 외부 라이브러리 연동: D3, masonry, etc
    // 컴포넌트에서 필요한 데이터 요청: Ajax, GraphQL, etc
    // DOM 에 관련된 작업: 스크롤 설정, 크기 읽어오기 등    
    
    }

    componentDidUpdate() {
      //window.scrollTo(0,0);
    }

    componentWillUnmount() {
        // 이벤트, setTimeout, 외부 라이브러리 인스턴스 제거
    }

    handleActiveAdd = (e) =>{
        return e.target.classList.add('active');
    }
    
    handleClickReset = (e) => {
        return e.target.classList.remove('active');
    }

    handleOnePageScroll = (obj) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            obj.scrollIntoView({ 
                behavior : 'smooth', 
                block    : 'start' 
            });
        }, 200);
    }

    handleClick = (e) => {
        let thisHref = e.target.getAttribute('href');
            thisHref = thisHref.replace('/#','');
        
        const moveId = document.getElementById(thisHref);

        this.handleOnePageScroll(moveId);
        this.handleActiveAdd(e);
    }
    render(){
        const { handleClick, handleClickReset } = this;

        return(
            <Header headerClass={this.props.headerClass}>
                <HeaderLogo headerLogoClass={this.props.headerLogoClass} HeaderLogoImport={HeaderLogoImg} />
                <HeaderCustomers headerCusMenuClass={this.props.headerCusMenuClass} onClick={handleClick} onBlur={handleClickReset} />
            </Header>
        );
    }
}

export default HeaderContainer;