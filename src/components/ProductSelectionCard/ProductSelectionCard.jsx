import './ProductSelectionCard.scss'

const ProductSelectionCard = ({ price, productName, productInfo, className, toggleSelected }) => {
  return (
    <div className={className} onClick={toggleSelected}>
      <div className={className + '--header'}>
        <h5>{productName}</h5>
      </div>
      <h2>{price}<span>/month</span></h2>
      <div className={className + '--list'}>{productInfo.map((info, index) => (
            <h4 key={index} className={className + '--list__item'}>{info}</h4>
              ))}</div>
      <div className={className + '--footer'}>

      </div>
    </div>
  )
}

export default ProductSelectionCard
