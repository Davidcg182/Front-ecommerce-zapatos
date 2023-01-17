import React from 'react'
import { CartItem } from './CartItem';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import './ShopCart.css'
import Button from 'react-bootstrap/Button';



export const ShopCart = () => {

  const cart = useSelector(state => state.cart);


  return (
    <div>
      <NavBar />
    
    <h3>Carrito de compras</h3>
      
      {cart.length === 0 ? (

        <div>
          <p>El carrito esta vacio </p>

          <Link to={'/home'}>Regresar</Link>
          
        </div>
      ) : 
        (cart.map(e =>
          <CartItem item={e} />)
      )
      }
     
     
     
    </div>

          
  )
}

export default ShopCart;
