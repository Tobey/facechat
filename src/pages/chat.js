import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import Publisher from '../components/Publisher';
import Subscriber  from '../components/Subscriber';
import config from '../config';
import { OTSession, OTStreams, preloadScript } from 'opentok-react';
import './chat.css'

class Chat extends React.Component {
  
render() {
  return (
    <OTSession
        apiKey={config.API_KEY}
    sessionId={config.SESSION_ID}
    token={config.TOKEN}
    eventHandlers={this.sessionEvents}
    onError={this.onError}
    >
        <OTStreams>
          <Subscriber/>
        </OTStreams>
            <Publisher/>

        </OTSession>

    );
  }

}
export default preloadScript(Chat)
