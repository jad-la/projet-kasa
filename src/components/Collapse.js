import React from 'react';
import { useState } from 'react';
import { FaAngleUp, FaAngleDown } from 'react-icons/fa';


const Collapse = (props) => {
    const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

    return (
        <div className='collapse-apropos'>
            <button className='toggle' onClick={toggle}>
                 <span>{props.label}</span>
                {isOpen ? <FaAngleUp className="icon-up-down" /> : <FaAngleDown className="icon-up-down" />}
            </button>
             <div className={isOpen ?'para-Collapse show' : 'para-Collapse'}>{props.children}</div>
            
        </div>
    );
};

export default Collapse;