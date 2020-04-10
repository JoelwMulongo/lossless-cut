import React, { Component } from 'react';
import { openSendReportDialog } from './reporting';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: undefined };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('componentDidCatch', error, errorInfo);
  }

  render() {
    const { error } = this.state;
    if (error) {
      return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <h1>Something went wrong</h1>
          <div style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>{error.message}</div>
          <p><button type="button" onClick={() => openSendReportDialog(error)} style={{ padding: 10, fontSize: 20 }}>Report error</button></p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
