import { Link } from 'react-router-dom';
import '../assets/css/NotFound.css';

const NotFound = () => {
    return (
        <div className="not-found-container">
            <div className="not-found-content">
                <h1 className="error-code">404</h1>
                <h2>Página No Encontrada</h2>
                <p>Lo sentimos, la página que buscas no existe.</p>
                <Link to="/" className="btn-home">
                    Volver al Inicio
                </Link>
            </div>
        </div>
    );
};

export default NotFound;