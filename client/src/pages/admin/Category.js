import Jumbotron from "../../components/cards/Jumbotron";
import AdminMenu from "../../components/nav/AdminMenu";
import { useAuth } from "../../context/auth";

function AdminCategory() {
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
              <div className="p-3 mt-2 mb-2 h4 bg-light">Manage Categories</div>
              <p>Create Category form...</p>
            </div>
          </div>
        </div>
      </>
    );
   
}

export default  AdminCategory;
  