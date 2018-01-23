import React from 'react';
import PropTypes from 'prop-types';
import Jumbotron from './Jumbotron';
import HomeRow from './HomeRow';

/**
 * @description This renders the homepage and its other components
 * @param {object} props
 * @return {JSX}
 */

const propTypes = {
  isLoading: PropTypes.func.isRequired,
  messageContent: PropTypes.string
}

const Home = (props) => {
  const message = `This is HiLib, a shortword for Hi-library, ${props.messageContent}`;
  const ourMission = 'Our Mission';
  const ourVision = 'Our Vission';
  const ourPassion = 'Our Passion';

  return(
    
  <div id="home" className="tab-pane fade in active">
    {/* Main jumbotron welcomes user to hilib */}
    <Jumbotron
      welcomeMessage = {message}
      isLoading = {props.isLoading}/> 
    <HomeRow
      missionMessage = {ourMission}
      vissionMessage = {ourVision}
      passionMessage = {ourPassion}
      isLoading = {props.isLoading}
      getMMYY = 'Jan, 2018'/>   
  </div>
  )
}

Home.propTypes = propTypes;

Home.defaultProps = {
  messageContent: "we are passionate about bulding a reading culture in students and ..."
}

export default Home;