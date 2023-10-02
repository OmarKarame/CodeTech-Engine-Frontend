import './ProductInfo.scss'
import Button from '../Button/Button'

const ProductInfo = ({ title, className, image, imageClassName, callToAction }) => {
  return (
    <div className={className}>
      <div className={className + '--title'}>
        <h3>{title}</h3>
      </div>
      <div className={className + '--body'}>
        <img src={image} alt="terminal image" className={imageClassName}/>
        <div className={className + '--body__info'}>
          <h3>
            {callToAction}
          </h3>
          <Button
          buttonName={'Select  →'}
          />
        </div>
      </div>
    </div>
  )
}

export default ProductInfo
