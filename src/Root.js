import React                    from 'react';
import { BrowserRouter }        from 'react-router-dom';
import App                      from './App';
import Common                   from './styles/Common.css';

const Root = () => {
    return (
		<BrowserRouter>
			<App />
		</BrowserRouter>
    );
};

export default Root;