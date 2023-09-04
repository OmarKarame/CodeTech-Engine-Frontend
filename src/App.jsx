import './App.scss';
import Intro from './containers/Intro/Intro';
import Header from "./components/Header/Header"
import About from "./containers/About/About"
import Context from "./containers/Context/Context"
import Trial from "./containers/Trial/Trial"

function App() {
  return (
    <div className="app">
      <Header />
      <Intro />
      <About/>
      <Context />
      <Trial />
    </div>
  );
}

export default App;
