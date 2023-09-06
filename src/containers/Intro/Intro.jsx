import './Intro.scss'
import BlobContainer from "../BlobContainer/BlobContainer"
import Title from "../../components/Title/Title"

const Intro = () => {
  return (
    <div className='intro' id='home'>
      <Title
        primaryTitle="COMMIT TO EXCELLENCE"
        secondaryTitle="AI solutions built for developers"
        className='intro--title'
      />
      <BlobContainer />
    </div>
  )
}

export default Intro
