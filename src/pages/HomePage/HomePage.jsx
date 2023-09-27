import './HomePage.scss'
import Intro from '../../containers/Intro/Intro'
import About from "../../containers/About/About"
import Context from "../../containers/Context/Context"
import Trial from "../../containers/Trial/Trial"
import Header from "../../components/Header/Header"

const HomePage = () => {
  return (
    <div className='home-page'>
      <Intro />
      <Header />
      <About />
      <Context />
      <Trial />
    </div>
  )
}

export default HomePage
