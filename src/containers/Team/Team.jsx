import './Team.scss'
import MemberCard from '../../components/MemberCard/MemberCard'
import Omar from '../../styles/images/omar.png'
import Tomasz from '../../styles/images/tomasz.png'
import Ben from '../../styles/images/ben.png'
import Ed from '../../styles/images/ed.png'
import Ethan from '../../styles/images/ethan.png'

const Team = () => {
  return (
    <div className='team' id='team'>
      <h2>Team Members</h2>
      <div className='team--top-row'>
        <MemberCard
          classNumber='1'
          memberName='Ethan'
          memberImage={Ethan}
        />
        <MemberCard
          classNumber='2'
          memberName='Omar'
          memberImage={Omar}
        />
        <MemberCard
          classNumber='1'
          memberName='Ben'
          memberImage={Ben}
        />
      </div>
      <div className='team--bottom-row'>
        <MemberCard
          classNumber='2'
          memberName='Tomasz'
          memberImage={Tomasz}
        />
        <MemberCard
          classNumber='1'
          memberName='Ed'
          memberImage={Ed}
        />
      </div>
    </div>
  )
}

export default Team
