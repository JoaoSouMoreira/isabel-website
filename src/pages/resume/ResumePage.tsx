import resumeImage1 from '../../assets/cv1.jpg';
import './ResumePage.css';

const ResumePage = () => {
  return (
    <div className="resume-container">
      <img src={resumeImage1} width="400px" className="resume-image" alt="Resume First Image" />

      <p className="resume-text">
        Download my resume by clicking <a href="/Isabel-Castanho-Resume.pdf" download="Isabel-Castanho-Resume.pdf">here</a>.
      </p>
    </div>
  )
}

export default ResumePage
