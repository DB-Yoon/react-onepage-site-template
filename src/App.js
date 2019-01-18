import React, { Component }  from 'react';
import { Route }             from 'react-router-dom';
import { Main }              from 'pages';
import HeaderContainer       from 'components/header/HeaderContainer';
import FooterContainer       from 'components/footer/FooterContainer';
import Common                from './styles/Common.css';
import { library }           from '@fortawesome/fontawesome-svg-core';
//import { FontAwesomeIcon }   from '@fortawesome/react-fontawesome';
import { faAngleUp }         from '@fortawesome/free-solid-svg-icons';

library.add(faAngleUp);

class App extends Component {
  constructor(props){
      super(props);
  }
    
  componentDidMount(){

  }

  componentDidUpdate(){
      //window.scrollTo(0,0);
  }

  componentWillUnmount(){

  }
  render(){
    return(
      <div id='front' className='front page front-page' ref={(el) => this.front = el }>
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
