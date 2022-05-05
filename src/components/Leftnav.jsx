import React from "react";
import picture from '../assets/picture.png';
import styles from './Leftnav.module.css';
import styl from '../App.module.css';

const Leftnav=()=>{
    return (
        <div className={styl.leftnav}>
         <img src={picture} className={styles.img} alt="ANKIT"/>
        </div>
    );
}
export default Leftnav;