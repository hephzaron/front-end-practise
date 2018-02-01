import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Jumbotron from './Jumbotron';
import HomeRow from './HomeRow';

/**
 * @description This renders the homepage and its other components
 * @param {object} props
 * @return {JSX}
 */

const propTypes = {
  isLoading: PropTypes.bool.isRequired,
  messageContent: PropTypes.string
}

class Home extends Component {
  constructor(props){
    super(props);

    this.message = 'This is HiLib, a shortword for Hi-library';
    this.ourMission = 'Our Mission';
    this.ourVision = 'Our Vission';
    this.ourPassion = 'Our Passion';
    this.state = {
      isLoading: false,
      messageContent: 'we are passionate about bulding a reading culture in students and ...'
    };
  };

  componentDidMount(){
    this.setState({isLoading:false});
  };
  componentWillUnmount(){
    this.setState({isLoading:true});
  }

  render(){
    return(    
      <div id="home" className="tab-pane fade in active">
      {/* Main jumbotron welcomes user to hilib */}
        <Jumbotron
          welcomeMessage = {`${this.message} ${this.state.messageContent}`}
          isLoading = {this.state.isLoading}/> 
        <HomeRow
          missionMessage = {this.ourMission}
          visionMessage = {this.ourVision}
          passionMessage = {this.ourPassion}
          isLoading = {this.state.isLoading}
          getMMYY = 'Jan, 2018'/>   
      </div>
    )
  }
  
}

Home.propTypes = propTypes;

export default Home;