import './Button.scss'

const Button = ({ handleButtonClick, buttonName }) => {
  return (
    <button
      className='button'
      onClick={handleButtonClick}
    >
      {buttonName}
    </button>
  )
}

export default Button
