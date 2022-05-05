import React from "react";
import style from './Rightnav.module.css';
import styl from '../App.module.css';

const Rightnav=()=>{
    return (
        <div className={styl.rightnav}>

           <div className={style.right}>
               <div className={style.subright}>Home
               <ul className={style.ul}>
                   <li >shekhar</li>
                   <li>Utkarsh</li>
                   <li>Ankit</li>
                   <li>Abhishek</li>
               </ul>
               </div>

               <div className={style.subright}>Features</div>
               <div className={style.subright}>Pages</div>
               <div className={style.subright}>Screenshots</div>
               <div className={style.subright}>Pricing</div>
               <div className={style.subright}>Contact</div>
           </div>

        </div>
    );
}
export default Rightnav;