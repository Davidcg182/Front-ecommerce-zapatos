import { useAuth0 ,  withAuthenticationRequired} from '@auth0/auth0-react';
import React from 'react';


  const Login = () => {
    // const { loginWithRedirect  } = useAuth0();
    const { isAuthenticated, logout, user } = useAuth0();

    return (
        // <button onClick={() => loginWithRedirect() }>Ingresar</button>
        <div>
            <span>Hi, {user.name} <img width={50} height={50} src={user.picture} alt="" /></span>
            <div>Logged: {String(isAuthenticated)}</div>
            <div>Verified: {String(user.email_verified)}</div>
            <button onClick={logout}>Logout</button>
        </div>
    );

}; 
export default withAuthenticationRequired(Login);
 