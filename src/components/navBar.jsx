import React from "react";
import PropTypes from "prop-types";
import "<div className="" />
<navBar></navBar>.css";
import classNames from "classnames";

const NavBar = ({ title, links, fixed }) => {   
    const navBarClass = classNames("navBar", {
    fixed: fixed,
  });   
    return (
    <div className={navBarClass}>
      <h2 className="navBar-title">{title}</h2>
      <ul className="navBar-links">
        {links.map((link, index) => (
          <li key={index} className="navBar-link">
            <a href={link.href}>{link.label}</a>
            </li>   
        ))}
      </ul>
    </div>
  );
}
NavBar.propTypes = {
  title: PropTypes.string.isRequired,   
  links: PropTypes.arrayOf( 
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,    
    })
  ).isRequired,   
  fixed: PropTypes.bool,
}; 
export default NavBar;
    content: PropTypes.string.isRequired,
    highlighted: PropTypes.bool,
};
   