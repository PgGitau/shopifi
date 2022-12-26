import { useState } from 'react';
import Jumbotron from '../../components/cards/Jumbotron';
import axios from 'axios';
import toast from 'react-hot-toast';

function Login() {
    // state
    const [ email, setEmail ] = useState("peter@gmail.com");
    const [ password, setPassword ] = useState("kilometer");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // destructure data from res.data console.log(res)
            // to see what res contains after posting
            const { data } = await axios.post(
              `${process.env.REACT_APP_API}/login`,
              { email, password }
            );
            console.log(data)
            if (data?.error) {
                toast.error(data.error);
            } else {
                toast.success("Login successful")
            }
        } catch (err) {
            console.log(err)
            toast.error("Login failed, try again!!")
        }
    }

    return (
      <div>
        <Jumbotron title="Login Page" subtitle="Please Login here" />
       
        <div className="container mt-5 border border-warning p-2">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <form onSubmit={handleSubmit}>
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
  
  export default Login;
  