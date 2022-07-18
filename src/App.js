import React, { useState } from 'react';


import 'bootstrap/dist/css/bootstrap.css';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ReactPlayer from 'react-player/lazy';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


import PhotoAlbum from "react-photo-album";
import photos from "./images.js"; 




//Import Components
import Nav from "./Nav";

import './App.css';



const App = () => (

      <PhotoAlbum layout="rows" photos={photos} spacing={0} />
      
      
      /*}
    <div style={{ display: 'block', padding: 0 }}>
      <h4>React-Bootstrap Col Component</h4>
      <Row>
        <Col style={{
          backgroundColor: 'red',
        }}>
          "HelloWorld"

        <ReactPlayer url='https://www.youtube.com/watch?v=nZycLraMmoE' light='rIRpEfC.gif' playing={ true }  width='100%'/> 

        </Col>
        <Col style={{
          backgroundColor: 'yellow',
         }}>
          "HelloWorld"
            
         <ReactPlayer url='https://www.youtube.com/watch?v=UzR5s1uQHfU' light={ true } playing={ true } width='100%' /> 
         </Col>
        <Col style={{
          backgroundColor: 'green',
         }}>
          "HelloWorld"
         <ReactPlayer url='https://www.youtube.com/watch?v=A4H3PQo-SeQ' light={ true } playing={ true } width='100%'/>  
         </Col>
      </Row>
    </div>
        */

      
      
      

);


export default App;
