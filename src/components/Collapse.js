import React from 'react';
import { useState } from 'react';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';


const Collapse = (props) => {
    const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

    return (
        <div className='collapse-apropos'>
            <button className='toggle' onClick={toggle}>
                <span>{props.label}</span>
                <span className="icon-up-down"  onClick={toggle}>
                  {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </span>
            </button>
             <div className={isOpen ?'para-Collapse show' : 'para-Collapse'}>{props.children}</div>
            
        </div>
    );
};

export default Collapse;