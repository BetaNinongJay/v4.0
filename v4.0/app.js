class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1>
            <p className="text-gray-600 mb-4">We're sorry, but something unexpected happened.</p>
            <button onClick={() => window.location.reload()} className="btn-primary">
              Reload Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  try {
    const [currentView, setCurrentView] = React.useState('form');
    const [userData, setUserData] = React.useState(null);
    const [jobResults, setJobResults] = React.useState([]);

    const handleFormSubmit = async (formData) => {
      setUserData(formData);
      setCurrentView('loading');
      
      setTimeout(async () => {
        let results = await predictJobMatches(formData);
        
        if (!results || results.length === 0) {
          results = generateJobRecommendations(formData);
        }
        
        setJobResults(results);
        setCurrentView('results');
      }, 2500);
    };

    const handleTryAgain = () => {
      setCurrentView('form');
      setUserData(null);
      setJobResults([]);
    };

    const handleShowAbout = () => {
      setCurrentView('about');
    };

    const handleShowDisclaimer = () => {
      setCurrentView('disclaimer');
    };

    const handleCloseInfo = () => {
      setCurrentView('form');
    };

    return (
      <div className="min-h-screen" data-name="app" data-file="app.js">
        <Header 
          onShowAbout={handleShowAbout}
          onShowDisclaimer={handleShowDisclaimer}
        />
        
        {currentView === 'form' && (
          <InputForm onSubmit={handleFormSubmit} />
        )}
        
        {currentView === 'about' && (
          <AboutSection onClose={handleCloseInfo} />
        )}
        
        {currentView === 'disclaimer' && (
          <DisclaimerSection onClose={handleCloseInfo} />
        )}
        
        {currentView === 'loading' && (
          <LoadingScreen />
        )}
        
        {currentView === 'results' && (
          <ResultsPage 
            results={jobResults} 
            userData={userData}
            onTryAgain={handleTryAgain} 
          />
        )}
      </div>
    );
  } catch (error) {
    console.error('App component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);