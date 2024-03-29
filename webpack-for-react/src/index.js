import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(<App />, document.getElementById('root'));

// Webpack Hot Module Replacement API
if (module.hot) module.hot.accept('./components/App', () => render(App));