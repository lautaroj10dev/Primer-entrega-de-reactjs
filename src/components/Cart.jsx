import { useState, useEffect } from 'react';
import "../assets/css/Cart.css";

const Cart = () => {
    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect (() => {
        const carritoGuardado = JSON.parse(localStorage.getItem('carrito')) || [];
        setCarrito(carritoGuardado);

        const totalCalculado = carritoGuardado.reduce((sum, item) => {
            return sum + (item.precio * item.cantidad);
        }, 0);

        setTotal(totalCalculado);
    }, []);

    const handleAumentar = (id) => {
        const carritoActualizado = carrito.map(item => {
            if (item.id === id) {
                return { ...item, cantidad: item.cantidad + 1};
            }
            
            return item;
        });

        setCarrito(carritoActualizado);
        localStorage.setItem('carrito', JSON.stringify(carritoActualizado));
        actualizarTotal(carritoActualizado);
        window.dispatchEvent(new Event('carritoActualizado')); // 👈 AGREGA AQUÍ
    };

    const handleDisminuir = (id) => {
        const carritoActualizado = carrito.map(item => {
            if (item.id === id && item.cantidad > 1) {
                return { ...item, cantidad: item.cantidad - 1};
            }
            
            return item;
        });

        setCarrito(carritoActualizado);
        localStorage.setItem('carrito', JSON.stringify(carritoActualizado));
        actualizarTotal(carritoActualizado);
        window.dispatchEvent(new Event('carritoActualizado')); // 👈 AGREGA AQUÍ
    };

    const handleEliminar = (id) => {
        const carritoActualizado = carrito.filter(item => item.id !== id);
        setCarrito(carritoActualizado);
        localStorage.setItem('carrito', JSON.stringify(carritoActualizado));
        actualizarTotal(carritoActualizado);
        window.dispatchEvent(new Event('carritoActualizado')); // 👈 AGREGA AQUÍ
    };

    const actualizarTotal = (carritoActualizado) => {
        const totalCalculado = carritoActualizado.reduce((sum, item) => {
            return sum + (item.precio * item.cantidad);
        }, 0);
        setTotal(totalCalculado);
    };

    return (
        <div className="cart">
            <h1>Carrito de compras</h1>

            {carrito.length === 0 ? (
                <p className="carrito-vacio">El carrito está vacío</p>
            ) : ( 
                <div className="cart-contenido">
                    <table className="cart-tabla">
                        <thead>
                            <tr>
                                <th>Producto</th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                                <th>Subtotal</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {carrito.map(item => (
                                 <tr key={item.id}>
                                    <td>{item.nombre}</td>
                                    <td>${item.precio}</td>
                                    <td>
                                       <button onClick={() => handleDisminuir(item.id)}>-</button>
                                       <span>{item.cantidad}</span>
                                       <button onClick={() => handleAumentar(item.id)}>+</button>
                                   </td>
                                   <td>${(item.precio * item.cantidad).toFixed(2)}</td>
                                   <td>
                                       <button onClick={() => handleEliminar(item.id)}
                                       className="btn-eliminar"
                                       >Eliminar</button>
                                </td>
                           </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="cart-resumen">
                        <h2>Total: ${total.toFixed(2)}</h2>
                        <button className="btn-comprar">Comprar</button>
                    </div>
                </div>
            )}
        </div>
      );
};

export default Cart;