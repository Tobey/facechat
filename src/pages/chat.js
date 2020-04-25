import React from 'react';


import Publisher from '../components/Publisher';
import Subscriber  from '../components/Subscriber';
import { OTSession, OTStreams, preloadScript } from 'opentok-react';

import Amplify, { Auth, API, graphqlOperation}from 'aws-amplify';
import { getOpenTokSession, getPublishToken } from '../graphql/queries';
import { withAuthenticator, AmplifyTheme } from 'aws-amplify-react'

import CustomAuth  from './auth'
import awsconfig from '../aws-exports';
import opentokconfig from '../config';

import { Loader, Dimmer } from 'semantic-ui-react'

import './chat.css'
import 'semantic-ui-css/semantic.min.css';
import "@aws-amplify/ui/src/Theme.css";
import "@aws-amplify/ui/src/Angular.css";
import "@aws-amplify/ui/dist/style.css";

import { OT } from 'opentok-react';


Amplify.configure(awsconfig)
Amplify.configure({
  API: {
    graphql_endpoint: awsconfig.aws_appsync_graphqlEndpoint,
    graphql_headers: async () => {
      const currentSession = await Auth.currentSession();
      return { Authorization: currentSession.getIdToken().getJwtToken() }
    }
  }
});


class Chat extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      facechatSession: null,
      facechatToken: null,
      connectionCount: 0,
      session: null
  
    }
    this._isMounted = false;

    this.sessionEvents = this.sessionEvents.bind(this);
  }

  componentWillUnmount() {
    this._isMounted = false;
 }
  componentDidMount() {
    this._isMounted = true; // https://stackoverflow.com/questions/52061476/cancel-all-subscriptions-and-asyncs-in-the-componentwillunmount-method-how

    if (!this._isMounted) {
        return
    }
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

      console.log('done  with mount')
    }


  sessionEvents(f) {
    console.log("---event---")
    console.log(f)
    console.log("--------")
  }
    
  render() {

    if (this.state.facechatSession == null ){
      return <div>Loading..</div>
    } else {
      let to =  'cGFydG5lcl9pZD00NjUzMTUzMiZzaWc9MTY2ZmE0Yzk5MTFiYjM5YzI2YzI1MTY1OTYzOTJhNjlmNzU4ZmU4MTpzZXNzaW9uX2lkPTJfTVg0ME5qVXpNVFV6TW41LU1UVTROamczT0RJeE1UUXhOWDVZTlZNMFdteG1NelpNYzNCeWNVNHpRMWhLY1Zoc1JuQi1mZyZjcmVhdGVfdGltZT0xNTg2ODg4MjcxJm5vbmNlPTAuMTc1MDM5NTgxMjEyMTU5JnJvbGU9cHVibGlzaGVyJmV4cGlyZV90aW1lPTE1ODY5NzQ2NzEmY29ubmVjdGlvbl9kYXRhPXVzZXJuYW1lJTNEYm9iJmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9'
      let loading = this.state.connectionCount > 1 ? 'acitve': 'disabled'
      return (
          <OTSession
          apiKey={opentokconfig.API_KEY}
          sessionId={"2_MX40NjUzMTUzMn5-MTU4Njg3ODIxMTQxNX5YNVM0WmxmMzZMc3BycU4zQ1hKcVhsRnB-fg"}
          token={this.state.facechatToken || to}
          eventHandlers={this.sessionEvents}
          onError={this.onError}
    >

        <Dimmer {...loading}>
          <Loader>Waiting for the second person ..</Loader>
        </Dimmer>
          <OTStreams>
            <Subscriber/>
        </OTStreams>
        <Publisher/>
      </OTSession>
      )
    }
    }

}


const authTheme = {
  ...AmplifyTheme,

  sectionHeader:{
    ...AmplifyTheme.sectionHeader,
    color:"red",
  },
  formSection: {
    ...AmplifyTheme.formSection,
    backgroundColor: "green",
  },
  sectionFooter: {
    ...AmplifyTheme.sectionFooter,
    backgroundColor: "purple"
  },
  button: {
      ...AmplifyTheme.button,
      backgroundColor: "blue",
      color: "blue"
  }
}



console.log(authTheme)
export default  withAuthenticator(preloadScript(Chat), {
  includeGreetings: false, 
  hideDefault: true,
  // Show only certain components
  // authenticatorComponents: [MyComponents],
  // display federation/social provider buttons 
  // federated: {myFederatedConfig}, 
  // customize the UI/styling
  theme: {authTheme},
})

