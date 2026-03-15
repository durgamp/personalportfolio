import { DecisionLogEntry } from "@/types";

export const decisionLog: DecisionLogEntry[] = [
  {
    decision: "Prioritized audit logs over analytics → credibility first",
    why: "Compliance teams needed immutable trails before they'd consider insights",
    result:
      "100% audit compliance, analytics added in v2 with 3x engagement",
    learning: "Integrity > Insight — foundation before finesse",
    emoji: "📊",
  },
  {
    decision:
      "Democratised AI model fine-tuning to reduce AI model downtime",
    why: "Prediction models required frequent fine-tuning causing severe load on MLOps team. At the same time SME domain expertise was needed. Facilitated model training by non-tech SMEs.",
    result:
      "Robust monitoring, quick remedy to model drifts. Reduced downtime of AI models.",
    learning:
      "Democratize AI through no-code platforms — domain experts beat data scientists when they control the tools",
    emoji: "🏭",
  },
  {
    decision: "Prioritized Data Foundation over AI features",
    why: "Sales Team wanted AI-based semi-autonomous system to create RFPs, with model trained on existing semi-structured data. But I believed data needs to be structured and contextual for relevant outcomes.",
    result:
      "Instead of training model on bad-quality data, shifted AI features to future release without hurting MVP.",
    learning:
      "Structured data is a must for AI strategy. Do not build something now if it might risk value rather than create it.",
    emoji: "🤖",
  },
];
