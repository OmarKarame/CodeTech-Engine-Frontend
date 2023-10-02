import './ProductSelection.scss'
import ProductSelectionCard from '../../components/ProductSelectionCard/ProductSelectionCard'
import { useState } from 'react'

const ProductSelection = () => {
    const [commitMessageIsSelected, setCommitMessageIsSelected] = useState('-selected')
    const [docstringIsSelected, setDocstringIsSelected] = useState('')
    const [pullRequestIsSelected, setPullRequestIsSelected] = useState('')
    const [bundleIsSelected, setBundleIsSelected] = useState('')

    const commitMessageProductInfo = [
      'CLI tool that generates commmit messages',
      'VSCode extension that writes the commit message',
      'Unlimited number of commit messages']
    const docstringProductInfo = [
      'CLI tool that generates docstrings and comments',
      'VSCode extension that writes the docstrings',
      'Unlimited number of docstrings and comments']
    const pullRequestProductInfo = [
      'CLI tool that generates pull reuqest messages',
      'Chrome extension that writes pull request messages',
      'Unlimited number of pull request messages']
    const bundleProductInfo = [
      'Acess to all available tools that are being displayed',
      'Chrome, ClI, and VSCode Extensions',
      'Unlimited number of AI generated messages']

    const toggleCommitMessage = () => {
      setCommitMessageIsSelected('-selected')
      setDocstringIsSelected('')
      setPullRequestIsSelected('')
      setBundleIsSelected('')
    }
    const toggleDocstring = () => {
      setCommitMessageIsSelected('')
      setDocstringIsSelected('-selected')
      setPullRequestIsSelected('')
      setBundleIsSelected('')
    }
    const togglePullRequest = () => {
      setCommitMessageIsSelected('')
      setDocstringIsSelected('')
      setPullRequestIsSelected('-selected')
      setBundleIsSelected('')
    }
    const toggleBundle = () => {
      setCommitMessageIsSelected('')
      setDocstringIsSelected('')
      setPullRequestIsSelected('')
      setBundleIsSelected('-selected')
    }


  return (
    <div className='product-selection'>
      <ProductSelectionCard
        className={'product-selection-card' + commitMessageIsSelected}
        productName={'Commit Messages'}
        productInfo={commitMessageProductInfo}
        price={'$2.99'}
        toggleSelected={toggleCommitMessage}
      />
      <ProductSelectionCard
        className={'product-selection-card' + docstringIsSelected}
        productName={'Docstrings'}
        productInfo={docstringProductInfo}
        price={'$2.99'}
        toggleSelected={toggleDocstring}
      />
      <ProductSelectionCard
        className={'product-selection-card' + pullRequestIsSelected}
        productName={'Pull Requst Summaries'}
        productInfo={pullRequestProductInfo}
        price={'$2.99'}
        toggleSelected={togglePullRequest}
      />
      <ProductSelectionCard
        className={'product-selection-card' + bundleIsSelected}
        productName={'Bundle of Tools'}
        productInfo={bundleProductInfo}
        price={'$6.99'}
        toggleSelected={toggleBundle}
      />
    </div>
  )
}

export default ProductSelection
