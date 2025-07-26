import profileImage from '../../assets/profile.jpg'
import './HomePage.css'

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="home-text-container">
        <img src={profileImage} className="profile-image" alt="Isabel Castanho" />
        <div className="welcome-text">
          <h1>Welcome to my website</h1>
          <div className="card">
            <p>
              Hi. I'm a passionate neuroscientist building
              computational models to study the biology of
              neurodegenerative diseases, such as Alzheimer's.
            </p>
            <p>
              I am a strong advocate of women in science,
              and I am always happy to mentor students and peers.
              In 2024 I was recognized with the Alzheimer's
              Association Mentoring Award in Neuroscience.

            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
