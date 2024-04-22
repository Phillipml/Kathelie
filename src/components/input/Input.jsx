import React from "react";
import PropTypes from "prop-types";
import styles from "./Input.module.css";

const Input = ({ placeHolder, padding, width, value, onChange }) => {
  const inputStyle = {
    padding: padding,
    width: width,
    margin: "0 auto",
  };

  return (
    <input
      className={styles.inputDefault}
      style={inputStyle}
      placeholder={placeHolder}
      value={value}
      onChange={onChange}
      required
    />
  );
};

Input.propTypes = {
  placeHolder: PropTypes.string,
  padding: PropTypes.string,
  width: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  placeHolder: "Set The Placeholder",
  padding: "2%",
  width: "30%",
  onChange: () => {},
};

export default Input;
