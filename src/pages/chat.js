import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Container, Grid, Image, Segment, Icon, Header, Button} from 'semantic-ui-react'


import config from '../config';
import { OTSession, OTStreams, preloadScript } from 'opentok-react';
import ConnectionStatus from '../components/ConnectionStatus';
import Publisher from '../components/Publisher';
import Subscriber from '../components/Subscriber';
import './chat.css';

class ChatLayout extends React.Component {


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
    render() {
      return (
        <Grid textAlign='center' verticalAlign='middle'>
        <Grid.Row columns={1} centered>
          <Grid.Column> 
          <OTSession
                 apiKey={config.API_KEY}
                sessionId={config.SESSION_ID}
                token={config.TOKEN}
                eventHandlers={this.sessionEvents}
                onError={this.onError}
            >
            <Segment raised>
            <Container 
                style={{minHeight: '700px', border: "1px solid red"}}
            >
              <Publisher style={{zIndex: 2}}/>
                <Container
                  style={{
                    border: '2px solid green',
                     height: '1px',
                     width: '25px',
                     zIndex: 100
                    }}
                >

            </Container>
            <Container 
                style={{height: '500px', border: "1px solid blue"}}
            />
              <Subscriber/>
          </Container>
          </Segment>
          </OTSession>
          </Grid.Column>
        </Grid.Row>
      </Grid>
        );
      }
  }


class Chat extends React.Component {
render() {
  return (

        <ChatLayout
        />
      
    );
  }

}
export default preloadScript(Chat)
