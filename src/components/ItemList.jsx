import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ItemCard from './ItemCard';

const ItemList = ({ productos }) => {
 const handleAddToCart = (producto) => {
  const carritoActual = JSON.parse(localStorage.getItem('carrito')) || [];

  const productoExistente = carritoActual.find(item => item.id === producto.id);

  if (productoExistente) {
    productoExistente.cantidad += 1;
  } else {
    carritoActual.push({ ...producto, cantidad: 1 });
  }

  localStorage.setItem('carrito', JSON.stringify(carritoActual));
  console.log('Producto Agregado:', producto.nombre);

  window.dispatchEvent(new Event('carritoActualizado'));
};
  return (
    <div className="item-list-container">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >
        {productos.map(producto => (
          <SwiperSlide key={producto.id} className="swiper-slide">
            <ItemCard
              producto={producto}
              onAddToCart={handleAddToCart}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ItemList;