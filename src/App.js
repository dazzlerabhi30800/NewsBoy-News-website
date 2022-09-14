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
          <Route path="/" element={<News key="general" category="general" />} />
          <Route path="/science" element={<News key="science" category="science" />} />
          <Route path="/sports" element={<News key="sports" category="sports" />} />
          <Route path="/entertainment" element={<News key="entertainment" category="entertainment" />} />
          <Route path="/technology" element={<News key="technology" category="technology" />} />
        </Routes>
        {/* <News /> */}
      </Router>
    </div>
  );
}

export default App;
