import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div>
        <h3>Designer . Web Developer . Flutter Developer. react Web AND Mobile Developer</h3>
        <p>Hello 👋🏽 my name is</p>
        <h1 >Amukelani Nyambi</h1>
        <p>
          I am a web developer and a flutter developer with experience in
          building user-friendly web application using variety of technologies
          such as bootstrap, javaScript, react.js and flutter.
        </p>
        <div className="homeButton">
          <button className="resume-button"><Link to="/Resume" className="homeLink">Resume</Link></button>

          <button className="projectsBtn "><Link to="/Projects" className="homeLink">Projects</Link></button>
        </div>
      </div>
      <img src={require("../assets/me.webp")} alt="Me"/>
    </div>
  );
}

export default Home;
