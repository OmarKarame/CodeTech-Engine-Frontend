import './Button.scss'

const Button = ({ handleButtonClick }) => {
  return (
    <button
      className='button'
      onClick={handleButtonClick}
    >
      Submit
    </button>
  )
}

export default Button
