import React, {useState} from 'react';
import {db, auth} from '../firebase.js';
import firebase from 'firebase/compat/app';

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
                    <input type="text"
                           placeholder="メッセージを入力してください"
                           onChange={(e) => setMessage(e.target.value)}
                           value={message}
                    />
                </div>
            </form>
        </div>
    );
};

export default SendMessage;
