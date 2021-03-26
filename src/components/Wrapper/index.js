import React from 'react';
//STYLES
import styles from './wrapper.module.css'
/**
* Logic and a button to toggle visability of the content recieved from its children.
* Recieves css for button from wrapper.model.css.
*/

const Wrapper = props => <div className={styles.wrapper}>{props.children}<hr /></div>

export default Wrapper;