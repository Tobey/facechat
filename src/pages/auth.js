
import React from 'react';

import HomeLayout from '../components/Layout';

import { 
    Authenticator, 
    SignIn,
    CognitoUser,
    Greetings,
    ConfirmSignIn,
    RequireNewPassword,
    SignUp,
    ConfirmSignUp,
    VerifyContact,
    ForgotPassword,
    TOTPSetup,
    Loading
    
} from 'aws-amplify-react';
import config from '../config';

import { Grid, Image, Card, Icon, Button, Container, Item, Divider, Header } from 'semantic-ui-react'


class CustomAuth extends React.Component {

  render() {
    return (
        <Authenticator 
        hide={ 
            [
                Greetings,
                SignIn,
                ConfirmSignIn,
                RequireNewPassword,
                SignUp,
                ConfirmSignUp,
                VerifyContact,
                ForgotPassword,
                TOTPSetup,
                Loading
            ]
        }
        // or hide all the default components
        // Pass in an aws-exports configuration
        amplifyConfig={config}
 
    >
      {this.props.children}
    </Authenticator>

      );
    }
}

export default CustomAuth


