import React from 'react';
import "./nav.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faClipboardList, faHeart, faMotorcycle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

function Nav (){
    return(
        <>
            <div className="Nav">
                <div className="navIcons">
                    <div className="navIcon">
                        <FontAwesomeIcon className="icons" icon={faHome} aria-hidden="true" />
                    </div>
                    <div className="navIcon">
                        <FontAwesomeIcon className="icons" icon={faClipboardList} aria-hidden="true"/>
                    </div>
                    <div className="navIcon">
                        <FontAwesomeIcon className="icons" icon={faHeart} aria-hidden="true" />
                    </div>
                    <div className="navIcon">
                        <FontAwesomeIcon className="icons" icon={faMotorcycle} aria-hidden="true" />
                    </div>
                    <div className="navIcon">
                        <FontAwesomeIcon className="icons" icon={faSignOutAlt} aria-hidden="true" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nav;