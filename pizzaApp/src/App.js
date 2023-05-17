import './App.scss';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Problem } from './pages/Problem/problem';
import { MainPage } from './pages/mainpage/Main';


const App = () => {

  return (
    <Router>
      <div className="App">
        <Routes>
            <Route path='/' element={<MainPage />}/>
            <Route path='/problem' element={<Problem />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;



