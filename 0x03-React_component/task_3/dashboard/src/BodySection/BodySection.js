import PropTypes from "prop-types";
import React, { Component } from "react";

/**
 * Represents a section of the body in a dashboard.
 */
class BodySection extends Component {
  render() {
    return (
      <div className="bodySection">
        <h2>{this.props.title}</h2>
        {this.props.children}
      </div>
    );
  }
}

BodySection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default BodySection;
