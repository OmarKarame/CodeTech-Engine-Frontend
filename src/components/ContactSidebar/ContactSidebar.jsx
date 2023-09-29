import './ContactSidebar.scss'
import LinkedinPNG from '../../styles/images/linkedin-icon.png'
import TwitterPNG from '../../styles/images/twitter-icon.png'
import InstagramPNG from '../../styles/images/instagram-icon.png'

const ContactSidebar = () => {
  return (
    <div className='contact-sidebar'>
      <p>Follow us here:</p>
      <div className='contact-sidebar--components'>
        <div className='contact-sidebar--components--component'>
          <img src={LinkedinPNG} alt="linkedin icon" className='contact-sidebar--components--component__linkedin'/>
        </div>
        <div className='contact-sidebar--components--component'>
          <img src={TwitterPNG} alt="linkedin icon" className='contact-sidebar--components--component__twitter'/>
        </div>
        <div className='contact-sidebar--components--component'>
          <img src={InstagramPNG} alt="linkedin icon" className='contact-sidebar--components--component__instagram'/>
        </div>
      </div>
    </div>
  )
}

export default ContactSidebar
