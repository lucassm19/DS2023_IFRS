import { Link } from 'react-router-dom'
import "./NavBar.css"

const NavBar = () => {
    return (
        <nav className="navbar">
            <h2>
                <Link to={'/'}>Biblioteca Online</Link>
            </h2>
            <ul>
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'/new'} className='new-btn'>
                        Novo livro
                    </Link>
                </li>
            </ul>

        </nav>
    )
};

export default NavBar