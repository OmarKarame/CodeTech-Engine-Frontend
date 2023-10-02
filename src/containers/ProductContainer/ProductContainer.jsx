import './ProductContainer.scss'
import ProductInfo from '../../components/ProductInfo/ProductInfo'
import terminalPNG from '../../styles/images/terminalPNG.png'
import vscodePNG from '../../styles/images/vscodePNG.png'
import pullrequestPNG from '../../styles/images/pull-requestPNG.png'
import ProductProblemSolution from '../../components/ProductProblemSolution/ProductProblemSolution'

const ProductContainer = () => {
  const commitSolutions = [
    'Eliminates vague and unclear commit descriptions',
    'Standardizes commit messages across team members',
    'Saves time on crafting meaningful commit messages',
    'Bridges language barriers for clear, concise commits'
  ]
  const docstringSolutions = [
    'Eliminates the tedious process of manually writing docstrings for every function or method',
    'Ensures consistency in documentation, making it easier for team members to understand the code',
    'Reduces the margin of error, as AI-generated docstrings are less likely to have omissions or inaccuracies',
    'Frees up developer time to focus on core coding tasks, thereby accelerating the development cycle'
  ]
  const pullrequestSolutions = [
    'Reduces the time spent on manually crafting detailed PR messages',
    'Eliminates ambiguity by generating clear and structured PR descriptions',
    'Enhances team communication by ensuring PRs convey all necessary information',
    'Minimizes errors and omissions in PRs, promoting best practices'
  ]
  const consultingSolutions = [

  ]

  return (
    <div className='product-container'>
      <ProductInfo
        title={'Commit Messages'}
        className={'product-info--commits'}
        image={terminalPNG}
        imageClassName = {'product-info--commits--body__image'}
        callToAction = {<><span className='product-info--commits--body__span'>Craft Clearer Code Now!</span> Try our AI-powered Commit Messages</>}
      />
      <ProductProblemSolution
        problem='Are you struggling with inconsistent, unclear, or time-consuming commit messages?'
        solutions={commitSolutions}
      />
      <ProductInfo
        title={'Docstrings'}
        className={'product-info--docstrings'}
        image={vscodePNG}
        imageClassName = {'product-info--docstrings--body__image'}
        callToAction = {<><span className='product-info--docstrings--body__span'>Boost Code Readability!</span> Explore our AI-driven VSCode Extension</>}
      />
      <ProductProblemSolution
        problem='Are you tired of writing comments but you still want clear and concise documentation?'
        solutions={docstringSolutions}
      />
      <ProductInfo
        title={'Pull Requests'}
        className={'product-info--pull-requests'}
        image={pullrequestPNG}
        imageClassName = {'product-info--pull-requests--body__image'}
        callToAction = {<><span className='product-info--pull-requests--body__span'>Boost Code Readability!</span> Explore our AI-driven VSCode Extension</>}
      />
      <ProductProblemSolution
        problem='Are you tired of writing comments but you still want clear and concise documentation?'
        solutions={pullrequestSolutions}
      />
    </div>

  )
}

export default ProductContainer
