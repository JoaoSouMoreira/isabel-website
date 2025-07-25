import profileImage from '../assets/profile.jpg'
import { SocialIcon } from 'react-social-icons'
import { GoogleScholarIcon } from '../components/GoogleScholarIcon'
import './HomePage.css'

function HomePage() {

  return (
    <>
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
      <p className="social-media-icons">
        <SocialIcon url="https://www.linkedin.com/in/isabelcastanho/" target="_blank" />
        <SocialIcon url="https://bsky.app/profile/isabelscst.bsky.social/" target="_blank" />
        <a className="google-scholar-icon" href="https://scholar.google.com/citations?user=Z08g3bUAAAAJ&hl=en" target="_blank"><GoogleScholarIcon /></a>
        <SocialIcon url="https://github.com/iscastanho" target="_blank" />
        <SocialIcon url="https://www.researchgate.net/profile/Isabel-Castanho-2" target="_blank" />
      </p>
    </>
  )
}

export default HomePage
