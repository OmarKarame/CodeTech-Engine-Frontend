import './ProductDetails.scss'
import Header from "../../components/Header/Header"
import ProductsDashboard from '../../containers/ProductsDashboard/ProductsDashboard'

const ProductDetails = () => {
  return (
    <div className='product-details'>
      <Header />
      <ProductsDashboard />
    </div>
  )
}

export default ProductDetails
