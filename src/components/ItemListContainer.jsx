import {useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
import {getProductos, getProductosByCategoria} from '../data/productos';
import ItemList from './ItemList';

const ItemListContainer = ({titulo}) => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const {categoryId} = useParams();

    useEffect(() => {
        setLoading(true);

        const promesa = categoryId
            ? getProductosByCategoria(categoryId)
            : getProductos();

        promesa.then((data) => {
            setProductos(data);
            setLoading(false);
        });
    }, [categoryId]);

    const titulo_final = categoryId || titulo;

return (
    <section className="item-list-container">
        <h2>{titulo_final}</h2>
        {loading ? (
            <p> Cargando productos...</p>
        ) : ( 
            <ItemList productos={productos} />
        )}
        </section>
   );
};

export default ItemListContainer;