import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn'
import Signup from './pages/SignUp'
import Food from './pages/Food'
import Grocery from './pages/Grocery'
import Chat from './pages/Chat.jsx'
import Meds from './pages/Meds'
import Footer from './components/Footer.jsx'
import Mpesapayment from './pages/Mpesapayment.jsx'
import Foodlanding from './pages/Foodlanding.jsx'
import About from './pages/About.jsx'

import Fashion from './pages/Fashionlanding.jsx'
import Medlanding from './pages/Medlanding.jsx'
import Cosmetics from './pages/Cosmetics.jsx'
import Vitamins from './pages/Vitamins.jsx';
import Beverages from './pages/Beeverages.jsx'
import Mensware from './pages/Mensware.jsx'
import Womensware from './pages/Womwnsware.jsx'
import Shoes from './pages/Shoes.jsx'
import Addfoods from './pages/Addfood.jsx';
import AddMedicines from './pages/AddMeds.jsx';
import AddMens from './pages/AddMens.jsx';
import AddWomens from './pages/Addwomens.jsx';
import AddShoe from './pages/Addshoes.jsx';
import AddGrocery from './pages/Addgroceries.jsx';
import AddBeverage from './pages/Addbeverages.jsx';
import AddVitamin from './pages/Addvitamins.jsx';
import AddCosmetic from './pages/Addcosmetics.jsx';
import Mpesagrocery from './pages/Mpesagrocery.jsx';
import Mpesabeverage from './pages/Mpesabeverage.jsx';
import Mpesamens from './pages/Mpesamens.jsx';
import Mpesawomens from './pages/Mpesawomens.jsx';
import Mpesashoes from './pages/Mpesashoes.jsx';
import Mpesameds from './pages/Mpesameds.jsx';
import Mpesacosmetic from './pages/Mpesacosmetics.jsx';
import Mpesavitamin from './pages/Mpesavitamin.jsx';
import "bootstrap/dist/js/bootstrap.min.js";


function App() {
  return (
    
<Router>
    <div className="App">
      

   
        <Navbar/>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/SignIn'element={<SignIn/>}/>
          <Route path='/Signup' element={<Signup/>}/>
          <Route path='/Food' element={<Food/>}/>
          <Route path='/Grocery' element={<Grocery/>}/>
          <Route path='/Meds' element={<Meds/>}/>
          <Route path='/Mpesapayment' element={<Mpesapayment/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/chat' element={<Chat/>}/>
          
          <Route path='/foodlanding' element={<Foodlanding/>}/>
          <Route path='/fashionlanding' element={<Fashion/>}/>
          <Route path='/medlanding' element={<Medlanding/>}/>
          <Route path='/cosmetics' element={<Cosmetics/>}/>
          <Route path='/vitamins' element={<Vitamins/>}/>
          <Route path='/beverages' element={<Beverages/>}/>
          <Route path='/mensware' element={<Mensware/>}/>
          <Route path='/womensware' element={<Womensware/>}/>
          <Route path='/shoes' element={<Shoes/>}/>
          <Route path='/addfood' element={<Addfoods/>}/>
          <Route path='/addmedicine' element={<AddMedicines/>}/>
          <Route path='/addmens'element={<AddMens/>}/>
          <Route path='/addwomens' element={<AddWomens/>}/>
          <Route path='/addshoes' element={<AddShoe/>}/>
          <Route path='/addgroceries' element={<AddGrocery/>}/>
          <Route path='/addbeverages' element={<AddBeverage/>}/>
          <Route path='/addvitamins' element={<AddVitamin/>}/>
          <Route path='/addcosmetic' element={<AddCosmetic/>}/>
          <Route path='/mpesagrocery' element={<Mpesagrocery/>}/>
          <Route path='/mpesabeverage' element={<Mpesabeverage/>}/>
          <Route path='/mpesamens' element={<Mpesamens/>}/>
          <Route path='/mpesawomens' element={<Mpesawomens/>}/>
          <Route path='/mpesashoes' element={<Mpesashoes/>}/>
          <Route path='/mpesameds' element={<Mpesameds/>}/>
          <Route path='/mpesacosmetic' element={<Mpesacosmetic/>}/>
          <Route path='/mpesavitamin' element={<Mpesavitamin/>}/>
        </Routes>
   
      <Footer/>
    </div>
</Router>
  );
}

export default App;


