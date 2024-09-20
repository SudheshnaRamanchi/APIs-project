import React from 'react';
import './About.css'; // Import the CSS file
import { Card, CardGroup, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react';
import { Handler } from 'react';
const About = () => {
  return (
    <>
       <div className='about'>
      <div className='image-container'>
        <img src='/c-3.png' alt='Princess 1' className="image rounded-circle "  />
        <img src='/c-2.jpg' alt='Princess' className='image rounded-circle ' />
      </div>
      </div>


{/* <a href='#'><img src='github.png'  width={80}></img></a>      <a href='#'><img src='insta.jpg' width={80}></img></a>     <a href='#'><img src='linkedin.png' width={80}></img></a>         <a href='#'><img src='gmail.webp' width={80}></img></a> */}

<div class="social-icons">
  <a href='https://github.com/SudheshnaRamanchi'><img src='github-.png' alt='GitHub' width={100}></img></a>
  <a href='https://www.instagram.com/sudheshna_rao/?hl=en'><img src='insta.jpg' alt='Instagram' width={70}></img></a>
  <a href='https://www.linkedin.com/in/sudheshna-ramanchi-341363312?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app '><img src='linkedin.png' alt='LinkedIn' width={90}></img></a>
  <a href='mailto:sudheshnaramanchi@gmail.com'><img src='gmail.webp' alt='Gmail' width={80}></img></a>
</div>



     <div className='row'>
        <div class="col-4 bg-light"><Card style={{ width: 'auto' }}>
  <Card.Body>
  <Card.Link href="# "><img src='/web.png' width={50}></img></Card.Link>
    <Card.Title>Web development</Card.Title>
   
    <Card.Text>
    the process of creating, maintaining, and building websites. Web developers use a variety of coding languages, tools, and frameworks to create websites that are visually appealing, easy to use, and perform well
    </Card.Text>
    
    <Card.Link href="https://www.geeksforgeeks.org/web-development/"> Link</Card.Link>
  </Card.Body>
</Card></div>




        <div class="col-4 bg-light"><Card style={{ width: 'auto' }}>
  <Card.Body>

  <Card.Link href="# "><img src='/telephone.jpg'   width={50}></img></Card.Link>
    <Card.Title>Service</Card.Title>
    <Card.Text>
   Our service on webpage that provides information about page .thet include a description of the service, pricing information, and a way to contact the service provider.
    </Card.Text>
  
    <Card.Link href="https://devoxsoftware.com/technology/react-js-development-services/"> Link</Card.Link>
  </Card.Body>
</Card></div>
        



<div class="col-4 bg-light"><Card style={{ width: 'auto' }}>
  <Card.Body>
  <Card.Link href="# "><img src='/ani.png'   width={60}></img></Card.Link>
    <Card.Title>Animation</Card.Title>
  
    <Card.Text>
    These third-party open-source repositories contain animation code that can be loaded into a project.
    That allow you to convey physically believable motion in your interface. 
    </Card.Text>
   
   <Card.Link href="https://legacy.reactjs.org/docs/animation.html"> Link</Card.Link>
  </Card.Body>
</Card></div>
    
    
    </div>
    
    <footer className="footer">
        <div className="footer-content">
          <p>© 2024 Sudheshna Ramanchi.
          Connect with me on<a href="https://www.linkedin.com/in/sudheshna-ramanchi-341363312?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img src="in-icon-.jpg" width={20}></img></a>   <a href="https://github.com/SudheshnaRamanchi"><img src="3291667.png" width={20}></img></a><a href="https://www.instagram.com/sudheshna_rao/?hl=en"><img src="instagram.webp" width={40}></img></a></p>
        
        </div>
      </footer>

    </>
  );
};

export default About;
