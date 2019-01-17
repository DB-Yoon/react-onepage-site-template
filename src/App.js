import React, { Component } from 'react';
import { Route }            from 'react-router-dom';
import { Main }             from 'pages';
import HeaderContainer      from 'components/header/HeaderContainer';
import FooterContainer      from 'components/footer/FooterContainer';

class App extends Component {
  constructor(props){
      super(props);
  
      this.state = {
          oft : 0
      }        
  }
    
  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
  }

  componentDidUpdate(){
      //window.scrollTo(0,0);
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (e) => {
    const headerSelect = document.querySelector('.header');
    let   offsetTop    = this.front.getBoundingClientRect().top;
    
    this.setState({ oft:offsetTop });

    if(0 > this.state.oft){
      headerSelect.classList.add('header-full');
      headerSelect.classList.remove('header-opacity');
    }else{
      headerSelect.classList.add('header-opacity');
      headerSelect.classList.remove('header-full');
    }
  }

  render(){
    return(
      <div className='front page front-page' ref={(el) => this.front = el }>
            <HeaderContainer />
            <div className='container'>
              <Route exact path='/' component={Main} />
            </div>
          <FooterContainer />
      </div>
    );
  }
}

export default App;
