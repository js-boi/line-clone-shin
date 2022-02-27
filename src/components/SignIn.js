import React from 'react';
import {Button} from "@mui/material";

const SignIn = () => {
    const signInWithGoogle = () => {
        console.log("グーグルサインイン")
    }

    return (
        <div>
            <p>SignIn</p>
            <Button onClick={signInWithGoogle}>グーグルでログインする</Button>
        </div>
    );
};

export default SignIn;
