import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<News key="general" category="general" />} />
          <Route exact path="/science" element={<News key="science" category="science" />} />
          <Route exact path="/sports" element={<News key="sports" category="sports" />} />
          <Route exact path="/entertainment" element={<News key="entertainment" category="entertainment" />} />
          <Route exact path="/technology" element={<News key="technology" category="technology" />} />
        </Routes>
        {/* <News /> */}
      </Router>
    </div>
  );
}

export default App;
