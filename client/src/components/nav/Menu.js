import { NavLink } from 'react-router-dom';

function Menu() {
    return (
      <div className='nav-container border border-secondary'>
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

        </ul>
      </div>
    );
  }
  
  export default Menu;
  