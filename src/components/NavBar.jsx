import { Link } from 'react-router-dom';
import '../assets/css/NavBar.css';
import { useState, useEffect } from 'react';
import { FiShoppingCart } from 'react-icons/fi'; // Importa el ícono

const NavBar = () => {
  const [cantidad, setCantidad] = useState(0);

  useEffect(() => {
    const actualizarCantidad = () => {
      const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
      const totalProductos = carrito.reduce((sum, item) => sum + item.cantidad, 0);
      setCantidad(totalProductos);
    };

    actualizarCantidad();
    window.addEventListener('carritoActualizado', actualizarCantidad);

    return () => window.removeEventListener('carritoActualizado', actualizarCantidad);
  }, []);

  return (
    <nav className="nav-container">
      <Link to="/" className="anchor-nav">
        <img src={'../MyLCoffee.png'} alt='M&L' className='logo'/>
      </Link>

      <Link to="/categoria/Bebidas" className="anchor-nav">Bebidas</Link>
      <Link to="/categoria/Desayunos" className="anchor-nav">Desayunos</Link>
      <Link to="/categoria/Almuerzos" className="anchor-nav">Almuerzos</Link>
      <Link to="/categoria/Meriendas" className="anchor-nav">Meriendas</Link>
      
      <Link to="/carrito" className="carrito-link">
        <FiShoppingCart className="carrito-icon" />
        <span className="carrito-cantidad">{cantidad}</span>
      </Link>
    </nav>
  );
};

export default NavBar;