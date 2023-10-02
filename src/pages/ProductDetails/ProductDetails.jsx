import './ProductDetails.scss'
import Header from "../../components/Header/Header"
import ProductsDashboard from '../../containers/ProductsDashboard/ProductsDashboard'
import ProductContainer from '../../containers/ProductContainer/ProductContainer'
import ProductSelection from '../../containers/ProductSelection/ProductSelection'

const ProductDetails = () => {
  return (
    <div className='product-details'>
      <Header />
      <ProductsDashboard />
      <ProductContainer />
      <ProductSelection />
    </div>
  )
}

export default ProductDetails
