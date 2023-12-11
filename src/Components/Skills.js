import ProfesionalSkillData from "../ProfesionalSkillData";
import languagesData from "../languagesData";

function Skills() {
  return (
    <div class="card  ">
      <div>
        <h1 className="skillHeading"> <i class="fa fa-wrench" aria-hidden="true"></i>Professional Skills</h1>
        <div className="skillCard">
          <h3>Web Developer</h3>
          <h3>UI Design</h3>
          <h3>Computer Literacy</h3>
        </div>
      </div>
      <br />
      <br />
      <div>
        <h1 className="skillHeading"> <i class="fa fa-code" aria-hidden="true"></i>Languages</h1>
        <div className="skillCard">
          <h3>Html</h3>
          <h3>Css</h3>
          <h3>javaScript</h3>
        </div>
        <div className="skillCard">
          <h3>React.js</h3>
          <h3>React Native</h3>
          <h3>Firebase</h3>
        </div>
        <div className="skillCard">
          <h3>Node.js</h3>
          <h3>Dart</h3>
          <h3>Flutter</h3>
        </div>
        <div className="skillCard">
          <h3>Git</h3>
          <h3>Github</h3>
          <h3>Restful APIs</h3>
        </div>
      </div>
    </div>

  );
}

export default Skills
