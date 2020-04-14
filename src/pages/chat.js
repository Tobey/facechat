import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import Publisher from '../components/Publisher';
import Subscriber  from '../components/Subscriber';
import config from '../config';
import { OTSession, OTStreams, preloadScript } from 'opentok-react';
import './chat.css'


import Amplify, { Auth, API, graphqlOperation } from 'aws-amplify';
import { getOpenTokSession, getPublishToken } from '../graphql/queries';
import { withAuthenticator } from 'aws-amplify-react'

Amplify.configure(config)

Amplify.configure({
  API: {
    graphql_endpoint: config.aws_appsync_graphqlEndpoint,
    graphql_headers: async () => {
      const currentSession = await Auth.currentSession();
      return { Authorization: currentSession.getIdToken().getJwtToken() }
    }
  }
});


const mountedChat = (that) => {
      if (that.state.getOpenTokSession && that.state.facechatToken){
        let to =  'cGFydG5lcl9pZD00NjUzMTUzMiZzaWc9MTY2ZmE0Yzk5MTFiYjM5YzI2YzI1MTY1OTYzOTJhNjlmNzU4ZmU4MTpzZXNzaW9uX2lkPTJfTVg0ME5qVXpNVFV6TW41LU1UVTROamczT0RJeE1UUXhOWDVZTlZNMFdteG1NelpNYzNCeWNVNHpRMWhLY1Zoc1JuQi1mZyZjcmVhdGVfdGltZT0xNTg2ODg4MjcxJm5vbmNlPTAuMTc1MDM5NTgxMjEyMTU5JnJvbGU9cHVibGlzaGVyJmV4cGlyZV90aW1lPTE1ODY5NzQ2NzEmY29ubmVjdGlvbl9kYXRhPXVzZXJuYW1lJTNEYm9iJmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9'
        return (
        <div>
           <OTSession
              apiKey={config.API_KEY}
              sessionId={"2_MX40NjUzMTUzMn5-MTU4Njg3ODIxMTQxNX5YNVM0WmxmMzZMc3BycU4zQ1hKcVhsRnB-fg"}
              token={that.state.facechatToken || to}
              eventHandlers={that.sessionEvents}
              onError={that.onError}
          >

            <OTStreams>
              <Subscriber/>
          </OTStreams>
          <Publisher/>
        </OTSession>
        </div>
        )

      }
      else {
          return <div>loading..</div>
      }
    
            
 
}

class Chat extends React.Component {
  state = {
    facechatSession: null,
    facechatToken: null,
  }
  
  constructor(props) {
    super(props);
    // Don't do this!
    this.state = { color: props.color };
  }

  componentDidMount() {
    console.log("Mounted s")
    console.log('getOpenTokSession query')
    let s = (async () => {
      let data = await API.graphql(graphqlOperation(getOpenTokSession));
      console.log(data)
      console.log("getOpenTokSession")
      console.log(data.data.getOpenTokSession)
      this.setState({facechatSession: data.data.getOpenTokSession})
    })();

    s = (async () => {
      let data = await API.graphql(graphqlOperation(getPublishToken));
        this.setState({facechatToken: data.data.getPublishToken})
        console.log("getPublishToken ")
        console.log(data.data.getPublishToken)
    })();

    console.log('done with mount')
  }
    
  render() {
    return mountedChat(this)
    }

}
export default withAuthenticator(preloadScript(Chat)) 
