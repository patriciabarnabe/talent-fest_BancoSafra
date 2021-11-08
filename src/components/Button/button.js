import React from "react";

const Button = ({variant, children, onClick, type}) => {

    return (
        <button className = {variant} onClick={onClick} type={type} >
            {children}
        </button>
    )
}

export default Button;