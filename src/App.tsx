import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'
import { GoogleScholarIcon } from './components/GoogleScholarIcon'
import { routes } from './routes'
import { Navbar } from './components/Navbar'

function App() {

  return (
    <>
      <div className="container">
        <Navbar />
        <BrowserRouter>
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                Component={route.component}
                index={route.index}
              />
            ))}
          </Routes>
        </BrowserRouter>
      </div>
      <div className="footer">
        <p className="social-media-icons">
          <SocialIcon url="https://www.linkedin.com/in/isabelcastanho/" target="_blank" />
          <SocialIcon url="https://bsky.app/profile/isabelscst.bsky.social/" target="_blank" />
          <a className="google-scholar-icon" href="https://scholar.google.com/citations?user=Z08g3bUAAAAJ&hl=en" target="_blank"><GoogleScholarIcon /></a>
          <SocialIcon url="https://github.com/iscastanho" target="_blank" />
          <SocialIcon url="https://www.researchgate.net/profile/Isabel-Castanho-2" target="_blank" />
        </p>
        <p className="copyright-text">© 2025 Isabel Castanho</p>
      </div>
    </>
  )
}

export default App
