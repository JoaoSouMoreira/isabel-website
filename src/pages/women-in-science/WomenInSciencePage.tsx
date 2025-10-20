import womenInScienceImage1 from '../../assets/women-in-science-1.jpg';
import womenInScienceImage2 from '../../assets/women-in-science-2.jpg';
import './WomenInSciencePage.css';

import Youtube from 'react-youtube';

const WomenInSciencePage = () => {
  return (
    <div className="women-in-science-container">
      <img src={womenInScienceImage1} className="women-in-science-image" alt="Women In Science First Image" />
      <p>
        I have been very active in promoting women in science since my PhD. Currently, I am a member of the leadership team of the non-profit organization <a href="https://ncscientist.com/" target="_blank">The Non-Conformist Scientist (NCS)</a>, dedicated to empowering the next generation of women scientists and encouraging them to become leaders. At NCS, I am the team lead and co-host of the <a href="https://open.spotify.com/show/1vGVXcGEKBLgsjY3Q6w63W?si=c1437d607ca64b37" target="_blank">podcast <i>She Has a PhD</i></a> which aims to amplify the voices of inspiring women leaders in science.
      </p>
      <p>
        Listen to the interview with my first guest at <i>She Has a PhD</i>, Dr. Fiona Elwood. Dr. Elwood shares her insights on the challenges of developing treatments for neurodegenerative diseases like Parkinson's and Alzheimer's disease, how we can advance their research and development, and her aspirations and goals for the future of neuroscience.
      </p>
      <div style={{ clear: 'both' }}></div>
      <Youtube className="women-in-science-video" videoId="MeJpDiCNLWw" opts={{ width: '600', height: '338' }} />
      <img src={womenInScienceImage2} className="women-in-science-image" alt="Women In Science Second Image" />
    </div>
  )
}

export default WomenInSciencePage
