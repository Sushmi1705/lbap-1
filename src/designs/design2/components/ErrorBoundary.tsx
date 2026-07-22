import React from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('[ErrorBoundary] Caught page error:', error, info.componentStack);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[60vh] flex items-center justify-center bg-slate-50 px-6">
          <div className="text-center max-w-md">
            <div className="w-16 h-16 bg-red-50 border border-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
              </svg>
            </div>
            <h2 className="text-xl font-black text-slate-900 mb-2 tracking-tight">Something went wrong</h2>
            <p className="text-sm text-slate-500 font-medium mb-6 leading-relaxed">
              An unexpected error occurred on this page. Please try again or navigate to another page.
            </p>
            <div className="flex gap-3 justify-center">
              <button
                onClick={this.handleReset}
                className="px-6 py-2.5 bg-[#00A7FF] hover:bg-[#1B3F8F] text-white text-sm font-bold uppercase tracking-wider rounded-lg transition-colors"
              >
                Try Again
              </button>
              <a
                href="/"
                className="px-6 py-2.5 border border-slate-200 text-slate-700 hover:bg-slate-50 text-sm font-bold uppercase tracking-wider rounded-lg transition-colors"
              >
                Go Home
              </a>
            </div>
            {this.state.error && (
              <details className="mt-6 text-left">
                <summary className="text-xs text-slate-400 cursor-pointer hover:text-slate-600 font-mono">
                  Error details
                </summary>
                <pre className="mt-2 text-xs text-red-400 bg-red-50 p-3 rounded-lg overflow-auto max-h-32 border border-red-100">
                  {this.state.error.message}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
