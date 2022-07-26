import React, { Component } from 'react';
import "./About.css";
import my_pfp from '../assets/pfp_shum.jpg'
  
export default class About extends Component {
  render() {
    return (
      <div>
    <div class="split left">
      <div className="centered">
        <img 
          className="profile_image"
          img src={my_pfp}
          alt="Profile Pic"
          ></img>
      </div>
    </div>

    <div className="split right">
      <div className="centered">
        <div className="name_title">Cailey Shum</div>
        <div className="brief_description">
         <p> Hello! &#128075;</p>
          
         <p>My name is Cailey. I am a junior at the University at Buffalo majoring in Statistics, 
           with a minor in Mathematics and Public 
          Health. I am from Long Island, New York. </p>

          <p> After my undergraduate degree, I hope to pursue a graduate program in either applied mathematics or biostatistics!</p>
          
          <p>Here are some other fun facts about me: </p>
          <ul>
            <li> I am an only child. </li>
            <li> I got all my wisdow teeth removed the day after my birthday (yikes, I know). </li>
            <li> My favorite ice cream flavor is mint chocolate chip, which some might argue tastes like toothpaste. </li>
            </ul>
        </div>

         </div>
         </div>

         


      </div>
    )
  }
}