import 						             'react-app-polyfill/ie9'; // For IE 9-11 support
import                         './polyfills';
import React              from 'react';
import ReactDOM           from 'react-dom';
import Root               from './Root';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
//registerServiceWorker();
