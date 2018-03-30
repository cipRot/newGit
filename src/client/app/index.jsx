import React from 'react';
import {render} from 'react-dom'; 
import AwesomeComponent from './AwesomeComponent.jsx';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducer'; 

const store = createStore(reducer, compose(
	applyMiddleware(thunk))
); 

class App extends React.Component { 
  render () {
    return (
	    	<Provider store={store}>
	    		<div> 
		    		<AwesomeComponent />
		    	</div>
		    </Provider>	
	    )
  	}
}

render(<App/>, document.getElementById('app'));