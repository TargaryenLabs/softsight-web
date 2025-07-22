export type Attribute = {
  key: string;
  label: string;
  description: string;
  example: string;
  howToGet?: string;
};

export type AttributeCategory = {
  title: string;
  items: Attribute[];
};

export const overviewText = `
This guide provides a complete breakdown of all input features used for project success prediction. 
Each attribute contributes to evaluating the likelihood of successful project delivery. 
Below you'll find detailed descriptions of each factor used in the prediction model.
`;

export const attributeCategories: AttributeCategory[] = [
  {
    title: "Project-Specific Inputs",
    items: [
      {
        key: "project_complexity",
        label: "Project Complexity",
        description: "Complexity of features and integrations",
        example: "Low: Simple CRUD, few users, known tech. High: AI/ML, microservices.",
        howToGet: "Self-assessment or PM judgment",
      },
      {
        key: "scope_clarity",
        label: "Scope Clarity",
        description: "Clarity and completeness of the requirements",
        example: "Clear: Detailed specs. Vague: No detailed specs or frequent changes",
        howToGet: "Ask PM/stakeholders",
      },
      {
        key: "urgency_level",
        label: "Urgency Level",
        description: "Time pressure or critical deadlines",
        example: "Low: Flexible. High: Time-critical",
        howToGet: "Ask client/business team",
      },
      {
        key: "on_schedule",
        label: "On Schedule",
        description: "Delivered within planned timeline",
        example: "e.g., First release completed 2 days early.",
        howToGet: "Compare timeline with actual delivery",
      },
      {
        key: "budget_estimation",
        label: "Budget Estimation",
        description: "Total allocated project budget (USD)",
        example: "e.g., Project budget is $75,000.",
        howToGet: "From documentation or finance team",
      },
    ],
  },
  {
    title: "Organizational Structure",
    items: [
      {
        key: "org_structure_type",
        label: "Org Structure Type",
        description: "Functional, Matrix, or Projectized",
        example: "e.g., Matrix structure with dual reporting.",
        howToGet: "Ask HR or management",
      },
      {
        key: "client_priority",
        label: "Client Priority",
        description: "Whether time, cost, or quality is top priority",
        example: 'e.g., Client prioritizes "Time to Market".',
        howToGet: "Ask client or PM",
      },
      {
        key: "control_mechanism",
        label: "Control Mechanism",
        description: "Monitoring tools and decision mechanisms used",
        example: "e.g., Jira sprint board.",
        howToGet: "Ask team or check tools used",
      },
      {
        key: "risk_management_score",
        label: "Risk Management Score",
        description: "Preparedness and response to risks",
        example: "High: Tracked and mitigated",
        howToGet: "Ask PM or check risk docs",
      },
    ],
  },
  {
    title: "Team Experience & Collaboration",
    items: [
      {
        key: "avg_dev_experience",
        label: "Avg Dev Experience",
        description: "Average years of dev experience",
        example: "e.g., Team avg is 5 years",
        howToGet: "Ask HR or PM",
      },
      {
        key: "pm_experience",
        label: "PM Experience",
        description: "Project manager’s experience in years",
        example: "e.g., PM has 8 years experience",
        howToGet: "Ask PM or HR",
      },
      {
        key: "team_sdlc_knowledge",
        label: "Team SDLC Knowledge",
        description: "Familiarity with software lifecycle",
        example: "High: Experienced in SDLCs",
        howToGet: "Interview or training records",
      },
      {
        key: "user_involvement",
        label: "User Involvement",
        description: "End-user participation",
        example: "High: Users in every phase",
        howToGet: "Ask or observe involvement",
      },
      {
        key: "communication_quality",
        label: "Communication Quality",
        description: "How effective team communication was",
        example: "e.g., Daily standups held",
        howToGet: "Survey or logs",
      },
    ],
  },
  {
    title: "Technology & Tools",
    items: [
      {
        key: "tool_familiarity",
        label: "Tool Familiarity",
        description: "Familiarity with tools like Git, Jira",
        example: "e.g., Uses GitHub, Jenkins",
        howToGet: "Ask team",
      },
      {
        key: "legacy_system_involved",
        label: "Legacy System Involved",
        description: "Whether integration with legacy systems required",
        example: "e.g., Oracle 2008 system",
        howToGet: "Ask tech lead or review",
      },
      {
        key: "tech_stack_familiarity",
        label: "Tech Stack Familiarity",
        description: "Comfort with tech stack used",
        example: "e.g., React and Node.js experience",
        howToGet: "Ask devs",
      },
      {
        key: "testing_strategy",
        label: "Testing Strategy",
        description: "Testing methods used",
        example: "e.g., Jest + Cypress automation",
        howToGet: "Ask QA or check test plans",
      },
    ],
  },
];

export const projectSuccessStatus = {
  key: "success_status",
  label: "Project Success Status",
  description:
    "The estimated probability (0.0 to 1.0) that the project will be successful based on all the input factors.",
  example: "e.g., 0.85 (85% probability of success)",
  howToGet: "Automatically predicted using ML model",
};
