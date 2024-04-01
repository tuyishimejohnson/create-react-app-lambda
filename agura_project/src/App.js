import './index.css';
import './App.css';
import HomePage from './components/HomePage';
import Layout from './components/Layout';
import About from './components/About';
import Services from './components/Services';
import Contacts from './components/Contacts';
import { Route, Routes } from 'react-router-dom';
import FooterForm from './components/FooterForm';


function App() {
  return (
    <div>
      <Layout />

      <Routes>
        <Route path='/' element={ < HomePage /> }/>
        <Route path='/About' element={ < About /> }/>
        <Route path='/Services' element={ < Services /> }/>
        <Route path='/FooterForm' element={ < FooterForm /> }/>
      
      </Routes>    
     
      <Contacts />
    </div>
  );
}

export default App;
