import React, { Component } from "react";

/**
 * A higher-order component that adds logging functionality to a wrapped component.
 *
 * @param {Object} props - The props object.
 * @param {React.Component} props.WrappedComponent - The component to be wrapped.
 * @returns {React.Component} - The wrapped component with logging functionality.
 */
const WithLogging = ({ WrappedComponent }) => {
  const getDisplayName = (WrappedComponent) => WrappedComponent.displayName || WrappedComponent.name || "Component";

  WithLogging.displayName = `WithLogging(${getDisplayName(WrappedComponent)})`;

  return class extends Component {
    componentDidMount() {
      console.log(`Component ${getDisplayName(WrappedComponent)} is mounted`);
    }

    componentWillUnmount() {
      console.log(`Component ${getDisplayName(WrappedComponent)} is going to unmount`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

export default WithLogging;
