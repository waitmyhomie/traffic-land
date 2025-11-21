import { Component, type ErrorInfo, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(): Partial<State> {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.setState({
      error,
      errorInfo,
    });
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-black flex items-center justify-center px-4">
          <div className="max-w-md w-full bg-gray-900 rounded-[18px] p-8 text-center">
            {/* Error Icon */}
            <div className="mb-6 flex justify-center">
              <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center">
                <svg 
                  className="w-10 h-10 text-red-500" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
                  />
                </svg>
              </div>
            </div>

            {/* Title */}
            <h1 className="font-montserrat font-bold text-2xl text-white mb-3">
              Что-то пошло не так
            </h1>

            {/* Description */}
            <p className="font-ubuntu text-gray-400 mb-6">
              Произошла непредвиденная ошибка. Попробуйте обновить страницу или вернуться на главную.
            </p>

            {/* Error details (только в development) */}
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mb-6 text-left">
                <summary className="font-ubuntu text-sm text-gray-500 cursor-pointer hover:text-gray-400 mb-2">
                  Технические детали
                </summary>
                <pre className="bg-gray-950 rounded-lg p-4 text-xs text-red-400 overflow-auto max-h-40">
                  {this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            )}

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={this.handleReset}
                className="bg-[#00344d] hover:bg-[#00344d]/90
                         text-white font-montserrat font-bold uppercase 
                         rounded-[18px] transition-all duration-300 
                         transform hover:scale-[1.02] active:scale-[0.98]
                         px-6 py-3 text-sm"
              >
                Попробовать снова
              </button>
              <button
                onClick={() => window.location.href = '/'}
                className="bg-gray-800 hover:bg-gray-700
                         text-white font-montserrat font-bold uppercase 
                         rounded-[18px] transition-all duration-300 
                         transform hover:scale-[1.02] active:scale-[0.98]
                         px-6 py-3 text-sm"
              >
                На главную
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;