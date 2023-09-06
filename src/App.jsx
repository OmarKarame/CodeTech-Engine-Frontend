import './App.scss';
import Intro from './containers/Intro/Intro';
import Header from "./components/Header/Header"
import About from "./containers/About/About"
import Context from "./containers/Context/Context"
import Trial from "./containers/Trial/Trial"
import Team from "./containers/Team/Team"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
      <Router>
        <Routes>
         <Route path="/" element={
          <div className="app">
            <Header />
            <Intro />
            <About />
            <Context />
            <Trial />
            <Team />
            {/* <AboutMeInterests /> */}
          </div>
         } />
        </Routes>
      </Router>
  );
}

export default App;
