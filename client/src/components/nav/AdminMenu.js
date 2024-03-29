import { NavLink } from "react-router-dom";

function AdminMenu () {
    return (
      <>
        <div className="p-3 mt-2 mb-2 h4 bg-light">Admin Links</div>
        <ul className="list-group list-unstyled">
          <li>
            <NavLink className="list-group-item" to="/dashboard/admin/category">
              Create Category
            </NavLink>
          </li>

          <li>
            <NavLink className="list-group-item" to="/dashboard/admin/product">
              Create Product
            </NavLink>
          </li>
        </ul>
      </>
    );
}

export default AdminMenu;