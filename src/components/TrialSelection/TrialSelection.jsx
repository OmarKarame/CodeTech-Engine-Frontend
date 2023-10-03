import TrialProduct from '../TrialProduct/TrialProduct'
import TerminalPNG from '../../styles/images/terminal.png'
import VscodePNG from '../../styles/images/vscode.png'
import ChromeExtensionPNG from '../../styles/images/chrome-extension.png'
import './TrialSelection.scss'
import { useState } from 'react'

const TrialSelection = ({ scrollDown }) => {
  const [commitMessageSelected, setCommitMessageSelected] = useState('--selected')
  const [docstringSelected, setDocstringSelected] = useState('')
  const [pullrequestSelected, setPullRequestSelected] = useState('')

  const toggleCommitMessage = () => {
    setCommitMessageSelected('--selected')
    setDocstringSelected('')
    setPullRequestSelected('')
    scrollDown()
  }
  const toggleDocstring = () => {
    setCommitMessageSelected('')
    setDocstringSelected('--selected')
    setPullRequestSelected('')
    scrollDown()
  }
  const togglePullRequest = () => {
    setCommitMessageSelected('')
    setDocstringSelected('')
    setPullRequestSelected('--selected')
    scrollDown()
  }

  return (
    <div className='trial-selection'>
      <div className='trial-selection--tab'>
        <div className='trial-selection--tab__info'>
          <h3>PRODUCTS</h3>
          <h5>Please select the product you would like to trail below</h5>
        </div>
        <div className='trial-selection--tab__products'>
          <TrialProduct
            className={'trial-product' + commitMessageSelected}
            isSelected={commitMessageSelected}
            image={TerminalPNG}
            imageClassName={'commit-message'}
            text={commitMessageSelected ? 'Press the button below to demonstrate how the commit message is generated' : 'Learn more'}
            toggleClassName={toggleCommitMessage}
          />
          <TrialProduct
            className={'trial-product' + docstringSelected}
            isSelected={docstringSelected}
            image={VscodePNG}
            imageClassName={'vscode'}
            text={docstringSelected ? 'Press the button below to demonstrate how the docstring is generated' : 'Learn more'}
            toggleClassName={toggleDocstring}
          />
          <TrialProduct
            className={'trial-product' + pullrequestSelected}
            image={ChromeExtensionPNG}
            isSelected={pullrequestSelected}
            imageClassName={'chrome'}
            text={pullrequestSelected ? 'Press the button below to demonstrate how the pull request is generated' : 'Learn More'}
            toggleClassName={togglePullRequest}
          />
        </div>
      </div>
    </div>
  )
}

export default TrialSelection
