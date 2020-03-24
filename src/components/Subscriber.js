import React from 'react';
import { OTSubscriber } from 'opentok-react';
import CheckBox from './CheckBox';
import { Container } from 'semantic-ui-react';
 
class Subscriber extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      error: null,
      audio: true,
      video: true
    };
  }
 
  setAudio = (audio) => {
    this.setState({ audio });
  }
 
  setVideo = (video) => {
    this.setState({ video });
  }
 
  onError = (err) => {
    this.setState({ error: `Failed to subscribe: ${err.message}` });
  }
 
  render() {
    return (
      <Container 
      className="subscriber"
      style={{border: "2px solid red", zIndex: 3}}
      >
        Subscriber
        {this.state.error ? <div id="error">{this.state.error}</div> : null}
        <OTSubscriber
          properties={{
            subscribeToAudio: this.state.audio,
            subscribeToVideo: true
          }}
          
          onError={this.onError}
        />
      </Container>
    );
  }
}
export default Subscriber;