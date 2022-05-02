import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import Communities from './components/Communities';
//import {Provider} from 'react-redux'
//import store from './redux/store'


function App() {
  return (
   
    <div className="App">
     {/*  <Provider store={store}>*/}
      <BrowserRouter>
      <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path="/communities" element= {<Communities/>}/>
      </Routes>
      </BrowserRouter>
      {/* </Provider>*/}
    </div>
  );
}

export default App;
