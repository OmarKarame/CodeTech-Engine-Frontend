import './App.scss';
import Intro from './containers/Intro/Intro';
import Header from "./components/Header/Header"

function App() {
  return (
    <div className="app">
      <Header />
      <Intro />
    </div>
  );
}

export default App;
