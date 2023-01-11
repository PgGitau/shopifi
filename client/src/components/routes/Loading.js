import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Loading() {
    // state
    const [ count, setCount ] = useState(3);

    // hook
    const navigate = useNavigate();
    const location = useLocation();
    // console.log(location);

    useEffect(() => {
      const interval = setInterval(() => {
        setCount((prevCount) => --prevCount);
      }, 1000);
      // redirect once count=0
      count === 0 && navigate("/login", {
        state: location.pathname
      });
      // cleanup
      return () => clearInterval(interval);
    }, [count]);

    return (
        <div>Redirecting you in {count} seconds</div>
    )
     
}

export default Loading;