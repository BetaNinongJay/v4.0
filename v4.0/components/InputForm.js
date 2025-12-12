function InputForm({ onSubmit }) {
  try {
    const [formData, setFormData] = React.useState({
      fullName: '',
      qualification: '',
      experienceLevel: '',
      skills: [],
      careerInterest: []
    });
    const [errors, setErrors] = React.useState({});

    const qualifications = [
      'BS Computer Science',
      'BS Information Technology',
      'BS Software Engineering',
      'BS Data Science',
      'BS Information Systems',
      'BS Computer Engineering',
      'BS Prompt Engineering'
    ];

    const experienceLevels = ['Entry', 'Mid', 'Senior'];

    const skillOptions = [
      'Python',
      'React',
      'SQL',
      'TensorFlow',
      'Java',
      'HTML/CSS',
      'Node.js'
    ];

    const careerInterestOptions = [
      'Data Science',
      'Web Development',
      'Cybersecurity',
      'Software Engineering',
      'IT Support'
    ];

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
      if (errors[name]) {
        setErrors(prev => ({ ...prev, [name]: '' }));
      }
    };

    const handleCheckboxChange = (name, value) => {
      setFormData(prev => {
        const currentValues = prev[name];
        const newValues = currentValues.includes(value)
          ? currentValues.filter(v => v !== value)
          : [...currentValues, value];
        return { ...prev, [name]: newValues };
      });
      if (errors[name]) {
        setErrors(prev => ({ ...prev, [name]: '' }));
      }
    };

    const validate = () => {
      const newErrors = {};
      if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
      if (!formData.qualification) newErrors.qualification = 'Qualification is required';
      if (!formData.experienceLevel) newErrors.experienceLevel = 'Experience level is required';
      if (formData.skills.length === 0) newErrors.skills = 'Please select at least one skill';
      if (formData.careerInterest.length === 0) newErrors.careerInterest = 'Please select at least one career interest';
      return newErrors;
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      const newErrors = validate();
      if (Object.keys(newErrors).length === 0) {
        onSubmit(formData);
      } else {
        setErrors(newErrors);
      }
    };

    return (
      <div className="max-w-3xl mx-auto px-4 py-12 fade-in" data-name="input-form" data-file="components/InputForm.js">
        <div className="card">
          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <div className="icon-user text-2xl text-white"></div>
            </div>
            <h2 className="text-4xl font-bold mb-3 text-[var(--text-primary)]">Tell Us About Yourself</h2>
            <p className="text-lg text-[var(--text-secondary)]">Fill in your details to get personalized job recommendations</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-7">
            <div>
              <label className="block text-sm font-semibold mb-3 text-[var(--text-primary)]">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={`input-field ${errors.fullName ? 'border-red-400' : ''}`}
                placeholder="Juan Dela Cruz"
              />
              {errors.fullName && <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                <div className="icon-alert-circle text-base"></div>
                {errors.fullName}
              </p>}
            </div>

            <div>
              <label className="block text-sm font-semibold mb-3 text-[var(--text-primary)]">Qualification</label>
              <select
                name="qualification"
                value={formData.qualification}
                onChange={handleChange}
                className={`input-field ${errors.qualification ? 'border-red-400' : ''}`}
              >
                <option value="">Select your qualification</option>
                {qualifications.map(qual => (
                  <option key={qual} value={qual}>{qual}</option>
                ))}
              </select>
              {errors.qualification && <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                <div className="icon-alert-circle text-base"></div>
                {errors.qualification}
              </p>}
            </div>

            <div>
              <label className="block text-sm font-semibold mb-3 text-[var(--text-primary)]">Experience Level</label>
              <select
                name="experienceLevel"
                value={formData.experienceLevel}
                onChange={handleChange}
                className={`input-field ${errors.experienceLevel ? 'border-red-400' : ''}`}
              >
                <option value="">Select your experience level</option>
                {experienceLevels.map(level => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
              {errors.experienceLevel && <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                <div className="icon-alert-circle text-base"></div>
                {errors.experienceLevel}
              </p>}
            </div>

            <div>
              <label className="block text-sm font-semibold mb-3 text-[var(--text-primary)]">Skills</label>
              <div className="flex flex-wrap gap-3">
                {skillOptions.map(skill => (
                  <label 
                    key={skill} 
                    className={`px-4 py-2.5 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                      formData.skills.includes(skill) 
                        ? 'bg-[var(--primary-color)] border-[var(--primary-color)] text-white shadow-md' 
                        : 'bg-white border-gray-200 text-gray-700 hover:border-[var(--primary-color)] hover:bg-blue-50'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={formData.skills.includes(skill)}
                      onChange={() => handleCheckboxChange('skills', skill)}
                      className="hidden"
                    />
                    <span className="text-sm font-medium">{skill}</span>
                  </label>
                ))}
              </div>
              {errors.skills && <p className="text-red-500 text-sm mt-3 flex items-center gap-1">
                <div className="icon-alert-circle text-base"></div>
                {errors.skills}
              </p>}
            </div>

            <div>
              <label className="block text-sm font-semibold mb-3 text-[var(--text-primary)]">Career Interest</label>
              <div className="flex flex-wrap gap-3">
                {careerInterestOptions.map(interest => (
                  <label 
                    key={interest} 
                    className={`px-4 py-2.5 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                      formData.careerInterest.includes(interest) 
                        ? 'bg-[var(--success-color)] border-[var(--success-color)] text-white shadow-md' 
                        : 'bg-white border-gray-200 text-gray-700 hover:border-[var(--success-color)] hover:bg-green-50'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={formData.careerInterest.includes(interest)}
                      onChange={() => handleCheckboxChange('careerInterest', interest)}
                      className="hidden"
                    />
                    <span className="text-sm font-medium">{interest}</span>
                  </label>
                ))}
              </div>
              {errors.careerInterest && <p className="text-red-500 text-sm mt-3 flex items-center gap-1">
                <div className="icon-alert-circle text-base"></div>
                {errors.careerInterest}
              </p>}
            </div>

            <button type="submit" className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold text-lg transition-all duration-300 hover:from-blue-700 hover:to-blue-800 hover:shadow-xl transform hover:-translate-y-0.5 cursor-pointer mt-8">
              <span className="flex items-center justify-center gap-2">
                Find My Job
                <div className="icon-arrow-right text-xl"></div>
              </span>
            </button>
          </form>
        </div>
      </div>
    );
  } catch (error) {
    console.error('InputForm component error:', error);
    return null;
  }
}
