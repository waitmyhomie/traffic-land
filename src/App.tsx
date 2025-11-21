import './index.css';
import Desktop1 from './pages/Desktop1';
import ErrorBoundary from './components/ErrorBoundary';
import ToastContainer from './components/ToastContainer';
import { useToast } from './hooks/useToast';

function App() {
  const { toasts, removeToast, toast } = useToast();

  return (
    <ErrorBoundary>
      <div className="min-h-screen h-desktop">
        <Desktop1 toast={toast} />
        <ToastContainer toasts={toasts} removeToast={removeToast} />
      </div>
    </ErrorBoundary>
  );
}

export default App;