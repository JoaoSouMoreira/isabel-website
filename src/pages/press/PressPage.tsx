import pressImage1 from '../../assets/press1.jpg';
import pressImage2 from '../../assets/press2.jpg';
import pressImage3 from '../../assets/press3.jpg';
import './PressPage.css';

const PressPage = () => {
  return (
    <div className="press-container">
      <img src={pressImage1} width="700px" className="press-image" alt="Isabel Castanho Press First Image" />
      <img src={pressImage2} width="700px" className="press-image" alt="Isabel Castanho Press Second Image" />
      <img src={pressImage3} width="700px" className="press-image" alt="Isabel Castanho Press Third Image" />
    </div>
  )
}

export default PressPage
