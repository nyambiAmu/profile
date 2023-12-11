import EducationCards from "./EducationCards";
import ExperienceCards from "./ExperienceCards";
import Footer from "./Footer";
import Languages from "./Languages";
import NavBar from "./NavBar";
import Skills from "./Skills";

import cv from '../files/myCv.pdf'

function Resume() {
  const handleDownload = () => {
    fetch(cv)
      .then(res => res.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const a = document.createElement('a');
        a.href = url;
        a.download = 'myCv.pdf';
        document.body.appendChild(a);
        a.click();
        a.remove();
      });
  }
  return (
    <main >
      <NavBar />
      <div className="Resumemain">
        <div className="resume">
          <h1>Resume</h1>
          <div className="experience">
            <h2>Expirience</h2>
            <button onClick={handleDownload}><i class="fa fa-download" aria-hidden="true"></i>Download Resume</button>
          </div>
          <ExperienceCards />
          <EducationCards />
          <Skills />
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default Resume;
