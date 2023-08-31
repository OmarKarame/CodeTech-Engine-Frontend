import AiBlob from '../../components/AiBlob';
import Box from '../../components/Box/Box';
import './BlobContainer.scss'
import { Canvas } from "@react-three/fiber";

const BlobContainer = () => {
  return (
    <div className='blob-container'>
      <Canvas>
        <AiBlob />
        {/* <Box /> */}
      </Canvas>
    </div>
  )
}

export default BlobContainer
