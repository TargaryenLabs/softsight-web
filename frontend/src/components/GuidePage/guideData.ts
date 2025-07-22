export type Attribute = {
  key: string;
  label: string;
  description: string;
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
        description: `

> Complexity of features and integrations

### Complexity Scoring

| Level | Description              |
|-------|--------------------------|
| Low   | Simple CRUD, few users   |
| High  | AI/ML, microservices     |

#### Equation:
$$
Score = \\frac{\\text{Tasks} \\times \\text{Difficulty}}{\\text{Team Size}}
$$

`,
      },
      {
        key: "scope_clarity",
        label: "Scope Clarity",
        description: "Clarity and completeness of the requirements",
      },
      {
        key: "urgency_level",
        label: "Urgency Level",
        description: "Time pressure or critical deadlines",
      },
      {
        key: "on_schedule",
        label: "On Schedule",
        description: "Delivered within planned timeline",
      },
      {
        key: "budget_estimation",
        label: "Budget Estimation",
        description: "Total allocated project budget (USD)",
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
      },
      {
        key: "client_priority",
        label: "Client Priority",
        description: "Whether time, cost, or quality is top priority",
      },
      {
        key: "control_mechanism",
        label: "Control Mechanism",
        description: "Monitoring tools and decision mechanisms used",
      },
      {
        key: "risk_management_score",
        label: "Risk Management Score",
        description: "Preparedness and response to risks",
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
      },
      {
        key: "pm_experience",
        label: "PM Experience",
        description: "Project manager’s experience in years",
      },
      {
        key: "team_sdlc_knowledge",
        label: "Team SDLC Knowledge",
        description: "Familiarity with software lifecycle",
      },
      {
        key: "user_involvement",
        label: "User Involvement",
        description: "End-user participation",
      },
      {
        key: "communication_quality",
        label: "Communication Quality",
        description: "How effective team communication was",
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
      },
      {
        key: "legacy_system_involved",
        label: "Legacy System Involved",
        description: "Whether integration with legacy systems required",
      },
      {
        key: "tech_stack_familiarity",
        label: "Tech Stack Familiarity",
        description: "Comfort with tech stack used",
      },
      {
        key: "testing_strategy",
        label: "Testing Strategy",
        description: "Testing methods used",
      },
    ],
  },
];

export const projectSuccessStatus = {
  key: "success_status",
  label: "Project Success Status",
  description:
    "The estimated probability (0.0 to 1.0) that the project will be successful based on all the input factors.",
};
