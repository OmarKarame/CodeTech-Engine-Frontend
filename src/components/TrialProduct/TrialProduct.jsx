import './TrialProduct.scss'

const TrialProduct = ({ className, image, text, imageClassName, toggleClassName, isSelected }) => {
  return (
    <div className={className} onClick={toggleClassName}>
      <div  className={isSelected ? imageClassName : imageClassName + '--not-selected'}>
        <img src={image} alt=""/>
      </div>
      <p className={imageClassName + '--text'}>{text}</p>
    </div>
  )
}

export default TrialProduct
