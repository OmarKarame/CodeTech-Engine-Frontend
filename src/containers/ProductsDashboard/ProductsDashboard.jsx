import './ProductsDashboard.scss'
import ProductCard from '../../components/ProductCard/ProductCard'
import ContactSidebar from '../../components/ContactSidebar/ContactSidebar'
import TerminalPNG from '../../styles/images/terminal.png'
import VSCodePNG from '../../styles/images/vscode.png'
import ChatBotPNG from '../../styles/images/consultingPNG.png'
import ChromeExtensionPNG from '../../styles/images/chrome-extension.png'
import Button from '../../components/Button/Button'

const ProductsDashboard = () => {
  return (
    <div className='product-dashboard'>
      <div className='product-dashboard--products'>
        <ProductCard
          cardId='product-dashboard--products__terminal'
          icon={TerminalPNG}
          title='Commit Messages'
          description='Command line interface tool that generates AI messages'
          iconClassName='product-card--icon-section__terminal'
        />
        <ProductCard
          cardId='product-dashboard--products__docstrings'
          icon={VSCodePNG}
          title='Docstrings'
          description='VSCode extension that generates AI comments'
          iconClassName='product-card--icon-section__vscode'
        />
        <ProductCard
          cardId='product-dashboard--products__pull-request'
          icon={ChromeExtensionPNG}
          title='Pull Requests'
          description='Chrome extension that generates PR message'
          iconClassName='product-card--icon-section__chatbot'
        />
        <ProductCard
          cardId='product-dashboard--products__consulting'
          icon={ChatBotPNG}
          title='Consulting'
          description='Data and AI driven solutions to your business problems'
          iconClassName='product-card--icon-section__consulting'
        />
      </div>
      <div className='product-dashboard--description'>
        <div className='product-dashboard--description__top'>
          <h2>Elevate your work with CodeTech Engine</h2>
          <h5>Step into the future with CodeTech Engine, where AI meets work efficiency. Our suite of advanced tools is designed to streamline and elevate your development process and business needs.</h5>
          <Button
            buttonName={'Explore All →'}
          />
        </div>
        <div className='product-dashboard--description__bottom'>
          <ContactSidebar />
        </div>
      </div>
    </div>
  )
}

export default ProductsDashboard
