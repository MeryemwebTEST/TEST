import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header.jsx'
import Acceuil from './components/acceuil.jsx'
import Contact from './components/contact.jsx'
import Service from './components/service.jsx'
import Login from './components/login.jsx'
import CartDetail from "./cartDetail.jsx"
import './App.css'
import { useState } from 'react'
import Data from './shop.js';
import CartDrop from './components/cartDrop.jsx'
import favoritDrop from './components/favoritDrop.jsx'
import FavoritDrop from './components/favoritDrop.jsx'


function App() {
  const [cart,setCart]=useState([])
  const [fav,setfav]=useState([])
    const [etat,setetat]=useState(false)
     const [etat2,setetat2]=useState(false)


  function addToCart(item){
      const product=cart.find(elm=>elm.item.id)
      console.log(product)
      if(product){
        console.log("exists")
        setCart([...cart.map(elm=>elm.id!=item.id?elm:{...elm,"quantite":elm.quantite+1})])
      }else{
         setCart([...cart,{...item,"quantite":1}])
      }
        console.log(cart)
    }
   const addToFavorit=(item)=>{
        setfav([...fav,item])

    console.log(item)
   }
   function setDropCart(){
    setetat(!etat)
   }
   function setDropfav(item){
    setetat2(!etat2)

   }
  

  return (
    <>
      <BrowserRouter>
        <Header cart={cart} fav={fav} setDropCart={setDropCart} setDropfav={setDropfav}/>
        <Routes>
          <Route path='/' element={<Acceuil addToCart={addToCart} addToFavorit={addToFavorit}/>} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/service' element={<Service />} />
          <Route path='/login' element={<Login />} />
          <Route path='/detail/:id' element={<CartDetail/>} />
        </Routes>
      </BrowserRouter>
      {etat?<CartDrop Cart={cart} />:''}
      {etat2?<FavoritDrop  fav={fav}/>:""}
    </>
  )
} 
export default App;