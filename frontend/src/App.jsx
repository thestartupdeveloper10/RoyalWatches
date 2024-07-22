import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import './App.css';
import Cart from './component/pages/Cart';
import Hero from './component/pages/Hero';
import Product from './component/pages/Product';
import Product_List from './component/pages/Product_List';
import MenHero from './component/pages/MenHero';
import Login from './component/pages/Login';
import SignUp from './component/pages/SignUp';
import WomenHero from './component/pages/WomenHero';
import NotFound from './component/pages/NotFound';
import SingleBlog from './component/pages/SingleBlog';
import Contact from './component/pages/Contact';
import Wishlist from './component/pages/Wishlist';
import UserProfile from './component/pages/UserProfile';
import ProtectedRoute from './ProtectedRoute';
import ScrollToTop from './ScrollToTop';
import Features from './component/pages/Features';
import About from './component/pages/About';
import Instructions from './component/pages/Instructions';
import TermsAndConditions from './component/pages/TermsAndConditions';
import DeliveryDetails from './component/pages/DeliveryDetails';

function App() {
  const user = useSelector((state) => state.user.currentUser);


  return (
    <>
      <Router>
        <ScrollToTop/>
        <Routes>
          <Route path='/' element={<Hero/>}></Route>
          <Route path='/products' element={<Product_List/>}></Route>
          <Route path='/products/:category' element={<Product_List/>}></Route>
          <Route path='/product/:id' element={<Product/>}></Route>
          <Route path='/blogs' element={<SingleBlog/>}></Route>
          <Route path='/features' element={<Features/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/instructions' element={<Instructions/>}></Route>
          <Route path='/terms' element={<TermsAndConditions/>}></Route>
          <Route path='/delivery' element={<DeliveryDetails/>}></Route>
          <Route 
            path='/cart' 
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          ></Route>
          <Route 
            path='/wishlist' 
            element={
              <ProtectedRoute>
                <Wishlist />
              </ProtectedRoute>
            }
          ></Route>
          <Route path='/Men' element={<MenHero/>}></Route>
          <Route path='/Women' element={<WomenHero/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/userprofile' element={<UserProfile/>}></Route>
          <Route 
            path='/login' 
            element={user ? (<Navigate replace to="/" />) : (<Login />)}
          ></Route>
          <Route path='/signup' element={<SignUp/>}></Route>
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
