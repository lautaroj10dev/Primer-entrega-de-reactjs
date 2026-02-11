import { useState } from 'react';
import "../assets/css/ItemDetail.css";

const ItemDetail = ({ producto }) => {
    const [cantidad, setCantidad] = useState(1);

    const handleRestar = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    };

    const handleSumar = () => {
        setCantidad(cantidad + 1);
    };

    const handleAddToCart = () => {
        const carritoActual = JSON.parse(localStorage.getItem('carrito')) || [];

        const productoExistente = carritoActual.find(item => item.id === producto.id);

        if (productoExistente) {
            productoExistente.cantidad += cantidad;
        } else {
            carritoActual.push({ ...producto, cantidad });
        }
        
        localStorage.setItem('carrito', JSON.stringify(carritoActual));

        console.log(`${cantidad} ${producto.nombre} agregados al carrito`)
        setCantidad(1);
    };

    return (
        <div className="item-detail">
            <div className="item-detail-image">
                <img src={producto.imagen} alt={producto.nombre} />
            </div>

            <div className="item-detail-info">
                <h1>{producto.nombre}</h1>
                <p className="descripcion">{producto.descripcion}</p>
                
                <div className="precio-stock">
                    <p className="precio">${producto.precio}</p>
                </div>

                <div className="cantidad-selector">
                    <button onClick={handleRestar} className="btn-cantidad">-</button>
                    <span className="cantidad-valor">{cantidad}</span>
                    <button onClick={handleSumar} className="btn-cantidad">+</button>
                </div>

                <button 
                    onClick={handleAddToCart} 
                    className="btn-add-to-cart"
                >
                    Agregar al carrito
                </button>
            </div>
        </div>
    );
};

export default ItemDetail;