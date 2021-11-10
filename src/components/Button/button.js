import React from "react";

const Button = ({className, children, onClick, type}) => {

    return (
        <button className = {className} onClick={onClick} type={type} >
            {children}
        </button>
    )
}

export default Button;