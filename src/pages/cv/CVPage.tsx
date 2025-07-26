import cvImage1 from '../../assets/cv1.jpg';
import './CVPage.css';

const CVPage = () => {
  return (
    <div className="cv-container">
      <img src={cvImage1} width="500px" className="cv-image" alt="CV First Image" />
      <p className="cv-text">
        Coming soon...
      </p>
    </div>
  )
}

export default CVPage
