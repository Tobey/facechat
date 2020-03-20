import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import config from './config';
import 'semantic-ui-css/semantic.min.css';

// https://www.nexmo.com/blog/2019/07/16/opentok-react-components-dr
// https://medium.com/@a.carreras.c/using-semantic-ui-react-your-react-js-app-523ddc9abeb3

ReactDOM.render(<App
  apiKey={config.API_KEY}
  sessionId={config.SESSION_ID}
  token={config.TOKEN}
  />, document.getElementById('root'));
