
import { DiagnosticState } from '../types';

export const generateCareerAnalysis = async (state: DiagnosticState): Promise<string> => {
  console.log("Generating AI analysis for:", state.leadInfo.email);

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1500));

  const hookTitle = state.snapshotData?.hook?.title || "Unknown Profile";

  let verdict = "Your profile suggests a mismatch between your capabilities and how the market perceives you. It's time to build a new narrative.";

  if (hookTitle === "Underestimated Leverage") {
    verdict = "You are likely operating in a 'safe' zone, but your high judgment qualifies you for roles with significantly more impact and ownership. The key is to shift your narrative from 'competent' to 'strategic.'";
  } else if (hookTitle === "Mis-scoped Opportunities") {
    verdict = "Your strength lies in ambiguous situations, but you're being evaluated for well-defined roles. This leads to responsibility without true control. Your next move must target 'fixer' or 'builder' scenarios.";
  } else if (hookTitle === "High Capability, Low Signal") {
    verdict = "Your skills are not being accurately communicated by your current resume and LinkedIn profile. The market is pattern-matching you to your last role, not your potential. A brand asset overhaul is critical.";
  } else if (hookTitle === "Structural Overqualification") {
     verdict = "You're correctly perceived as a senior talent, but this is ironically causing friction, as companies fear you're a flight risk for the roles they have open. The strategy is to target roles where the scope can be expanded post-hire.";
  }

  return Promise.resolve(verdict);
};
