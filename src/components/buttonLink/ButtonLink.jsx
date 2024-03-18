import PropTypes from "prop-types";
import styles from "./ButtonLink.module.css";
import { Link } from "react-router-dom";

const ButtonLink = ({
  imageUrl,
  buttonText,
  buttonColor,
  animationColor,
  showShadow,
  linkTo,
  animationClass,
  padding,
  width,
}) => {
  const buttonStyle = {
    background: `linear-gradient(90deg, ${buttonColor[0]} 0%, ${buttonColor[1]} 100%)`,
    boxShadow: showShadow ? "0 0 4px #592b99" : "none",
    animation: showShadow ? `${animationClass} infinite 2s` : "none",
    padding: padding,
  };

  const keyframesStyle = showShadow
    ? `
    @keyframes pinkGlow {
      0% {
        box-shadow: 0 0 40px #ff45f6;
      }
      50% {
        box-shadow: 0 0 60px #92008a;
      }
      100% {
        box-shadow: 0 0 40px #ff45f6;
      }
    }
    @keyframes yellowGlow {
      0% {
        box-shadow: 0 0 40px #ffde26;
      }
      50% {
        box-shadow: 0 0 60px #826e00;
      }
      100% {
        box-shadow: 0 0 40px #ffde26;
      }
    }
    @keyframes purpleGlow {
      0% {
        box-shadow: 0 0 40px #9f5bff;
      }
      50% {
        box-shadow: 0 0 60px #322147;
      }
      100% {
        box-shadow: 0 0 40px #9f5bff;
      }
    }
    @keyframes greenGlow {
      0% {
        box-shadow: 0 0 40px #29c406;
      }
      50% {
        box-shadow: 0 0 60px #177d00;
      }
      100% {
        box-shadow: 0 0 40px #29c406;
      }
    }
  `
    : "";

  return (
    <Link
      to={linkTo}
      className={`${styles.btnTxt} ${styles.btnLink} ${animationClass}`}
      style={buttonStyle}
    >
      <style>{keyframesStyle}</style>
      <img
        className={styles.buttonIcon}
        src={imageUrl}
        width={width}
        alt="Button Icon"
      />
      <span>{buttonText}</span>
    </Link>
  );
};

ButtonLink.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonColor: PropTypes.arrayOf(PropTypes.string),
  animationColor: PropTypes.arrayOf(PropTypes.string),
  showShadow: PropTypes.bool,
  linkTo: PropTypes.string.isRequired,
  animationClass: PropTypes.string,
  padding: PropTypes.string,
};

ButtonLink.defaultProps = {
  buttonColor: ["#ffd700", "#2d0081"],
  animationColor: ["#ffde26", "#826e00"],
  showShadow: true,
  padding: "2%",
  width: "30px",
};

export default ButtonLink;
