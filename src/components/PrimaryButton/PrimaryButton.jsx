/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const PrimaryButton = ({ content = "Continuer", state, className }) => {
  return (
    <div className={`primary-button ${state} ${className}`}>
      <div className="continuer">{content}</div>
    </div>
  );
};

PrimaryButton.propTypes = {
  content: PropTypes.string,
  state: PropTypes.oneOf(["disabled", "hover", "error", "default"]),
};
