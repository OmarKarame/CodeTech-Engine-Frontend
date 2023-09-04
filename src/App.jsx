import './App.scss';
import Intro from './containers/Intro/Intro';
import Header from "./components/Header/Header"
import About from "./containers/About/About"

function App() {
  return (
    <div className="app">
      <Header />
      <Intro />
      <About/>
    </div>
  );
}

export default App;
