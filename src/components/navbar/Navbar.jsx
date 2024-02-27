import './navbar.css'
import CartWidget from '../cartWidget/CartWidget'
const Navbar = () => {
    return (
            <nav className="navContainer">
                <a href="/"> <img className="logo" src="../img/logoAn.png" alt="logo" /> </a>

                <div className="linksContainer">
                    <a className="link" href="/">MUJER</a>
                    <a className="link" href="/">HOMBRE</a>
                    <a className="link" href="/">NIÑOS</a>
                </div>
                <CartWidget/>
            </nav>
    )
}

export default Navbar
