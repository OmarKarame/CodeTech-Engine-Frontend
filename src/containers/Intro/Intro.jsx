import './Intro.scss'
import BlobContainer from "../BlobContainer/BlobContainer"
import Title from "../../components/Title/Title"
import TrialSelection from '../../components/TrialSelection/TrialSelection'

const Intro = ({ scroll }) => {
  return (
    <div className='intro' id='home'>
      <div className='intro--info'>
        <Title
          primaryTitle="CODETECH ENGINE"
          secondaryTitle="AI solutions built for developers and businesses"
          className='intro--title'
        />
        <BlobContainer />
      </div>
      <TrialSelection
        scrollDown={scroll}
      />
    </div>
  )
}

export default Intro
