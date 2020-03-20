import React from 'react';
import logo from './logo.svg';
import './App.css';
import { OTSession, OTStreams, preloadScript } from 'opentok-react';
import ConnectionStatus from './components/ConnectionStatus';
import Publisher from './components/Publisher';
import Subscriber from './components/Subscriber';
import Home from './components/Layout';

import { Grid, Image, Card, Icon, Button, Container, Item, Divider, Header } from 'semantic-ui-react'



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      connected: false
    };
    this.sessionEvents = {
      sessionConnected: () => {
        this.setState({ connected: true });
      },
      sessionDiscoxnnected: () => {
        this.setState({ connected: false });
      }
    };
  };
  
  onError = (err) => {
    this.setState({ error: `Failed to connect: ${err.message}` });
  }

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
      <Divider  horizontal><b>Facechat.</b></Divider>
         <br /><br />
         <Container>
           <Home>
           {this.video}
           </Home>
         </Container>
     </Container>

      );
    }
}

export default preloadScript(App);
