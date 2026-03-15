import { Project } from "@/types";

export const projects: Project[] = [
  // --- Final Implementations ---
  {
    title: "Transforming Sourcing with Power of AI",
    context:
      "Procurement team managed 720+ RFQs manually. RFQ turnaround times averaged 3-4 days, creating bottlenecks in response timelines and ultimately impacting win ratio.",
    decision:
      "Built AI-powered Supplier Ranking and Price Discovery, and real-time price benchmarking. Prioritized speed and accuracy.\n\nKey Features:\n• Supplier Evaluation framework based on a set of business rules\n• Price Discovery from multiple suppliers with a single search\n• New supplier discovery from the open internet\n• Long-term storage of historical data for compliance",
    impact:
      "RFQ Response TAT reduced by 33% (3 days → 2 days). Saved 450+ hours annually in manual vendor coordination.",
    reflection:
      "AI's value isn't in replacing humans — it's in eliminating non-value adding tasks so teams can focus on strategic supplier relationships.",
    prototypeLink:
      "https://www.figma.com/make/bHUrxrZL1rrpuOAzTNYz36/AI-Sourcing-App?fullscreen=1",
    category: "final",
  },
  {
    title: "Digitizing Compliance in Life Sciences",
    context:
      "FDA 21 CFR Part 11 compliance challenge. Paper-based processes created audit trail gaps and delayed submissions.",
    decision:
      "Built Electronic Lab Notebook (ELN) with immutable audit trails and e-signatures. Prioritized compliance integrity over feature richness.",
    impact:
      "Zero compliance issues during internal audit in last 18 months. Customer satisfaction rose 33% due to data compliance and transparency.",
    reflection:
      "Compliance isn't a checkbox — it's a design constraint that creates better, more trustworthy products.",
    prototypeLink:
      "https://www.figma.com/make/0X1EqYauUVNEWLjCQeh8OL/Electronic-Lab-Notebook-Design?fullscreen=1",
    category: "final",
  },
  {
    title: "Plant Maintenance Digitization",
    context:
      "Manual maintenance logs caused compliance issues mixed with unplanned downtime and safety incidents.",
    decision:
      "Built mobile-first equipment inspection and observation submission application for equipment monitoring.",
    impact:
      "Reduced unplanned downtime by 35%. Prevented 12 safety incidents in first year. Culture shifted from reactive to proactive maintenance.",
    reflection:
      "Manufacturing 4.0 isn't about technology — it's about empowering stakeholders, encouraging data-based decision-making, augmenting humans with technology.",
    prototypeLink:
      "https://www.figma.com/make/x2CYzlojuDjH67i9k9Ps91/Cement-Plant-Maint-App?fullscreen=1",
    category: "final",
  },
  {
    title: "A Case for Inventory Management",
    context:
      "Plant stores faced stock discrepancies and overstocking issues. SAP-based inventory tracking lacked user-friendliness leading to 15% variance between physical and system records.",
    decision:
      "Implemented mobile-first buyer stock issue and reservation application. Optimization recommendations for store persons improved collaboration and transparency.",
    impact:
      "Non-moving inventory reduced. Reservation accuracy improved maintenance planning. Stock-out incidents dropped by 10%.",
    reflection:
      "Real-time visibility transforms inventory from a cost center to a competitive advantage. Small improvements in accuracy compound into massive savings.",
    prototypeLink:
      "https://www.figma.com/make/GZb1BGNa9q5V16uufE6BBn/Cement-Plant-Inventory-App?fullscreen=1",
    category: "final",
  },
  {
    title: "Automating Proposal Management to Reduce TAT",
    context:
      "Sales teams spent 6-8 hours per proposal for Fortune 500 deals. Manual template customization delayed customer responses by 3-5 days.",
    decision:
      "Developed smart proposal automation with dynamic template generation, AI-driven content recommendations, and parallel approval routing. Integrated with CRM for contextual customization.",
    impact:
      "Proposal generation time reduced from 6 hours to 45 minutes (87% reduction). Sales cycle shortened by 4.2 days on average. Win rate improved by 12%.",
    reflection:
      "Sales velocity isn't just about speed — it's about giving teams more time for customer conversations instead of document formatting.",
    prototypeLink:
      "https://www.figma.com/make/RipScHEa7N3O0t7UjKTYn9/Biologics-Proposal-Management-MVP-2.0?fullscreen=1",
    category: "final",
  },

  // --- Working Prototypes ---
  {
    title: "Subscription Transparency Platform",
    context:
      "Frictionless digital payments have made recurring charges easy to forget, causing millions to waste money annually on unused subscriptions and hidden small-ticket auto-debits.",
    decision:
      "Built unified dashboard that auto-detects subscriptions, tracks usage vs charges, and provides single-click mandate cancellation to bypass dark patterns.",
    impact:
      "Automatic subscription scanning from Google Pay, manual subscription addition, subscription scan using bank statements and emails, reminders for visibility and actioning, spend insights by category, spend recommendations as per budget and usage.",
    reflection:
      "Transparency builds trust. When customers understand their bills, they become advocates, not detractors.",
    prototypeLink: "https://subscription-swachh-gpay.lovable.app/",
    category: "prototype",
  },
  {
    title: "Multi-Location Ecommerce Delivery",
    context:
      "Multiple location ordering in a single cart checkout is something e-comm players do not provide. Fulfillment center selection, logistics cost determination, and last-mile delivery become complex at scale.",
    decision:
      "Allow users to select address at cart item level during checkout. Users review address-level final costs and pay once. Fulfillment center auto-selected for minimal logistics cost.",
    impact:
      "Cart item-level address selection, address-level delivery cost calculation, intelligent logistics order routing system, address-level invoice generator.",
    reflection:
      "Ecommerce logistics isn't just about fast shipping — it's about smart inventory placement that anticipates customer demand geographically.",
    prototypeLink:
      "https://www.figma.com/make/dtLHEZFE8PQkNFYnsBHV8x/E-Commerce-Application?fullscreen=1",
    category: "prototype",
  },
  {
    title: "B2B Marketplace for Blue Collar Workers",
    context:
      "Daily wage labor in India is inefficient and exploitative. Workers wait at 'naka' points with no guarantee of work. Employers struggle to find reliable, verified workers without a formal system.",
    decision:
      "Built B2B marketplace connecting businesses directly with verified skilled workers (welders, electricians, plumbers) with skill-based matching, background verification, and digital contracts.",
    impact:
      "Worker Features: Aadhaar-based sign-up, Verified Skill Passport, advance booking with guaranteed payment, ratings & proof of work.\n\nEmployer Features: OTP sign-up, search by location & skill, instant booking, payments, and repeat hiring of trusted workers.",
    reflection:
      "The gig economy isn't just for white-collar workers. Blue-collar skilled trades deserve the same dignity, transparency, and efficiency in finding good work.",
    prototypeLink:
      "https://www.figma.com/make/kbBsaqWeRWknZ7s7a1Si8N/RozgaarNaka-Admin-Prototype?fullscreen=1",
    category: "prototype",
  },
  {
    title: "Culture Compass",
    context:
      "86% of Indian employees report 'struggling' or 'suffering' at work. 83% have experienced burnout. Toxic workplaces are an epidemic with no structured way to measure or address them.",
    decision:
      "Built around pain points: blurring work-life boundaries, micromanagement, disrespectful communication, opaque career paths, and lack of psychological safety.",
    impact:
      "Detect and quantify toxicity signals. Provide clear metrics (toxicity score, work-life balance score). Deliver actionable tips and verified resources. Data-driven Stay/Leave decision support with financial runway calculator.",
    reflection:
      "Culture isn't what you put on the walls — it's what shows up in everyday decisions. Measuring it transparently is the first step to protecting it during growth.",
    prototypeLink: "https://safespace-connect-grow.lovable.app/",
    category: "prototype",
  },
  {
    title: "NextGen Travel Companion",
    context:
      "Solo travelers spent 8-12 hours planning trips across multiple apps. 40% abandoned trip planning due to information overload and decision fatigue.",
    decision:
      "Built AI-powered travel companion with personalized itinerary generation, real-time local recommendations, budget tracking, and collaborative planning for group trips.",
    impact:
      "Prototype showed 75% reduction in planning time (10 hours → 2.5 hours), 92% user satisfaction, and 45% higher trip completion rate compared to traditional planning methods.",
    reflection:
      "Travel planning should inspire excitement, not exhaustion. The best travel tech gets out of the way and lets people focus on the experience, not the logistics.",
    prototypeLink:
      "https://www.figma.com/make/EqHUlF8LzkTYtMro9cjXcJ/Next-Gen-Travel-App?fullscreen=1",
    category: "prototype",
  },
  {
    title: "A Case for Mental Wellness for Men",
    context:
      "Men aged 18–35 in India face increasing isolation and emotional strain. Indian men are more than twice as likely as women to die by suicide, yet stigma prevents help-seeking.",
    decision:
      "Design support experiences that emphasize privacy, action orientation, and incremental disclosure. Avoid anything overtly 'therapeutic' — focus on strength, logic, and practical help at first touch.",
    impact:
      "Emotional literacy through performance framing, structured action-oriented self-reflection, physiological tools for stress regulation, activity-first mission-led groups, clear group norms for psychological safety.",
    reflection:
      "Mental health tools designed for everyone often work for no one. Men need spaces that understand their unique barriers — not one-size-fits-all solutions repackaged.",
    prototypeLink:
      "https://www.figma.com/make/y5GbS5p184uUFK4Jo7JmZp/Zenith-Ver-3.0?fullscreen=1",
    category: "prototype",
  },
  {
    title: "Maitri — Menstrual Wellness",
    context:
      "Young women (18-36) in India balancing education or early careers experience unpredictable, high-symptom days. Stigma, lack of accommodations, and pressure to push through create a self-reinforcing loop of exhaustion.",
    decision:
      "Build solution around: unpredictable 'bad days', guilt about reduced output, awkward leave/extension asks, poor sleep around cycle windows, and ruminative late-night scrolling.",
    impact:
      "Lightweight, stigma-aware tool that helps students and early-career professionals anticipate symptom-heavy days, plan simple self-care routines, and request accommodations discreetly.",
    reflection:
      "Menstrual wellness isn't just about fertility tracking — it's about recognizing that periods impact work, health, and quality of life, and building support systems around that reality.",
    prototypeLink: "https://cycle-flow-for-all.lovable.app/",
    category: "prototype",
  },
  {
    title: "A Case for City & Traffic Management",
    context:
      "Congestion drains city GDP at metro scale. Delhi alone faces losses estimated at USD 12.0B by 2025. Even a 5-10% reduction on top corridors moves crores in payroll time, logistics SLAs, fuel burn, and emissions.",
    decision:
      "Build solution around: fragmented systems, difficulty correlating data, overwhelming cognitive load, inefficient alerting, no unified public transport dashboard, poor emergency corridor management.",
    impact:
      "Single Operational Picture (SOP): operators see corridor reliability/throughput/disruptions on one screen. Operators can assign owner + SLA to any alert. Live layers meet minimum freshness bars: congestion ≤60s, signals ≤10s. No PII exposure; audit log for all operator actions.",
    reflection:
      "Smart cities aren't about technology for its own sake — they're about using data to give people their time back and make urban living more humane.",
    prototypeLink:
      "https://www.figma.com/make/A0userQJE2ZAIezPa5PKol/Garuda-Vision-V3.0?fullscreen=1",
    category: "prototype",
  },
];
