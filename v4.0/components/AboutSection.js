function AboutSection({ onClose }) {
  try {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 fade-in" data-name="about-section" data-file="components/AboutSection.js">
        <div className="card">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
                <div className="icon-info text-2xl text-white"></div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-[var(--text-primary)]">About Career Matcher</h2>
                <p className="text-[var(--text-secondary)]">Your AI-powered career guidance platform</p>
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
            <div>
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <div className="icon-target text-lg text-[var(--primary-color)]"></div>
                Our Mission
              </h3>
              <p>Career Matcher is designed to help individuals discover their ideal career paths by leveraging advanced AI technology. We analyze your skills, qualifications, experience, and interests to provide personalized job recommendations that align with your professional goals.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <div className="icon-sparkles text-lg text-[var(--primary-color)]"></div>
                How It Works
              </h3>
              <ul className="space-y-2 list-disc list-inside">
                <li>Fill out your profile with your educational background and skills</li>
                <li>Select your career interests and experience level</li>
                <li>Our AI analyzes your profile against thousands of job opportunities</li>
                <li>Receive top 5 personalized job recommendations with match percentages</li>
                <li>Explore detailed job descriptions and required skills</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <div className="icon-shield-check text-lg text-[var(--primary-color)]"></div>
                Why Choose Us
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                    <div className="icon-check text-sm text-green-600"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--text-primary)]">AI-Powered</h4>
                    <p className="text-sm">Advanced algorithms for accurate matching</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                    <div className="icon-check text-sm text-green-600"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--text-primary)]">Free to Use</h4>
                    <p className="text-sm">No hidden fees or subscriptions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                    <div className="icon-check text-sm text-green-600"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--text-primary)]">Personalized</h4>
                    <p className="text-sm">Tailored recommendations for you</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                    <div className="icon-check text-sm text-green-600"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--text-primary)]">Easy to Use</h4>
                    <p className="text-sm">Simple interface, quick results</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <button
              onClick={onClose}
              className="px-6 py-3 bg-[var(--primary-color)] text-white rounded-xl font-semibold transition-all duration-300 hover:bg-blue-700 hover:shadow-lg"
            >
              Got It
            </button>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('AboutSection component error:', error);
    return null;
  }
}