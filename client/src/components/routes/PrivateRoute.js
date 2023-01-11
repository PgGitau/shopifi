// protect page using private route

import axios from 'axios';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useAuth } from '../../context/auth';
import Loading from './Loading';

function PrivateRoute() {
    // context
    const [ auth, setAuth ] = useAuth();

    // state
    const [ ok, setOk ] = useState();

    useEffect(() => {
        const authCheck = async () => {
            const { data } = await axios.get(
              `${process.env.REACT_APP_API}/auth-check`,
              {
                headers: {
                  Authorization: auth?.token,
                },
              }
            );
            if (data.ok) {
                setOk(true)
            } else {
                setOk(false)
            }
        }
        authCheck();
    }, [auth?.token])

    // check if user is authorized and has token
    // useEffect(()=> {
    //     if(auth?.token) {
    //         setOk(true);
    //     } else {
    //         setOk(false);
    //     }
    // }, [auth?.token]);

    // redirect user to outlet(in app.js) if has auth token
    
    return ok ? <Outlet /> : <Loading />;
}

export default PrivateRoute;