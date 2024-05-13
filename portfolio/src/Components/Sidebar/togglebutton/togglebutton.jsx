import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Togglebutton = ({ setopen, isOpen }) => {
  return (
    <button style={{ border: "none", width: "15px", height: "39px",marginLeft:"5px",top:"29px" }} onClick={() => setopen(prev => !prev)}>
      <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
    </button>
  );
}

export default Togglebutton;
