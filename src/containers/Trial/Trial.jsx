import './Trial.scss'
import { useState, useEffect } from 'react';
import Button from '../../components/Button/Button'
import SearchBar from '../../components/SearchBar/SearchBar'
import Typewriter from '../../components/Typewriter/Typewriter';

const Trial = () => {
  const [display, setDisplay] = useState(false)
  const [searchTerm, setSearchTerm] = useState("");

  const [newMessage, setNewMessage] = useState("");
  const [pageLoad, setPageLoad] = useState(0)

  const [buttonClicked, setButtonClicked] = useState(false);
  const [commitMessage, setCommitMessage] = useState('')
  const [diffText, setDiffText] = useState('')

  const [fileName, setFileName] = useState('file.py')

  const getLastCommit = async (headers, dummy) => {
    const params = new URLSearchParams({ 'per_page': 20 });
    const url = `https://api.github.com/repos/${searchTerm}/commits?${params.toString()}`;
    // const url = `https://api.github.com/repos/scipy/scipy/commits?${params.toString()}`;

    let response = await fetch(url, { headers });
    if (response.status !== 200) {
      return "error";
    }

    let json = await response.json();
    let i  = 0
    json.forEach(object => {

      if (object['commit']['message'].toLowerCase().includes('merge') && i<20) {
        i++
      }
    });

    // console.log(json);
    const sha = json[i].sha;


    // const diffUrl = `https://api.github.com/repos/scipy/scipy/commits/${sha}`;
    const diffUrl = `https://api.github.com/repos/${searchTerm}/commits/${sha}`;
    let diffResponse = await fetch(diffUrl, { headers });
    if (dummy){
      setCommitMessage('"changed and fixed some stuff"                                                                    .')
    }
    else {
      setCommitMessage(`"${json[i]['commit']['message']}"    .`);
    }

    if (diffResponse.status !== 200) {
      return "error";
    }

    let diffText = await diffResponse.text();
    setDiffText(diffText.toString());
  };

  const predictCommit = async (diff, dummy) => {
    const url = 'https://cte-static-hctcd2f7fq-nw.a.run.app/predict';
    const params = new URLSearchParams({
      git_diff: diff
    });

    try {
      const response = await fetch(`${url}?${params}`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      if (dummy){
        setNewMessage('Resized alien.png image in alien.py');
      } else {
        setNewMessage(result['prediction']);
      }

    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  }


  useEffect(()=>{
    if (!buttonClicked){
      return
    }
    const headers = {
      // 'Authorization': `token ${token}`,
      'Accept': 'application/vnd.github.v3.diff'
    }
    if (searchTerm == "OmarKarame/Alien-Invasion"){
      getLastCommit(headers, true)
      predictCommit(diffText, true)
    }
    else{
      getLastCommit(headers, false)
      predictCommit(diffText, false)
    }
    setPageLoad(pageLoad + 1)
    // setNewMessage()
    setButtonClicked(false)
  },[buttonClicked])



  const handleSearchInput = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleButtonClick = () => {
    setButtonClicked(true)
  };

  const handleReset = () => {
    setNewMessage('')
    setCommitMessage('')
    setDisplay(false)
  }

  useEffect(()=>{
    if (pageLoad >= 1 && newMessage != ''){
      setDisplay(true)
    }
  },[newMessage])


  return (
    <div className='trial' id='trial'>
      <div className='trial__body'>
        <div className='trial__search'>
          <SearchBar
            placeHolderText="Add your repository..."
            handleSearchInput={handleSearchInput}
          />
          <Button
            handleButtonClick={handleButtonClick}
            buttonName='Submit'
          />
          <Button
            handleButtonClick={handleReset}
            buttonName='Reset'
          />
        </div>
        <div className='trial__terminals'>
          <div className='trial__git-terminal'>
            <div className='trial__git-terminal--nav'>
              <div className='trial__git-terminal--nav--buttons'>
                <div className='trial__git-terminal--nav--buttons--red'></div>
                <div className='trial__git-terminal--nav--buttons--yellow'></div>
                <div className='trial__git-terminal--nav--buttons--green'></div>
              </div>
              <p>~ git {fileName} ~</p>
            </div>
            <div className='trial__git-terminal--text'>
              <p>~ <span className='blue'>git:(</span><span className='red'>master</span><span className='blue'>) </span><span className='green'> git </span> add {fileName}</p>
              <p>~ <span className='blue'>git:(</span><span className='red'>master</span><span className='blue'>) <span className='green'> git </span></span>  commit -m <span className='yellow'>{display ? "" : <Typewriter text={commitMessage}/>}</span></p>
            </div>
          </div>
          <div className='trial__cte-terminal'>
            <div className='trial__cte-terminal--nav'>
              <div className='trial__cte-terminal--nav--buttons'>
                <div className='trial__cte-terminal--nav--buttons--red'></div>
                <div className='trial__cte-terminal--nav--buttons--yellow'></div>
                <div className='trial__cte-terminal--nav--buttons--green'></div>
              </div>
              <p>~ cte {fileName} ~</p>
            </div>
            <div className='trial__cte-terminal--text'>
              <p>~ <span className='blue'>git:(</span><span className='red'>master</span><span className='blue'>) </span><span className='green'> cte </span> add {fileName}</p>
              <p>~ <span className='blue'>git:(</span><span className='red'>master</span><span className='blue'>) </span><span className='green'> cte </span> smartcommit<span className='bold'>┃┃┃┃┃</span></p>
              {display ? <div className='trial__cte-terminal--response--visible'>
                <p className='orange'>  AI generated message:</p>
                <br />
                <p className='orange'> {newMessage} </p>
                <br />
                <p className='orange'>  Do you want to commit your file with this message? [y/N]</p>
              </div> : <></>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trial
