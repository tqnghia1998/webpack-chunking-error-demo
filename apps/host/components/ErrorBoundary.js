import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: {} };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  render() {
    if (this.state.hasError) {
      return (
        <h2>
          Something went wrong
          <pre>
            {this.state.error.stack}
          </pre>
        </h2>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
