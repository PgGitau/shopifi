import Jumbotron from "../../components/cards/Jumbotron";
import UserMenu from "../../components/nav/UserMenu";
import { useAuth } from "../../context/auth";

function UserOrders() {
    // context
    const [ auth, setAuth ] = useAuth();

    return (
      <>
        <Jumbotron
          title={`Hello ${auth?.user?.name}`}
          subtitle="Dashboard"
        />
        {/* <pre>{JSON.stringify(auth, null, 4)}</pre> */}

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <UserMenu />
            </div>

            <div className="col-md-9">
              <div className="p-3 mt-2 mb-2 h4 bg-light">View Order history</div>
              <p>View Orders form...</p>
            </div>
          </div>
        </div>
      </>
    );
   
}

export default UserOrders;
  