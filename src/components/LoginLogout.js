import React from 'react'
import {useUser } from '@auth0/nextjs-auth0/client'

import styles from "../../styles/Home.module.css";

const LoginLogout = () => {
    const {user, error, isLoading } = useUser();
    if(error) return <div>{error.message}</div>
    if(isLoading) return <div>Loading...</div>

    return (
      <div>
        {!user && (
          <a href="api/auth/login" >
            Iniciar sesión
          </a>
        )}
        {user && (
          <a href="api/auth/logout" >
            Cerrar sesión
          </a>
        )}
      </div>
    );
}

export default LoginLogout