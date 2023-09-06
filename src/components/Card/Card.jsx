import './Card.scss'
import gitLogo from '../../styles/images/git-icon-logo-white.png'
import cteLogo from '../../styles/images/cte-logo-white.png'

const Card = ({ cardClassName, isCTE }) => {
  if(isCTE){
    return (
      <div className={cardClassName}>
        <h2>cte</h2>
        <p><span>cte</span> status</p>
        <p><span>cte</span> add file_name</p>
        <p><span>cte</span> smartcommit</p>
        <p><span>cte</span> push origin branch_name</p>
        <img src={cteLogo} alt="Commit to Excellence Logo" className={cardClassName+'__logo'}/>
      </div>
    )
  }
  else{
    return (
      <div className={cardClassName}>
        <img src={gitLogo} alt="Git Logo" className={cardClassName+'__logo'}/>
        <p><span>git</span> status</p>
        <p><span>git</span> add file_name</p>
        <p><span>git</span> commit -m "message"</p>
        <p><span>git</span> push origin branch_name</p>
        <h2>git</h2>
      </div>
    )
  }
}

export default Card
