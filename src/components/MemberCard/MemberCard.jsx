import './MemberCard.scss'

const MemberCard = ({ classNumber, memberName, memberImage }) => {
  return (
    <div className='member-card'>
      <div className={'member-card__background' + classNumber}>
      </div>
      <img src={memberImage} alt="member image" className='member-card__image'/>
      <h4>{memberName}</h4>
    </div>
  )
}

export default MemberCard
