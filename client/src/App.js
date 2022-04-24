// import logo from './logo.svg';
import {Route, Routes} from "react-router-dom";
import './App.css';
import Navbar from '../src/Components/NavBar/Navbar';
import PetEdit from './Components/PetEdit';
import AppendData from './Components/AppendData/AppendData';
import LoginPg from './Components/Login/LoginPg';
import AddCat2 from './Components/AddCat/AddCat2';
// import LandingPage from './Components/LandingPage/LandingPage';
import Index from './Components/NavBarMain/NavBarMain';
import AddCat from './Components/AddCat/AddCat';


function App() {
  return (
    <div className="App">
      {/* <h2>Pets</h2> */}
      <Navbar/>
      {/* <LandingPage/> */}
      {/* <h1>after</h1> */}


      <Routes>
      {/* <Route path='/home' element={}/> */}
        <Route path='addPet/:id/edit' element={<PetEdit/>}/>
        <Route path='/home' element={<AppendData/>}/>
        <Route path='/login' element={<LoginPg/>}/>
        <Route path='/add_details_one' element={<AddCat/>}/>
        <Route path='/add_details_two' element={<AddCat2/>}/>
        

        <Route path='/home' element={<Index/>}/>
      </Routes>
    </div>
  );
}

export default App;
