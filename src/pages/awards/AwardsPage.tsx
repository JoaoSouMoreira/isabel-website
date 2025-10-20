import awardsImage from '../../assets/awards.jpg';
import './AwardsPage.css';

const AwardsPage = () => {
  return (
    <div className="awards-container">

      <h1 className="awards-title">Leadership</h1>
      <ul>
        <li>Advisory council member (invited) for ISTAART (Alzheimer's Association) • 2023 - 2025</li>
        <li>Team lead & strategic advisor at The Non-Conformist Scientist • 2023 - Present</li>
        <li>Co-founder & co-lead of The Neurodiversity Project at Harvard • 2021 - 2023</li>
        <li>Lead organizer (initiator) of Brain Awareness Week Exeter • 2018</li>
        <li>Scientific committee or advisory board member (invited) at international and national conferences</li>

      </ul>

      <img src={awardsImage} className="awards-image" alt="Awards" />
      <h1 className="awards-title">Selected Awards</h1>
      <ul>
        <li>Alzheimer's Association Excellence in Neuroscience Mentoring Award 2024</li>
        <li>AD/PD 2024 Junior Faculty Award</li>
        <li>Alzheimer's Association Research Fellowship</li>
        <li>BrightFocus Alzheimer's FastTrack Workshop 2021 Best Mock Grant</li>
        <li>ISTAART AAIC'18 Student Lead Volunteer</li>

      </ul>
    </div>
  )
}

export default AwardsPage
