
const scoringConfig = {
  // Phase 1: The Kill Switch (Auto-Reject)
  killSwitchCriteria: {
    workAuth: ["I require visa sponsorship to work in the US."],
    experience: ["Less than 3 years"],
    currentSalary: ["Under $80,000"],
  },

  // Phase 2: Weighted Scoring
  weights: {
    economicValue: {
      currentSalary: {
        "Under $80,000": 0,
        "$80,000 – $120,000": 5,
        "$120,000 – $200,000": 10,
        "$200,000 – $400,000+": 15,
      },
      targetCompUplift: 15, // Points for realistic uplift
    },
    hiringVelocity: {
      status: {
        "Passive: Happily employed but open to strategic moves.": 10,
        "Active: Employed but actively looking to leave.": 10,
        "In Transition: Unemployed (< 3 months).": 5,
        "Long-Term Transition: Unemployed (> 6 months).": -10,
      },
      pipeline: {
        "Cold: Just started looking; no traction yet.": 0,
        "Warm: Applied to roles, waiting on responses.": 5,
        "Hot: Currently in active interview loops.": 20,
        "Closing: Have an offer in hand (or expecting one soon) and need negotiation support.": 30,
      },
    },
    strategicFit: {
      motivation: {
        "Stability: \"I need to secure a role as quickly as possible to cover expenses.\"": 0,
        "Growth: \"I am looking to level up my title/compensation in my next move.\"": 30,
        "Pivot: \"I want to switch industries/functions completely.\"": 10,
        "Strategy: \"I need a partner to manage my career architecture and negotiation.\"": 30,
      },
    },
  },

  // The Tiers (Verdict)
  tierThresholds: {
    tier1: 80,
    tier2: 50,
  },
};

// Helper function to parse salary string to a number
function parseSalary(salaryString) {
  if (!salaryString) return 0;
  const match = salaryString.match(/(\d{1,3}(,\d{3})*)/); // Find the first number
  if (match) {
    return parseInt(match[0].replace(/,/g, ''), 10);
  }
  return 0;
}


function calculateScore(applicationData) {
  let score = 0;

  // Kill Switch Check
  if (
    scoringConfig.killSwitchCriteria.workAuth.includes(applicationData.workAuthorization) ||
    scoringConfig.killSwitchCriteria.experience.includes(applicationData.yearsOfExperience)
  ) {
    return 0;
  }
  
  // Economic Value
  score += scoringConfig.weights.economicValue.currentSalary[applicationData.currentSalary] || 0;

  // Target Comp Uplift
  const currentSalaryValue = parseSalary(applicationData.currentSalary);
  const targetCompValue = parseInt(applicationData.targetComp, 10);

  if (currentSalaryValue > 0 && targetCompValue > 0) {
    const upliftRatio = (targetCompValue - currentSalaryValue) / currentSalaryValue;
    // Grant points for a "realistic" uplift (e.g., <= 50%)
    if (upliftRatio > 0 && upliftRatio <= 0.5) {
      score += scoringConfig.weights.economicValue.targetCompUplift;
    }
  }


  // Hiring Velocity
  score += scoringConfig.weights.hiringVelocity.status[applicationData.employmentStatus] || 0;
  score += scoringConfig.weights.hiringVelocity.pipeline[applicationData.pipelineVelocity] || 0;

  // Strategic Fit
  score += scoringConfig.weights.strategicFit.motivation[applicationData.primaryMotivation] || 0;

  return score;
}

function getTier(score) {
  if (score >= scoringConfig.tierThresholds.tier1) {
    return 'High-Priority';
  } else if (score >= scoringConfig.tierThresholds.tier2) {
    return 'Standard';
  } else {
    return 'Low-Priority';
  }
}

module.exports = { calculateScore, getTier, scoringConfig };
