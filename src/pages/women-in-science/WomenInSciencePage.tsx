import womenInScienceImage1 from '../../assets/women-in-science-1.jpg';
import womenInScienceImage2 from '../../assets/women-in-science-2.jpg';
import './WomenInSciencePage.css';

const WomenInSciencePage = () => {
  return (
    <div className="women-in-science-container">
      <img src={womenInScienceImage1} width="700px" className="women-in-science-image" alt="Women In Science First Image" />
      <img src={womenInScienceImage2} width="700px" className="women-in-science-image" alt="Women In Science Second Image" />
      <p className="women-in-science-text">Coming soon...</p>
    </div>
  )
}

export default WomenInSciencePage
