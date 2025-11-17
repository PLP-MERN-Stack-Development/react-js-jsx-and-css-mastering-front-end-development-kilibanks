import React from "react";
import PropTypes from "prop-types";
import "./footer.css";  
import classNames from "classnames";

const footer = ({ title, content, highlighted }) => {  
    const footerClass = classNames("footer", {
    highlighted: highlighted,
  });   
    return (
    <div className={footerClass}>
      <h2 className="footer-title">{title}</h2>
      <p className="footer-content">{content}</p>
    </div>
  );
}
    content: PropTypes.string.isRequired,
    highlighted: PropTypes.bool,
};
Footer.propTypes = {
  title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    highlighted: PropTypes.bool,
};
  content: PropTypes.string.isRequired,
  highlighted: PropTypes.bool,
};
    title: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};
export default Footer;
    content: PropTypes.string.isRequired,

    highlighted: PropTypes.bool,
};

Footer.propTypes = {
  title: PropTypes.string.isRequired,   

    content: PropTypes.string.isRequired,   
    highlighted: PropTypes.bool,
};