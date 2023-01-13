// protect admin page by checking if user isAmin through
// backend server

import axios from 'axios';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useAuth } from '../../context/auth';
import Loading from './Loading';

function AdminRoute() {
    // context
    const [ auth, setAuth ] = useAuth();

    // state
    const [ ok, setOk ] = useState();

    useEffect(() => {
        const adminCheck = async () => {
            const { data } = await axios.get(`/admin-check`);
            if (data.ok) {
                setOk(true)
            } else {
                setOk(false)
            }
        }
        if (auth?.token) adminCheck();
    }, [auth?.token])

    // redirect user to outlet(in app.js) if is admin
    // if is not admin redirected to home page
    // (path is empty meaning its the home page by default)
    return ok ? <Outlet /> : <Loading path="" />;
}

export default AdminRoute;