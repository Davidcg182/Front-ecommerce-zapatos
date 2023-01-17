import publi01 from '../imagenes/detalleB01.png';
import publi02 from '../imagenes/detalleB02.png';
import publi03 from '../imagenes/detalleB03.png';
import publi04 from '../imagenes/detalleB04.png';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';

export default function CarruselFav(){

  return(
<div>
      <Carousel variant="dark">
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
    </Carousel>
</div>
    )  
}