import './App.css';
import {BrowserRouter as Router ,Routes, Route} from "react-router-dom"
import Navigation from './components/Navigation';
 import HomePage from './components/HomePage';
import SinglePage from './Pages/SinglePage';
function App() {
  return (
    <div className='App'> 
    <Router>
      <Navigation/>
      <div className='showPage'>
      <Routes>
        <Route exact path='/' element={<HomePage/>} ></Route>
        <Route exact path='/singleshow/:id'  element={<SinglePage/>} ></Route>
        </Routes>
        </div>
    </Router>
    </div>
  );
}
export default App;