import './ProductProblemSolution.scss'
import targetPNG from '../../styles/images/targetPNG.png'

const ProductProblemSolution = ({ problem, solutions }) => {
  return (
    <div className='product-problem-solution'>
      <div className='product-problem-solution--problem'>
        <h3>{problem}</h3>
      </div>
      <div className='product-problem-solution--solutions'>
        {solutions.map((solution, index) => (
          <div className='product-problem-solution--solutions__solution'>
            <img src={targetPNG} alt="target icon" className='product-problem-solution--solutions__solution__icon'/>
            <h3 key={index}>{solution}</h3>
          </div>
              ))}
      </div>
    </div>
  )
}

export default ProductProblemSolution
