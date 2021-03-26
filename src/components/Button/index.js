import React from 'react';
//STYLES
import styles from './button.module.css';

function Button(props) {
    return (
        <div

            onClick={props.function}
            className={props.style}
            style={{width: props.width}}
            
        >
    { props.children }
        </div >
    )
}

export default Button;
