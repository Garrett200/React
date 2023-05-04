import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav>
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/users/User1">User1</Link>
          <Link to="/users/User2">User2</Link>
          <Link to="/contact">Contact</Link>
        </nav>
    )
}

export default Nav;