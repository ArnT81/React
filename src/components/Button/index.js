import React from 'react';
//STYLES
import styles from './button.module.css';

/**
 * POSSIBLE PROPS
 * function
 * width
 * color
 * position: left, center, right 
**/

function Button(props) {
    let arrange;

    switch (props.position) {
        case "left":
            arrange = "flex-start"
            break;
        case "center":
            arrange = "center"
            break;
        case "right":
            arrange = "flex-end"
            break;
        default:
            arrange = "flex-start"
            break;
    }

    return (
        <div
            onClick={props.function}
            className={styles.button}
            style={{
                width: props.width,
                background: props.color,
                alignSelf: arrange
            }}
        >
            { props.children}
        </div >
    )
}

export default Button;
