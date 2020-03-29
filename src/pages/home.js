import React from 'react';

import HomeLayout from '../components/Layout';

import { Grid, Image, Card, Icon, Button, Container, Item, Divider, Header } from 'semantic-ui-react'


class Home extends React.Component {


  render() {
    return (
      <Container  fluid >
      <Divider  horizontal><b>Facechat.</b></Divider>
         <br /><br />
         <Container>
           <HomeLayout/>
         </Container>
     </Container>

      );
    }
}

export default Home
