
const ItemListContainer = ({ title }) => {

    return (
        <section className="item-list-container">
            <h2>{title}</h2>
            {/* Aquí se renderizarán los ítems del catálogo */}
            <p>Próximamente verás nuestro catálogo.</p>
        </section>
    );
}
export default ItemListContainer