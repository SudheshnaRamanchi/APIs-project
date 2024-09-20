import React from "react";
import './Home.css'; // Assuming you have your styles here

const Homes = () => {
  return (
    <>
      <div className="container">
        <div className="tow">
          <div className="text">
            <h1>Hii I'Am
              <img src="emoji.jpg" width={70} height={70} className="rounded-circle" alt="emoji"/>
              <br/> SUDHESHNA 
            </h1>
            <p>
              I developed a <span style={{ color: '#970000' }}>'React project'</span> that integrates various
              <span style={{ color: '#970000' }}>'APIs'.</span> I created a dynamic web application that includes:
              <br/>
              <span style={{ color: '#970000' }}>'Weather API'</span> for real-time weather updates,
              <span style={{ color: '#970000' }}>'Makeup API'</span> to display various makeup products,
              <span style={{ color: '#970000' }}>'Movies API'</span> for exploring collections of movies,
              and the <span style={{ color: '#970000' }}>'News API'</span> to keep users updated with the latest news.
              This project highlights my proficiency in React.js, React-Bootstrap, and CSS, demonstrating my ability to build web applications.
            </p>
            <div className="tech-icons">
              <img src="react.webp" width={70} height={70} className="rounded-circle shadow-effect" alt="React"/>
              <img src="reacB.png" width={70} height={70} className="rounded-circle" alt="React Bootstrap"/>
              <img src="css.png" width={70} height={70} className="rounded-circle" alt="CSS"/>
            </div>
          </div>
        </div>

        <div className="home-img">
          <img src="./img5.jpg" width={300} height={300} className="rounded-circle shadow-effect" style={{ boxShadow: '1px 10px 10px 10px rgba(255, 20, 147, 1)' }} alt="profile"/>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          <p>© 2024 Sudheshna Ramanchi.
          Connect with me on<a href="https://www.linkedin.com/in/sudheshna-ramanchi-341363312?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img src="in-icon-.jpg" width={20}></img></a>   <a href="https://github.com/SudheshnaRamanchi"><img src="3291667.png" width={20}></img></a><a href="https://www.instagram.com/sudheshna_rao/?hl=en"><img src="instagram.webp" width={40}></img></a></p>
        
        </div>
      </footer>
    </>
  );
}

export default Homes;
