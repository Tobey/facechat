import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Container, Grid, Image, Segment, Icon, Header, Button} from 'semantic-ui-react'

import { OTPublisher, OTSubscriber } from 'opentok-react'

import Publisher from '../components/Publisher';
import Subscriber  from '../components/Subscriber';
import config from '../config';
import { OTSession, OTStreams, preloadScript } from 'opentok-react';


const mainChat = {
    width: '100vw',
    height: '100vh',
    border: '1px solid green'
}

const mainProps = {
    publishAudio: false,
    publishVideo: true,
    videoSource: 'camera',
}

const smallChat = {
    width: '20%',
    height: '20%',
    border: '1px solid blue'
}

const smallProps = {
    subscribeToAudio: false,
    subscribeToVideo: true
}

class Simple extends React.Component {
  
render() {
  return (
    <OTSession
        apiKey={config.API_KEY}
    sessionId={config.SESSION_ID}
    token={config.TOKEN}
    eventHandlers={this.sessionEvents}
    onError={this.onError}
    >
            <Publisher/>
            <Subscriber/>

        </OTSession>
  /* 
        // <OTPublisher
        //     style={mainChat}
        //     properties={mainProps}
        // >
          <OTSubscriber
                style={smallChat}
                properties={smallProps}
            >
            </OTSubscriber>

        // </OTPublisher>
         */
    );
  }

}
export default preloadScript(Simple)
