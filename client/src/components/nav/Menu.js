import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth';

function Menu() {
  // HOOK
  const [ auth, setAuth ] = useAuth();
  const navigate = useNavigate();

  const logout = () => {
    setAuth({...auth, user: null, token: ""});
    localStorage.removeItem('auth');
    navigate("/login");
  }

    return (
      <div className="nav-container border border-secondary">
        <ul className="nav d-flex justify-content-between m-1 p-2">
          <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/">
              HOME
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/login">
              LOGIN
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/register">
              REGISTER
            </NavLink>
          </li>

          <li className="nav-item">
            <a onClick={logout} className="nav-link">
              LOGOUT
            </a>
          </li>
        </ul>
      </div>
    );
  }
  
  export default Menu;
  