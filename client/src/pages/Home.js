import Jumbotron from '../components/cards/Jumbotron';
import { useAuth } from '../context/auth';

function Home() {
  const [ auth, setAuth ] = useAuth();

  return (
    <div>
      <Jumbotron title="Home Page" subtitle="Welcome" />
      <pre>{JSON.stringify(auth, null, 4)}</pre>
    </div>
  );
}

export default Home;
  