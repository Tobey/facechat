import React from 'react';

import { 
  Grid, 
  Image, 
  Card, 
  Icon, 
  Button, 
  Container, 
  Item, 
  Divider,
  Header,
  Rating,
  Statistic,
  Segment
  } from 'semantic-ui-react'

import profile from './profile.jpg';




class HomeLayout extends React.Component {
    render() {
      return (
        <Grid  centered verticalAlign='middle' divided='vertically'>

          {/* top  profile row  */}
          <Grid.Row centered columns={1}>
            <Grid.Column>
              <Image src={profile} centered rounded  size='small'/>
            </Grid.Column>
          <Rating icon='star' defaultRating={1} maxRating={3} />
        <Statistic size='tiny'>
            <Statistic.Value> 52</Statistic.Value>
            <Statistic.Label>  <Icon name='eye' size='smalll'/></Statistic.Label>
          </Statistic>
  
          </Grid.Row>

          {/* profile details */}
          <Grid.Row centered stretched columns={2} >
            <Grid.Column textAlign="center" >
                <Item> 
                    <Item.Content>
                        <Header>Header</Header>
                        <Item.Meta>Description </Item.Meta>
                        <Item.Description>
                          More stuff here
                        </Item.Description>
                        <Item.Extra>Additional Details</Item.Extra>
                    </Item.Content>
                </Item>
            </Grid.Column>
            <Grid.Column textAlign="center">
                <Item>
                  <Item.Content>
                  <Item.Meta>Description</Item.Meta>
                  </Item.Content>
                  <Item.Description color="yellow">  More stuff here </Item.Description>
                  <Button color='red' content='39'
                      label={{ basic: true, color: 'red', pointing: 'left', content: '🔥' }}
                    />
                </Item> 
            </Grid.Column>
          </Grid.Row>
          
          {/* Live Actions */}
          <Grid.Row columns={2} centered >
              <Grid.Column >
              <Button circular icon="phone" size="massive" color="green" href="/chat/">
              </Button>
              </Grid.Column>
              <Grid.Column >
              </Grid.Column>
              
          </Grid.Row>
      </Grid>
  
        );
      }
  }
  
  export default HomeLayout;