import '../assets/css/NavBar.css';
import CartWidgets from './CartWidgets';  

const NavBar = () => {
    return (
      <nav className="nav-container">
        <a className=   'anchor-nav' href="">
              <img src={'../MyLCoffee.png'} alt='M&L' className='logo'/>
            </a>
            <a className='anchor-nav' href="">Cafés</a> 
            <a className='anchor-nav' href="">Comidas</a>
            <a className='anchor-nav' href="">Bebidas</a>
            <a className='anchor-nav' href="">Tu pedido</a>
            <CartWidgets />
        </nav>
    )

}

export default NavBar