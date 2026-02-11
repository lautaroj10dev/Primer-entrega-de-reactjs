import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductoById } from '../data/productos';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const { id } = useParams(); 
    const [producto, setProducto] = useState(null);
    const [loading, setLoading] = useState(true);
    
useEffect(() => {
    setLoading(true);

    const promesa = new Promise((resolve) => {
        setTimeout(() => {
            const prod = getProductoById(parseInt(id));
            resolve(prod);
        }, 500);
   });
    
   promesa.then((data) => {
    setProducto(data);
    setLoading(false);
   });
 }, [id]);

return (
    <div className="item-detail-container">
        {loading ? (
            <p className="loading"> Cargando producto</p>
        ) : producto ? (
            <ItemDetail producto={producto} />
        ) : ( 
            <p className="error"> Producto no encontrado</p>
        )}
    </div>
  );
};

export default ItemDetailContainer;