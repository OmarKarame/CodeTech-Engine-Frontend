import './ProductCard.scss'

const ProductCard = ({ cardId, icon, iconClassName, title, description }) => {
  return (
    <div className='product-card' id={cardId}>
      <div className='product-card--icon-section'>
        <img src={icon} alt="terminal png" className={iconClassName}/>
      </div>
      <div className='product-card--info'>
        <h5>{title}</h5>
        <h6>{description}</h6>
      </div>
    </div>
  )
}

export default ProductCard
