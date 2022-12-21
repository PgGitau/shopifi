import { useState } from 'react';
import Jumbotron from '../components/cards/Jumbotron';

function Register() {
    // state
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(name, email, password)
        } catch (err) {
            console.log(err)
        }
    }

    return (
      <div>
        <Jumbotron title="Register Page" subtitle="Please Register here" />

        <div className="container mt-5 border border-warning p-2">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  className="form-control mb-4 p-2"
                  placeholder="Enter your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoFocus
                />

                <input
                  type="email"
                  className="form-control mb-4 p-2"
                  placeholder="Enter your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <input
                  type="password"
                  className="form-control mb-4 p-2"
                  placeholder="Enter your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <button className="btn btn-primary" type="submit">
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Register;
  