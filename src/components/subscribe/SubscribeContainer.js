import React, { Component } from 'react';
import Subscribe            from './Subscribe';
import SubscribeText        from './SubscribeText';
import { InputWithLabel }   from 'components/input';
import { SubscribeBtn }     from 'components/button';

class SubscribeContainer extends Component{
  static defaultProps = {
      subscribeClass       : 'subscribe',
      subscribeTitleClass  : 'subscribe-title',
      subscribeCenterClass : 'center'
  }

  render(){
      return(
          <Subscribe 
            subscribeClass={this.props.subscribeClass} 
            subscribeCenterClass={this.props.subscribeCenterClass}
          >
            <SubscribeText subscribeTitleClass={this.props.subscribeTitleClass} />
            <div className='subscribe-action'>
              <InputWithLabel name='email' placeholder='Email Address' type='text' autoComplete='off' />
              <SubscribeBtn>Subscribe</SubscribeBtn>
            </div>
          </Subscribe>

      );
  }
}

export default SubscribeContainer;