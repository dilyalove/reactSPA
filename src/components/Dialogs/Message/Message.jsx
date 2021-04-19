import React from 'react';
import './../Message/Message.css';

const Message = (props) => {
    return (
        <div className="dialogMessages">{props.message}</div>
    )
};

export default Message;