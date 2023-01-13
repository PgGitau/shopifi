import Jumbotron from "../../components/cards/Jumbotron";
import { useAuth } from "../../context/auth";

function Dashboard() {
    // context
    const [ auth, setAuth ] = useAuth();

    return (
      <>
        <Jumbotron
          title={`Hello ${auth?.user?.name}`}
          subtitle="Admin Dashboard"
        />
        <pre>{JSON.stringify(auth, null, 4)}</pre>
      </>
    );
   
}

export default Dashboard;
  
  