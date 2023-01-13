import Jumbotron from "../../components/cards/Jumbotron";
import AdminMenu from "../../components/nav/AdminMenu";
import { useAuth } from "../../context/auth";

function AdminDashboard() {
    // context
    const [ auth, setAuth ] = useAuth();

    return (
      <>
        <Jumbotron
          title={`Hello ${auth?.user?.name}`}
          subtitle="Admin Dashboard"
        />
        {/* <pre>{JSON.stringify(auth, null, 4)}</pre> */}

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <AdminMenu />
            </div>

            <div className="col-md-9">
              <div className="p-3 mt-2 mb-2 h4 bg-light">Admin Info</div>
              <ul className="list-group">
                <li className="list-group-item">{auth?.user?.name}</li>
                <li className="list-group-item">{auth?.user?.email}</li>
                <li className="list-group-item">You have Admin priviledges</li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
   
}

export default AdminDashboard;
  