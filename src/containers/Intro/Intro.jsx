import './Intro.scss'
import BlobContainer from "../BlobContainer/BlobContainer"
import Title from "../../components/Title/Title"

const Intro = () => {
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
      <div className='intro--line-one'></div>
      <div className='intro--line-two'></div>
    </div>
  )
}

export default Intro
