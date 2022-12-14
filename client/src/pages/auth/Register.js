import { useState } from 'react';
import Jumbotron from '../../components/cards/Jumbotron';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useAuth } from '../../context/auth';
import { useNavigate } from 'react-router-dom';

function Register() {
    // state
    const [ name, setName ] = useState("Peter");
    const [ email, setEmail ] = useState("peter@gmail.com");
    const [ password, setPassword ] = useState("kilometer");
    const [ address, setAddress ] = useState("123Nairobi");

    // hook
    const [ auth, setAuth ] = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // destructure data from res.data console.log(res)
            // to see what res contains after posting
            const { data } = await axios.post(
              `/register`,
              { name, email, password, address }
            );
            console.log(data)
            if (data?.error) {
              toast.error(data.error);
            } else {
              //save to localStorage so when page reloads
              //the data still exists in the localStorage
              localStorage.setItem('auth', JSON.stringify(data));
              setAuth({ ...auth, token: data.token, user: data.user })
              toast.success("Registration successful");
              navigate("/dashboard");
            }
        } catch (err) {
            console.log(err)
            toast.error("Registration failed, try again!!")
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

                <input
                  type="text"
                  className="form-control mb-4 p-2"
                  placeholder="Enter your Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
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
  