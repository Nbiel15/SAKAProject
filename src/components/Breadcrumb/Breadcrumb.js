import React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faHome } from '@fortawesome/free-solid-svg-icons'; 
import './Breadcrumb.css'; 

const Breadcrumb = ({ items, size = 'medium', custom = false, type = 'regular' }) => { 
  const getClass = () => { 
    let classes = 'breadcrumb'; 
    classes += ` breadcrumb--${size}`; 
    if (custom) classes += ' breadcrumb--custom'; 
    classes += ` breadcrumb-font--${type}`; 
    return classes; 
  };

  return ( 
    <nav aria-label="breadcrumb" className={getClass()}> 
      <ol> 
        {items.map((item, index) => ( 
          <li key={index} className="breadcrumb-item"> 
            {index === 0 && ( 
              <FontAwesomeIcon icon={faHome} className="breadcrumb-home-icon" /> 
            )} 
            <a href={item.href}>{item.label}</a> 
            {index < items.length - 1 && ( 
              <span className="breadcrumb-separator"> / </span> 
            )} 
          </li>
        ))}
      </ol> 
    </nav>
  );
};

export default Breadcrumb;
