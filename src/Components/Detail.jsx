import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getZapaById } from '../Actions';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import { addToCart } from '../Actions';
import { payOneZapa } from '../Actions';
import Footer from './Footer/Footer';
import swal from 'sweetalert';
import { addToFav, removeToFav } from '../Actions';
import Reviews from './Reviews/Reviews';
import { addFavorites } from '../Actions';





import publi01 from './imagenes/detalleB01.png';
import publi02 from './imagenes/detalleB02.png';
import publi03 from './imagenes/detalleB03.png';
import publi04 from './imagenes/detalleB04.png';

// CHEQUEO DE DATO MERGE

import './CSS/Detail.css'
import './CSS/Home.css'
import CarruselPromo from './Carrusels/CarruselPromo';



export default function Details() {

   const { id } = useParams()
   const dispatch = useDispatch()
   const zapa = useSelector(state => state.detail)
   // console.log("ZAPA," , zapa);
   const user = useSelector(state => state.user)

   const carrito = useSelector(state => state.cart);
   const saveLoca = () => {
      localStorage.setItem("carrito", JSON.stringify(carrito));
      }

      const prueba123 = localStorage.getItem('user');
      const salio123 = JSON.parse(prueba123);

      
   useState(() => {
      dispatch(getZapaById(id))
   }, [id, zapa])


   const handleToCart = (e) => {
      e.preventDefault();
      //console.log(id)
      dispatch(addToCart(id));
      saveLoca()
      swal({
         icon: "success",
         title: 'Producto añadido con éxito!'
      });
   }
   const handleToFavorite = (e) => {
      e.preventDefault();
      const idproduct = id;
      const iduser = user._id;
      dispatch(addFavorites({ idproduct, iduser }));
      swal({
         icon: "success",
         title: 'Producto agregado a la lista de favoritos!'
      });
   }



   const Dinero = zapa.oferta ? (zapa.precio / 2) : zapa.precio

   return (


      <div>
         <div className="container">
            <div className="card">
               <div className="container-fliud">
                  <div className="wrapper row">
                     <div className="preview col-md-6">

                        <Carousel variant="dark">
                           <Carousel.Item>
                              <img
                                 className="imgDet d-block w-50"
                                 src={zapa.imagenes && zapa.imagenes[0]}
                                 alt="First slide"
                              />

                           </Carousel.Item>
                           <Carousel.Item>
                              <img
                                 className="imgDet d-block w-50"
                                 src={zapa.imagenes && zapa.imagenes[1]}
                                 alt="Second slide"
                              />

                           </Carousel.Item>
                           <Carousel.Item>
                              <img
                                 className="imgDet d-block w-50"
                                 src={zapa.imagenes && zapa.imagenes[2]}
                                 alt="Third slide"
                              />

                           </Carousel.Item>
                        </Carousel>

                        <ul className="preview-thumbnail nav nav-tabs">
                           <li className="active"><a data-target="#pic-1" data-toggle="tab"><img src={zapa.imagen1} /></a></li>
                           <li className="active"><a data-target="#pic-1" data-toggle="tab"><img src={zapa.imagen2} /></a></li>
                           <li><a data-target="#pic-2" data-toggle="tab"><img src={zapa.imagen3} /></a></li>

                        </ul>

                     </div>
                     <div className="details col-md-6">
                        <h3 className="product-title">{zapa.marca}</h3>
                        <p className="product-description">{zapa.modelo}</p>

                        {zapa.oferta ? (
                           <>
                              <h4 className="precioprev">PRECIO: <span>${zapa.precio}</span></h4>
                              <h4 className="price">OFERTA: <span>${Dinero}</span></h4>
                           </>
                        ) :
                           (
                              <h4 className="price">PRECIO: <span>${zapa.precio}</span></h4>

                           )

                        }

                        <h6 className="price">En Stock: <span>{zapa.inventario}</span></h6>

                        <h5>TALLES:

                           <select class="sizes">
                              <option>{zapa.talle}</option>

                           </select>
                        </h5>
                        <h5 class="colors">COLORES:
                           <select class='colorSelec'>
                              <option>{zapa.color}</option>
                           </select>
                        </h5>
                        <div class="action">
                           {Object.entries(user).length > 0 ?
                              <Button value='add' className='btnCart' variant="primary" onClick={handleToFavorite}>❤️</Button> :
                              <Button value='add' className='btnCart' variant="primary" disabled>❤️</Button>}
                           {/* <Button variant="primary">Comprar</Button> */}
                           <Button value='add' className='btnCart' variant="primary" onClick={handleToCart}
                           >Añadir al carrito</Button>


                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div>

            <CarruselPromo />
            {/* <Carousel variant="dark">
      <Carousel.Item>
      <a href='http://localhost:3000/zapatillas/63b626932bdf1dfe9c9e107a'>
        <img
          className="propa"
          src={publi01}
          alt="First slide"
        />
        </a>
        
      </Carousel.Item>
      <Carousel.Item>
        <a href='http://localhost:3000/zapatillas/63b6240d2bdf1dfe9c9d01bd'>
        <img
          className="propa"
          src={publi02}
          alt="Second slide"
          />
          </a>
        
      </Carousel.Item>
      <Carousel.Item>
      <a href='http://localhost:3000/zapatillas/63b621ea2bdf1dfe9c9c1c68'>
        <img
          className="propa"
          src={publi03}
          alt="Third slide"
        />
        </a>
        
      </Carousel.Item>

      <Carousel.Item>
      <a href='http://localhost:3000/zapatillas/63b626f22bdf1dfe9c9e3654'>
        <img
          className="propa"
          src={publi04}
          alt="Forth slide"
          />
          </a>
        
      </Carousel.Item>
    </Carousel> */}
            <div>
               <Reviews id={id} />
            </div>
         </div>
      </div>

   );
}


