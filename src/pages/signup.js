import React from 'react';

import { Form, Checkbox, Button, Container, Segment, Header } from 'semantic-ui-react'


const style = {
    h1: {
      marginTop: '3em',
    },
    h2: {
      margin: '4em 0em 2em',
    },
    h3: {
      marginTop: '2em',
      padding: '2em 0em',
    },
    last: {
      marginBottom: '300px',
    },
  }

  class SignUp extends React.Component {
  
    render() {
      return (
        <Container>
            <Header as='h1' content='Signup' style={style.h1} textAlign='center' />
            <Header as='h2' content='Personal Detail' style={style.h2} textAlign='center' />
             <Segment>
                <Form>
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' />
                </Form.Field>
                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' />
                </Form.Field>
                    <Button type='submit'>Submit</Button>
                </Form>
            </Segment>
        </Container>
        );
      }
    
    }
    export default SignUp