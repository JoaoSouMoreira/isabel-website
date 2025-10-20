import pressImage1 from '../../assets/press1.jpg';
import pressImage2 from '../../assets/press2.jpg';
import pressImage3 from '../../assets/press3.jpg';
import './PressPage.css';
import Youtube from 'react-youtube';

const PressPage = () => {
  return (
    <div className="press-container">
      <h1 className="press-title">Press & Media</h1>

      <Youtube className="press-video" videoId="lUrHMYi_Jrg" opts={{ width: '600', height: '338' }} />
      <Youtube className="press-video" videoId="jmY20bHwsow" opts={{ width: '600', height: '338' }} />
      <Youtube className="press-video" videoId="YL28QqrV14E" opts={{ width: '600', height: '338' }} />
      <Youtube className="press-video" videoId="PghjSzaamnc" opts={{ width: '600', height: '338' }} />

      <img src={pressImage1} width="600px" className="press-image" alt="Isabel Castanho Press First Image" />
      <img src={pressImage2} width="600px" className="press-image" alt="Isabel Castanho Press Second Image" />
      <img src={pressImage3} width="600px" className="press-image" alt="Isabel Castanho Press Third Image" />
    </div>
  )
}

export default PressPage
