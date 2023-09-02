import './Header.scss'

const Header = () => {
  return (
    <div className='header'>
      <p className='header--cte'><span className='header--cte__e'>c</span>Te</p>
      <div className='header--navbar-links'>
        <p>Home</p>
        <p>About</p>
        <p>Trial</p>
        <p>Contact Us</p>
      </div>
    </div>
  )
}

export default Header
