import React from 'react';
import  { NavLink,
} from "react-router-dom"

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
  Segment,
  Progress
  } from 'semantic-ui-react'

import { CircularProgressbar, buildStyles  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';



const Progressbar = () => (
  <CircularProgressbar
  value={66}
  text={`3:32`}
  // circleRatio={0.5}
  styles={buildStyles({
    strokeLinecap: 'butt',
    textSize: '14px',
    pathTransitionDuration: 0.5,
    pathColor: `rgba(62, 152, 199, ${200 / 100})`,
    textColor: '#d62d20',
    trailColor: '#d6d6d6',
    backgroundColor: '#3e98c7',
  })}
/>
)
class HomeLayout extends React.Component {
    render() {
      return (
        <Grid  centered verticalAlign='middle' divided='vertically'>

          {/* top  profile row  */}
          <Grid.Row centered columns={1}>
            <Grid.Column>
              <Image src={"https://semantic-ui.com/images/avatar2/large/kristy.png"} centered rounded  size='medium'/>
            </Grid.Column>
          <Rating icon='star' defaultRating={2} maxRating={3} />
        <Statistic size='tiny'>

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
                  <Item.Description color="yellow"> More stuff here </Item.Description>
                  <Statistic size='tiny' color='olive' >
                  <Statistic.Value>
                    <Icon name='pound sign'/> 500
                  </Statistic.Value>
                  <Statistic.Label>limited offer</Statistic.Label>
                </Statistic>
                </Item> 
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={1} centered>
              <Grid.Column verticalAlign='middle' width={6}>  
              <Progressbar/>
          </Grid.Column>
          </Grid.Row>
          {/* Live Actions */}
          <Grid.Row columns={1} centered>
              <Grid.Column verticalAlign='middle'>
              <NavLink to="/chat/">  
                <Button  size="medium" color="blue"
                  style={{whiteSpace: "nowrap"}}
                >
                  place a bid  
                </Button>
              </NavLink>
         
              </Grid.Column>
              
          </Grid.Row>
      </Grid>
  
        );
      }
  }
  
  export default HomeLayout;