import React from "react";
import PropTypes from "prop-types";
import "./card.css";
import classNames from "classnames";

const Card = ({ title, content, highlighted }) => {
  const cardClass = classNames("card", {
    highlighted: highlighted,
  });   
    return (
    <div className={cardClass}>
      <h2 className="card-title">{title}</h2>
      <p className="card-content">{content}</p>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,   
