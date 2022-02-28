import React, {useState} from 'react';
import {db, auth} from '../firebase.js';
import firebase from 'firebase/compat/app';
import {Input} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';


const SendMessage = () => {
    const [message, setMessage] = useState("");

    const {uid, photoURL} = auth.currentUser;

    function sendMessage(e) {
        e.preventDefault();
        db.collection("messages").add({
            text: message,
            photoURL,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setMessage("");
    }

    return (
        <div>
            <form onSubmit={sendMessage}>
                <div className="sendMsg">
                    <Input
                        style={{
                            width: "78%",
                            fontSize: "16px",
                            fontWeight: "550",
                            marginLeft: "6px",
                            marginBottom: "-4px",
                        }}
                        type="text"
                        placeholder="メッセージを入力してください"
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                    />
                    <SendIcon style={{color:"#7ac2ff", marginLeft: "20px"}}
                    />
                </div>
            </form>
        </div>
    );
};

export default SendMessage;
