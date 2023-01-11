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

          {/* conditionally show and hide nav links
      when user is not authenticated */}
          {!auth?.user ? (
            <>
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
            </>
          ) : (
            <div className="dropdown">
              <li>
                <a
                  className="nav-link pointer dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  {auth?.user?.name}
                </a>

                <ul className="dropdown-menu dropdown-background-color">
                  <li>
                    <NavLink
                      className="nav-link"
                      to={`/dashboard/${
                        auth?.user?.role === 1 ? "admin" : "user"
                      }`}
                    >
                      Dashboard
                    </NavLink>
                  </li>

                  <li className="nav-item pointer">
                    <a onClick={logout} className="nav-link">
                      Logout
                    </a>
                  </li>
                </ul>
              </li>
            </div>
          )}
        </ul>
      </div>
    );
  }
  
  export default Menu;
  