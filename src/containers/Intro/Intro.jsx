import './Intro.scss'
import BlobContainer from "../BlobContainer/BlobContainer"
import Title from "../../components/Title/Title"
import Background from "../../styles/images/intro-background.PNG"

const Intro = () => {
  return (
    <div className='intro' id='home'>
      <Title
        primaryTitle="CODETECH ENGINE"
        secondaryTitle="AI solutions built for developers"
        className='intro--title'
      />
      <BlobContainer />
      <img src={Background} alt='intro-background' className='intro--background'/>
    </div>
  )
}

export default Intro
