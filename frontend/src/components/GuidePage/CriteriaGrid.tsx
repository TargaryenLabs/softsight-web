"use client";
import React from "react";
import { motion } from "framer-motion";

const criteria = [
  {
    category: "Project-Specific Inputs",
    items: [
      {
        label: "project_complexity",
        description: "Complexity of features and integrations",
        example:
          "Example: Low: Simple CRUD, few users, known tech, Medium: Multiple modules, external API, High: High concurrency, AI/ML, microservices",
        howToGet: "Self-assessment or PM judgment",
      },

      {
        label: "scope_clarity",
        description: "Clarity and completeness of the requirements",
        example:
          "Example: Clear: Detailed requirements documented, Medium: Partial clarity, Vague: No detailed specs or frequent changes",
        howToGet: "Ask PM/stakeholders during planning",
      },
      {
        label: "urgency_level",
        description: "Time pressure or critical deadlines",
        example:
          "Example: Low: Flexible timeline, Medium: Moderate pressure, High: Time-critical, regulatory deadline",
        howToGet: "Ask client/business team",
      },

      {
        label: "on_schedule",
        description: "Delivered within planned timeline",
        example: "Example: First release completed 2 days early.",
        howToGet: "Compare timeline with actual delivery",
      },
      {
        label: "budget_estimation",
        description: "Total allocated project budget (USD)",
        example: "Example: The project has a budget of $75,000.",
        howToGet: "From project documentation or finance team",
      },
    ],
  },
  {
    category: "Organizational Structure",
    items: [
      {
        label: "org_structure_type",
        description: "Functional, Matrix, or Projectized",
        example: "Example: Matrix structure with dual reporting.",
        howToGet: "Ask HR or management",
      },
      {
        label: "client_priority",
        description: "Whether time, cost, or quality is top priority",
        example: 'Example: Client prioritizes "Time to Market".',
        howToGet: "Ask the client or PM",
      },
      {
        label: "control_mechanism",
        description: "Monitoring tools and decision mechanisms used",
        example: "Example: Progress tracked via Jira sprint board.",
        howToGet: "Ask team or check tools used for governance",
      },
      {
        label: "risk_management_score",
        description: "Preparedness for and response to risks",
        example:
          "Example: - Low: No planning, Medium: Identified but not tracked, High: Tracked & mitigated",
        howToGet: "Ask PM or review risk documentation",
      },
    ],
  },
  {
    category: "Team Experience & Collaboration",
    items: [
      {
        label: "avg_dev_experience",
        description: "Average years of experience among developers",
        example:
          "Example: A team with members having 3, 5, and 7 years experience averages 5 years.",
        howToGet:
          "Ask HR/project manager for average years of experience of developers on the project",
      },
      {
        label: "pm_experience",
        description: "Project manager’s experience in years",
        example:
          "Example: The PM has 8 years of project management experience.",
        howToGet: "Ask project manager or HR for PM’s experience in years",
      },

      {
        label: "team_sdlc_knowledge",
        description: "Familiarity with software development lifecycle",
        example:
          "Example: Low: No formal training, Medium: Aware of SDLC steps, High: Experienced with multiple SDLCs",
        howToGet: "Interview or check training records",
      },
      {
        label: "user_involvement",
        description: "End-user participation in project phases",
        example:
          "Example: Low: No user input, Medium: Periodic reviews, High: Users in every phase",
        howToGet: "Observe or ask about user engagement",
      },

      {
        label: "communication_quality",
        description: "How effective team communication was",
        example: "Example: Daily standups and retrospectives held.",
        howToGet: "Survey team or check communication logs",
      },
    ],
  },
  {
    category: "Technology & Tools",
    items: [
      {
        label: "tool_familiarity",
        description: "Familiarity with tools like Git, Jira, CI/CD",
        example: "Example: Team uses GitHub, Jenkins, and Jira daily.",
        howToGet: "Ask team members directly",
      },
      {
        label: "legacy_system_involved",
        description: "Whether integration with old systems was required",
        example: "Example: Integrated with Oracle 2008 system.",
        howToGet: "Ask technical lead or review system dependencies",
      },
      {
        label: "tech_stack_familiarity",
        description: "Whether team is comfortable with the tech stack",
        example: "Example: Prior experience with React and Node.js.",
        howToGet: "Ask developers if stack is familiar or new",
      },
      {
        label: "testing_strategy",
        description: "Manual or automated testing approaches",
        example: "Example: Automated tests with Jest and Cypress.",
        howToGet: "Ask QA team or review test plans",
      },
    ],
  },
];

export const CriteriaGrid = () => {
  return (
    <section className="grid w-[1200px]  mt-[150px] gap-8 md:grid-cols-2 ">
      {criteria.map((block, index) => (
        <motion.div
          key={index}
          className="rounded-2xl shadow-lg flex flex-col items-center p-6 bg-white hover:shadow-xl transition-shadow"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-4 text-indigo-600">
            {block.category}
          </h3>
          <ul className="space-y-4">
            {block.items.map((item, idx) => (
              <li key={idx}>
                <div className="font-medium text-gray-700">{item.label}:</div>
                <div className="text-gray-600 mb-1">{item.description}</div>
                <div className="text-sm text-gray-500 italic">
                  {item.example}
                </div>
                {item.howToGet && (
                  <div className="text-xs text-gray-400 mt-1">
                    How to get: {item.howToGet}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </section>
  );
};
