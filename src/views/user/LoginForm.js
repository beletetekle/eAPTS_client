import React from 'react';

const LoginForm = (props) => {
    return (
        <div>
            <div> Login </div>
            <input type="text" onChange={props.onChange} value={props.username} name="username" placeholder="Email" />
            <input type="password" onChange={props.onChange} value={props.password} name="password" placeholder="password" />
            <button onClick={props.onClick}> Login </button>
        </div>
    );
};

export default LoginForm;