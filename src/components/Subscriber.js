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

        <OTSubscriber
          properties={{
            subscribeToAudio: this.state.audio,
            subscribeToVideo: true,
            height: '100vh',
            width: '100vw',
          }}
          onError={this.onError}
        />
    );
  }
}
export default Subscriber;