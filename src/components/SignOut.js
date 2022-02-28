import React from 'react';
import {Button} from "@mui/material";
import {auth} from "../firebase";


const SignOut = () => {
    return (
        <div className="header">
            <Button style={{color: "#fff", fontSize: "18px"}}
                    onClick={() => auth.signOut()}
            >
                サインアウト
            </Button>
        </div>
    );
};

export default SignOut;
