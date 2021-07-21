import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import Store from 'app/store/store';

ReactDOM.render(
  <React.StrictMode>
     <Store>
      <App />
    </Store>
  </React.StrictMode>,
  document.getElementById('root')
);

