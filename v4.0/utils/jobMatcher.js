function generateJobRecommendations(userData) {
  const userSkills = userData.skills.map(s => s.toLowerCase());
  const userInterests = userData.careerInterest.map(i => i.toLowerCase());
  const experienceLevel = userData.experienceLevel;
  
  const jobDatabase = [
    {
      title: 'Data Scientist',
      relatedInterests: ['data science'],
      requiredSkills: ['python', 'sql', 'tensorflow'],
      icon: 'brain',
      description: 'Analyze complex data and build ML models',
      baseMatch: 70
    },
    {
      title: 'Machine Learning Engineer',
      relatedInterests: ['data science', 'software engineering'],
      requiredSkills: ['python', 'tensorflow'],
      icon: 'cpu',
      description: 'Design and implement machine learning systems',
      baseMatch: 72
    },
    {
      title: 'Full Stack Developer',
      relatedInterests: ['web development', 'software engineering'],
      requiredSkills: ['react', 'node.js', 'html/css', 'sql'],
      icon: 'code',
      description: 'Build end-to-end web applications',
      baseMatch: 75
    },
    {
      title: 'Frontend Developer',
      relatedInterests: ['web development'],
      requiredSkills: ['react', 'html/css'],
      icon: 'layout',
      description: 'Create responsive user interfaces',
      baseMatch: 73
    },
    {
      title: 'Backend Developer',
      relatedInterests: ['web development', 'software engineering'],
      requiredSkills: ['node.js', 'sql', 'java', 'python'],
      icon: 'server',
      description: 'Develop server-side applications and APIs',
      baseMatch: 74
    },
    {
      title: 'Cybersecurity Analyst',
      relatedInterests: ['cybersecurity'],
      requiredSkills: ['python', 'sql'],
      icon: 'shield',
      description: 'Protect systems from security threats',
      baseMatch: 68
    },
    {
      title: 'Software Engineer',
      relatedInterests: ['software engineering'],
      requiredSkills: ['java', 'python'],
      icon: 'terminal',
      description: 'Design and develop software solutions',
      baseMatch: 76
    },
    {
      title: 'IT Support Specialist',
      relatedInterests: ['it support'],
      requiredSkills: ['sql'],
      icon: 'headphones',
      description: 'Provide technical assistance and support',
      baseMatch: 65
    },
    {
      title: 'Data Analyst',
      relatedInterests: ['data science'],
      requiredSkills: ['sql', 'python'],
      icon: 'chart-bar',
      description: 'Interpret data and generate insights',
      baseMatch: 69
    }
  ];

  const matches = jobDatabase.map(job => {
    let matchScore = job.baseMatch;
    const matchedSkills = [];
    
    userInterests.forEach(interest => {
      if (job.relatedInterests.includes(interest)) {
        matchScore += 8;
      }
    });
    
    userSkills.forEach(skill => {
      job.requiredSkills.forEach(reqSkill => {
        if (skill === reqSkill) {
          matchScore += 6;
          if (!matchedSkills.includes(skill)) {
            matchedSkills.push(skill);
          }
        }
      });
    });
    
    if (experienceLevel === 'Senior') matchScore += 5;
    else if (experienceLevel === 'Mid') matchScore += 3;
    else if (experienceLevel === 'Entry') matchScore += 1;
    
    matchScore = Math.min(matchScore, 99);
    
    return {
      ...job,
      matchPercentage: matchScore,
      matchedSkills: matchedSkills.slice(0, 3)
    };
  });

  return matches
    .sort((a, b) => b.matchPercentage - a.matchPercentage)
    .slice(0, 5);
}
