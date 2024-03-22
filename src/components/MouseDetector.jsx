import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
export default function MouseDetector({x,y}) {
    const containerStyle = {
        width: '190px',
        height: '30px',
        border: '1px solid black', // Adding a border for visibility
        backgroundColor: 'blue', // Adding a background color for visibility
        color:'white',
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        textAlign: 'center',
        position: 'absolute',
        left: x, // Adjust as per your desired X coordinate
        top: y, // Adjust as per your desired Y coordinate
      };
  return (
    <div  >  
      <Container style={containerStyle} >Mouse Detector</Container>
    </div>
  )
}
