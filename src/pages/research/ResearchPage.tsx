import researchImage from '../../assets/research.jpg';
import './ResearchPage.css';

const ResearchPage = () => {
  return (
    <div className="research-container">
      <img src={researchImage} className="research-image" alt="Isabel Castanho Research" />
      <p className="research-text">
        Coming soon...
      </p>
    </div>
  )
}

export default ResearchPage
