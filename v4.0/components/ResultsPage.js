function ResultsPage({ results, userData, onTryAgain }) {
  try {
    return (
      <div 
        className="max-w-5xl mx-auto px-4 py-12 fade-in"
        data-name="results-page"
        data-file="components/ResultsPage.js"
      >
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
            <div className="icon-check-circle text-3xl text-white"></div>
          </div>
          <h2 className="text-4xl font-bold mb-3 text-[var(--text-primary)]">Your Perfect Matches</h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Based on your profile, we found <span className="font-semibold text-[var(--primary-color)]">{results.length} excellent career opportunities</span> for you, {userData.fullName}
          </p>
        </div>

        <div className="space-y-6 mb-12">
          {results.map((job, index) => (
            <div 
              key={index} 
              className="card hover:shadow-2xl border-2 border-transparent hover:border-blue-100 relative overflow-hidden" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-transparent rounded-bl-full opacity-50"></div>
              
              <div className="relative">
                <div className="flex items-start gap-6 mb-5">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <div className={`icon-${job.icon} text-2xl text-white`}></div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-2xl font-bold text-[var(--text-primary)]">{job.title}</h3>
                      <div className="flex flex-col items-end ml-4">
                        <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                          {job.matchPercentage}%
                        </div>
                        <div className="text-xs text-[var(--text-secondary)] font-medium">Match Score</div>
                      </div>
                    </div>
                    <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">{job.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {job.matchedSkills.map((skill, idx) => (
                        <span 
                          key={idx}
                          className="badge bg-blue-100 text-blue-700 border border-blue-200"
                        >
                          <div className="icon-check text-xs mr-1"></div>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="w-full bg-gray-100 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-1000 shadow-sm"
                      style={{ width: `${job.matchPercentage}%` }}
                    ></div>
                  </div>
                  <div className="absolute -top-1 right-0 text-xs font-semibold text-[var(--text-secondary)]">
                    {job.matchPercentage >= 90 ? 'Excellent Match!' : job.matchPercentage >= 80 ? 'Great Match!' : 'Good Match'}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button 
            onClick={onTryAgain} 
            className="px-8 py-4 bg-white border-2 border-gray-300 text-gray-700 rounded-xl font-semibold text-lg transition-all duration-300 hover:border-[var(--primary-color)] hover:bg-blue-50 hover:text-[var(--primary-color)] hover:shadow-lg transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span className="flex items-center gap-2 justify-center">
              <div className="icon-arrow-left text-xl"></div>
              Try Another Search
            </span>
          </button>
        </div>
      </div>
    );
  } catch (error) {
    console.error('ResultsPage component error:', error);
    return null;
  }
}