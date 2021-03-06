import React from 'react';
import {Button} from "@mui/material";
import firebase from 'firebase/compat/app';
import {auth} from '../firebase';

const SignIn = () => {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }

    return (
        <div className="header">
            <Button style={{color: "#fff", fontSize: "18px"}}
                    onClick={signInWithGoogle}
            >
                グーグルでログインする</Button>
        </div>
    );
};

export default SignIn;
