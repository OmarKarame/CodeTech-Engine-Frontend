import './Trial.scss'
import { useState, useEffect } from 'react';
import Button from '../../components/Button/Button'
import SearchBar from '../../components/SearchBar/SearchBar'
import neuralNetworkStart from '../../styles/images/neural-network-start.png'
import neuralNetworkGif from '../../styles/images/ezgif.com-crop.gif'
import neuralNetworkEnd from '../../styles/images/neural-network-end.png'

const Trial = () => {
  const images = [neuralNetworkStart, neuralNetworkGif, neuralNetworkEnd]
  const [imageDisplayed, setImageDisplayed] = useState(images[0])
  const [searchTerm, setSearchTerm] = useState("");

  const [newMessage, SetNewMessage] = useState("");

  const [buttonClicked, setButtonClicked] = useState(false);
  const [commitMessage, setCommitMessage] = useState('')
  const [diffText, setDiffText] = useState('')

  const token = process.env.REACT_APP_TOKEN

  const getLastCommit = async (headers) => {
    const params = new URLSearchParams({ 'per_page': 1 });
    // const url = `https://api.github.com/repos/${searchTerm}/commits?${params.toString()}`;
    const url = `https://api.github.com/repos/OmarKarame/commit-to-excellence-frontend/commits?${params.toString()}`;

    let response = await fetch(url, { headers });
    if (response.status !== 200) {
      return "error";
    }

    let json = await response.json();
    const sha = json[0].sha;

    const diffUrl = `https://api.github.com/repos/OmarKarame/commit-to-excellence-frontend/commits/${sha}`;
    // const diffUrl = `https://api.github.com/repos/${searchTerm}/commits/${sha}`;
    let diffResponse = await fetch(diffUrl, { headers });
    setCommitMessage(json[0]['commit']['message']);

    if (diffResponse.status !== 200) {
      return "error";
    }

    let diffText = await diffResponse.text();
    setDiffText(diffText);
    console.log(diffText)
  };

  useEffect(()=>{
    if (!buttonClicked){
      return
    }
    const headers = {
      // 'Authorization': `token ${token}`,
      'Accept': 'application/vnd.github.v3.diff'
    }
    getLastCommit(headers)
    setButtonClicked(false)
  },[buttonClicked])


  const handleSearchInput = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleButtonClick = () => {
    setImageDisplayed(images[1])
    setButtonClicked(true)
  };


  return (
    <div className='trial' id='trial'>
      <h2>
        Trial
      </h2>
      <div className='trial__body'>
        <div className='trial__search'>
          <SearchBar
            placeHolderText="Add your repository..."
            handleSearchInput={handleSearchInput}
          />
          <Button
            handleButtonClick={handleButtonClick}
          />
        </div>
        <div className='trial__headers'>
        </div>
        <div className='trial__computation'>
          <h5>{commitMessage}</h5>
          <h5>{newMessage}</h5>
        </div>
      </div>
    </div>
  )
}

export default Trial
