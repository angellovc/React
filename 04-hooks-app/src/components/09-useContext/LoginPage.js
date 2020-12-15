import React, { useContext } from 'react'
import { UserContext } from './UserContext';

const LoginPage = () => {
    
    const {setUser} = useContext(UserContext);

    return (
        <div>
            <h1>Login Page</h1>
            <button
                className="btn btn-primary"
                onClick={() => setUser(
                    {
                        id: 1,
                        name: "Angello",
                        email: "vc.angel@outlook.com"
                    }
                )}
                >
                Login
            </button>
        </div>
    )
}

export default LoginPage
