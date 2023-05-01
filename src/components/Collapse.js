import React from 'react';
import { useState } from 'react';


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
                  {isOpen ? <img src='/images/flèche-up.png' alt='flèche développée'/> : <img src='/images/flèche-down.png' alt='flèche reduite'/>}
                  {/* {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />} */}
                </span>
            </button>
             <div className={isOpen ?'para-Collapse show' : 'para-Collapse'}>{props.children}</div>
            
        </div>
    );
};

export default Collapse;
