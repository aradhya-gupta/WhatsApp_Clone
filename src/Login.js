import { Button } from '@material-ui/core'
import React, { useContext } from 'react'
import {auth, provider} from './firebase'
import './Login.css'

import {AppContext} from './App'


function Login() {
    const context = useContext(AppContext); 
    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(result => context.user.set(result))
        .catch((error) => alert(error.message)); 
    }
    return (
        <div className="login">
            <div className="login__container">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/225px-WhatsApp.svg.png" alt="whatsapplogo" />
                <div className="login__text">
                    <h1>
                        Sign in to WhatsApp Clone
                    </h1>
                </div>

                <Button onClick={signIn}>
                    Sign in with Google
                </Button>
            </div>
        </div>
    )
}

export default Login
