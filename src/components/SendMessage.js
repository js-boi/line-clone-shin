import React, {useState} from 'react';

const SendMessage = () => {
    const [message, setMessage] = useState("");

    return (
        <div>
            <form>
                <div className="sendMsg">
                    <input type="text"
                           placeholder="メッセージを入力してください"
                    />
                </div>
            </form>
        </div>
    );
};

export default SendMessage;
