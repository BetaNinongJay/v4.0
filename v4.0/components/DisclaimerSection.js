function DisclaimerSection({ onClose }) {
  try {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 fade-in" data-name="disclaimer-section" data-file="components/DisclaimerSection.js">
        <div className="card">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center shadow-lg">
                <div className="icon-alert-triangle text-2xl text-white"></div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-[var(--text-primary)]">Disclaimer</h2>
                <p className="text-[var(--text-secondary)]">Important information about our service</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-lg hover:bg-gray-100 flex items-center justify-center transition-all"
            >
              <div className="icon-x text-xl text-gray-600"></div>
            </button>
          </div>

          <div className="space-y-6 text-[var(--text-secondary)] leading-relaxed">
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
              <div className="flex items-start gap-3">
                <div className="icon-info text-xl text-yellow-600 flex-shrink-0 mt-0.5"></div>
                <p className="text-sm text-yellow-800 font-medium">
                  Please read this disclaimer carefully before using Career Recommendation App. By using this service, you acknowledge and agree to the terms outlined below.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">General Information</h3>
              <p>Career Recommendation App is an AI-powered career recommendation tool designed to provide guidance based on your profile information. The recommendations are generated using algorithms and should be considered as suggestions rather than definitive career advice.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">No Guarantee of Results</h3>
              <p>While we strive to provide accurate and helpful recommendations, we cannot guarantee specific outcomes, job placements, or career success. The job market is dynamic and influenced by numerous factors beyond our control.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">Professional Advice</h3>
              <p>Career Recommendation App does not replace professional career counseling or guidance. For personalized career planning, we recommend consulting with qualified career advisors or counselors who can provide tailored advice based on your unique circumstances.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">Data Accuracy</h3>
              <p>The quality of recommendations depends on the accuracy and completeness of the information you provide. Please ensure that you input correct and up-to-date information about your qualifications, skills, and interests.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">Limitation of Liability</h3>
              <p>We are not liable for any decisions made based on the recommendations provided by Career Recommendation App. Users are responsible for conducting their own research and due diligence before making career-related decisions.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">Updates and Changes</h3>
              <p>We reserve the right to modify, update, or discontinue any aspect of Career Recommendation App at any time without prior notice. Job recommendations and matching algorithms may be updated periodically to improve accuracy.</p>
            </div>

            <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Note:</strong> By using Career Recommendation App, you acknowledge that you have read, understood, and agree to this disclaimer. If you do not agree with any part of this disclaimer, please discontinue use of the service.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <button
              onClick={onClose}
              className="px-6 py-3 bg-[var(--primary-color)] text-white rounded-xl font-semibold transition-all duration-300 hover:bg-blue-700 hover:shadow-lg"
            >
              I Understand
            </button>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('DisclaimerSection component error:', error);
    return null;
  }
}