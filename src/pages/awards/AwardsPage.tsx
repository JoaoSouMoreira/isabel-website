import awardsImage from '../../assets/awards.jpg';
import './AwardsPage.css';

const AwardsPage = () => {
  return (
    <div className="awards-container">
      <img src={awardsImage} className="awards-image" alt="Awards" />
      <p className="awards-text">
        Coming soon...
      </p>
    </div>
  )
}

export default AwardsPage
