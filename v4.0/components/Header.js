function Header({ onShowAbout, onShowDisclaimer }) {
  try {
    return (
      <header 
        className="bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg"
        data-name="header"
        data-file="components/Header.js"
      >
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-md">
                <div className="icon-briefcase text-2xl text-[var(--primary-color)]"></div>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">Career Recommendation App</h1>
                <p className="text-sm text-blue-100">Machine Learning-Powered Career and Job Recommendation</p>
              </div>
            </div>
            <div className="flex gap-3">
              <button
                onClick={onShowAbout}
                className="px-4 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-lg font-medium transition-all duration-300 flex items-center gap-2"
              >
                <div className="icon-info text-lg"></div>
                <span className="hidden sm:inline">About</span>
              </button>
              <button
                onClick={onShowDisclaimer}
                className="px-4 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-lg font-medium transition-all duration-300 flex items-center gap-2"
              >
                <div className="icon-alert-triangle text-lg"></div>
                <span className="hidden sm:inline">Disclaimer</span>
              </button>
            </div>
          </div>
        </div>
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
}
