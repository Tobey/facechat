import React from 'react';

import { Grid, Image, Card, Icon, Button, Container, Item, Divider, Header } from 'semantic-ui-react'


class Home extends React.Component {
    render() {
      return (
        <Grid divided='vertically'>
        <Grid.Row columns={1}>
          <Grid.Column >
            <Image src='https://react.semantic-ui.com/images/avatar/large/elliot.jpg'  centered  rounded  size='large'/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={2} centered>
          <Grid.Column>
              <Container text>
              <Item>
                  <Item.Content>
                      <Header>Header</Header>
                      <Item.Meta>Description</Item.Meta>
                      <Item.Description>
                        More stuff here
                      </Item.Description>
                      <Item.Extra>Additional Details</Item.Extra>
                  </Item.Content>
              </Item>
              </Container>
          </Grid.Column>
          <Grid.Column>
          <Item>
                  <Item.Content>
                      <Item.Meta>Description</Item.Meta>
                   
                  </Item.Content>
                  <Item.Description color="yellow"> 
                        More stuff here
                      </Item.Description>
                      <Button
                          color='red'
                          content='39'
                          label={{ basic: true, color: 'red', pointing: 'left', content: '🔥' }}
                        />
              </Item> 
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1} centered>
            <Grid.Column>
            <Button circular  icon="phone" size="massive" color="green">
              <a href="/chat"></a>
            </Button>
            </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1} centered>
         {this.props.children}
        </Grid.Row>
      </Grid>
  
        );
      }
  }
  
  export default Home;