import './Intro.scss'
import BlobContainer from "../BlobContainer/BlobContainer"
import Title from "../../components/Title/Title"

const Intro = () => {
  return (
    <div className='intro'>
      <Title
        primaryTitle="COMMIT TO EXCELLENCE"
      />
      <BlobContainer />
    </div>
  )
}

export default Intro
