import profileImage from './assets/profile.jpg'
import { SocialIcon } from 'react-social-icons'
import './App.css'

function App() {

  return (
    <>
      <div>
        <a href="https://www.linkedin.com/in/isabelcastanho/" target="_blank">
          <img src={profileImage} className="profile-image" alt="Isabel Castanho" />
        </a>
      </div>
      <h1>Hello World</h1>
      <div className="card">
        <p>
          Welcome to my personal website! I am currently working on it, so please check back later for updates.
        </p>
      </div>
      <p className="secondary-color">
        In the meantime find some of my social media links below:
      </p>
      <p className="social-media-icons">
        <SocialIcon url="https://www.linkedin.com/in/isabelcastanho/" target="_blank" />
        <SocialIcon url="https://bsky.app/profile/isabelscst.bsky.social/" target="_blank" />
        <SocialIcon url="https://www.instagram.com/isascast/" target="_blank" />
      </p>
    </>
  )
}

export default App
