import { Link } from 'react-router-dom';
import '../assets/css/ItemCard.css';

const ItemCard = ({ producto, onAddToCart }) => {

    const handleAddToCart = () => {
        onAddToCart(producto);
    };

    return (
        <div className="item-card">
            <Link to={`/producto/${producto.id}`} className="card-link" style={{ textDecoration: 'none', color: 'inherit' }}>
                <img src={producto.imagen} alt={producto.nombre} className="item-card-image" />
                <h3>{producto.nombre}</h3>
                <p className="item-card-description">{producto.descripcion}</p>
            </Link>
            <p className="item-card-precio">${producto.precio}</p>
            <button onClick={handleAddToCart} className="btn-agregar">Agregar al carrito</button>
        </div>
    );
};

export default ItemCard;
