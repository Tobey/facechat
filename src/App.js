import React from 'react';
import logo from './logo.svg';
import './App.css';
import { OTSession, OTStreams, preloadScript } from 'opentok-react';
import ConnectionStatus from './components/ConnectionStatus';
import Publisher from './components/Publisher';
import Subscriber from './components/Subscriber';

import { Grid, Image, Card, Icon } from 'semantic-ui-react'

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
      sessionDisconnected: () => {
        this.setState({ connected: false });
      }
    };
  };
  
  onError = (err) => {
    this.setState({ error: `Failed to connect: ${err.message}` });
  }

  render() {
    return (
      <Grid columns={3} divided='vertically' >
        <Grid.Row>
        <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
        </Grid.Column>
        <Grid.Column>
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

        </Grid.Column>
        <Grid.Column>
        <Card>
        <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
        <Card.Content>
          <Card.Header>Matthew</Card.Header>
          <Card.Meta>
            <span className='date'>Joined in 2015</span>
          </Card.Meta>
          <Card.Description>
            Matthew is a musician living in Nashville.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='user' />
            22 Friends
          </a>
        </Card.Content>
      </Card>
        </Grid.Column>
      </Grid.Row>
    </Grid>

      );
    }
}

export default preloadScript(App);
