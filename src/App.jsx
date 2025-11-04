import { createContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import ProductList from './Product'
import Register from './Register'
import Login from './Login'
import { ToastContainer } from 'react-toastify'
import AddToCart from './Addtocart'
  
export const userContext =  createContext();
function App() {
   
  const [email, setEmail] = useState('');
  const [login,setLogin] = useState('false');
  const [cart,setCart] = useState(()=>{
  return  JSON.parse( localStorage.getItem("name")) || []
  });

  useEffect(()=>{
    localStorage.setItem("name",JSON.stringify(cart))
  },[cart])


  return (
    <>
    <ToastContainer />
      <BrowserRouter basename='/54'>
      <userContext.Provider value={{email,setEmail,login,setLogin,cart,setCart}}>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
         <Route path='/Product' element={<ProductList></ProductList>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
         <Route path='/addtocart' element={<AddToCart></AddToCart>}></Route>

      </Routes>
      </userContext.Provider>
      </BrowserRouter>
    </>
  )
}

export default App
