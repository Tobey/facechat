import React from 'react';
import ReactDOM from 'react-dom';
import config from './config';
import 'semantic-ui-css/semantic.min.css';
import { Container} from 'semantic-ui-react'
import { OTSession, OTStreams, preloadScript } from 'opentok-react';
import ConnectionStatus from './components/ConnectionStatus';
import Publisher from './components/Publisher';
import Subscriber from './components/Subscriber';

class Chat extends React.Component {
video = () => (
  <OTSession
    apiKey={this.props.apiKey}
    sessionId={this.props.sessionId}
    token={this.props.token}
    eventHandlers={this.sessionEvents}
    onError={this.onError}
    >
        {this.state.error ? <div id="error">{this.state.error}</div> : null}
        <ConnectionStatus connected={this.state.connected} />
      <Publisher />
      <OTStreams>
        <Subscriber />
      </OTStreams>
  </OTSession>
)

render() {
  return (
    <Container  fluid style={{ width: '100%', height: '100%' }}>
      {this.video}
   </Container>

    );
  }

}
preloadScript(Chat)

ReactDOM.render(<Chat
  apiKey={config.API_KEY}
  sessionId={config.SESSION_ID}
  token={config.TOKEN}
  />, document.getElementById('root'));
