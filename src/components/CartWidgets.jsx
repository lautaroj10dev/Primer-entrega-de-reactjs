import { useState, useEffect } from 'react';

const CartWidgets = () => {
  const [cantidad, setCantidad] = useState(0);

  useEffect(() => {

    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    
    const totalProductos = carrito.reduce((sum, item) => sum + item.cantidad, 0);
    
    setCantidad(totalProductos);
  }, []);

  return (
    <div>
      <img src="/cdc.png" alt="Carrito" className="carrito" />
      <span style={{ color: "brown", fontWeight: "bold" }}>
        {cantidad}
      </span>
    </div>
  );
};

export default CartWidgets;