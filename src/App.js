import {Hero, About, Experience, Portfolio, Footer} from './containers'
import {Navbar } from './components'
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Experience/>
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
