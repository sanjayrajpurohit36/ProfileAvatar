import React from "react";
import PropTypes from "prop-types";

function Title(props) {
  const { title, children, className } = props;

  return (
    <div className={`name-wrapper ${className}`}>
      {title.length ? title : "Pass Name prop"}
      {React.cloneElement(children)}
    </div>
  );
}

Title.defaultProps = {
  title: "Sanjay Rajpurohit",
  children: <> </>,
};

Title.propTypes = {
  /**
   * title
   */
  title: PropTypes.string,
  /**
   * Additional Elements to be rendered
   */
  children: PropTypes.node,
};

export default Title;
