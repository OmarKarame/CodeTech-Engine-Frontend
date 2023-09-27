import './HomePage.scss'
import Intro from '../../containers/Intro/Intro'
import About from "../../containers/About/About"
import Context from "../../containers/Context/Context"
import Trial from "../../containers/Trial/Trial"
import HomeHeader from '../../components/HomeHeader/HomeHeader'

const HomePage = () => {
  return (
    <div className='home-page'>
      <Intro />
      <HomeHeader />
      <About />
      <Context />
      <Trial />
    </div>
  )
}

export default HomePage
