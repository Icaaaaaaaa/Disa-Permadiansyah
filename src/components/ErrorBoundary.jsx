import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#0f1729] flex items-center justify-center p-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-blue-500 mb-4">⚠️ Error</h1>
            <p className="text-gray-400 mb-4">Ada error di halaman ini:</p>
            <pre className="bg-black/50 p-4 rounded text-left text-xs text-gray-300 overflow-auto max-h-64">
              {this.state.error?.toString()}
            </pre>
            <button
              onClick={() => window.location.reload()}
              className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;





