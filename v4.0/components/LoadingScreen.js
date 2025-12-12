function LoadingScreen() {
  try {
    return (
      <div 
        className="max-w-2xl mx-auto px-4 py-20 text-center fade-in"
        data-name="loading-screen"
        data-file="components/LoadingScreen.js"
      >
        <div className="card">
          <div className="flex flex-col items-center py-8">
            <div className="relative mb-8">
              <div className="w-20 h-20 border-4 border-blue-100 border-t-[var(--primary-color)] rounded-full animate-spin"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="icon-cpu text-2xl text-[var(--primary-color)]"></div>
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-3 text-[var(--text-primary)]">Analyzing Your Profile</h3>
            <p className="text-lg text-[var(--text-secondary)] mb-6">Our AI is finding the best job matches for you</p>
            <div className="flex gap-2">
              <div className="w-2 h-2 bg-[var(--primary-color)] rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-[var(--primary-color)] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-2 h-2 bg-[var(--primary-color)] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('LoadingScreen component error:', error);
    return null;
  }
}