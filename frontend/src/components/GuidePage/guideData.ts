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

Indicates the overall difficulty and intricacy of the project based on scope, dependencies, and required expertise. This attribute can be calculated using a **weighted scoring model** based on several key drivers of complexity.

## Calculation Method

Use a **weighted sum of scores** from different complexity dimensions. For each dimension:

- Assign a score (e.g., $1$ for Low, $2$ for Medium, $3$ for High)
- Multiply it by its assigned weight
- Sum the results

The final score is then mapped to the **Low**, **Medium**, or **High** complexity category.

### Formula

The Complexity Score ($\\text{CS}$) is calculated as:

$$
\\text{CS} = (W_f \\times S_f) + (W_i \\times S_i) + (W_d \\times S_d) + (W_t \\times S_t)
$$

Where:  
- $S_f$: Feature count score  
- $S_i$: Integrations score  
- $S_d$: Data complexity score  
- $S_t$: Technology newness score  
- $W_f$, $W_i$, $W_d$, $W_t$: Corresponding weights

### Scoring Table

| Dimension              | Symbol | Score Levels                        | Description                           |
|------------------------|--------|-------------------------------------|---------------------------------------|
| Feature Count          | $S_f$  | 1: < 10      | Number of major features or epics                            |
|||2: 10 – 25||
|||3: > 25||
| Integrations           | $S_i$  | 1: 0 – 1          | Number of external systems to integrate with            |
|||2: 2 - 4||
|||3: > 4||
| Data Complexity        | $S_d$  | 1: Simple CRUD | Complexity of the data model or algorithms                 |
|||2: Business Logic||
|||3: AI/ML||
| Technology Newness     | $S_t$  | 1: All tech is familiar | Team's familiarity with technology                |
|||2: 1 – 2 new components||
|||3: Core is new||

### Example Weights

Weights can vary depending on organizational context. Example:

- $W_f = 0.2$ (Feature Count)
- $W_i = 0.4$ (Integrations)
- $W_d = 0.3$ (Data Complexity)
- $W_t = 0.1$ (Technology Newness)

### Final Score Mapping

| Final Score Range               | Complexity Level |
|---------------------------------|------------------|
| $< 1.5$                         | Low              |
| $1.5 \\leq \\text{Score} < 2.5$ | Medium           |
| $\\geq 2.5$                     | High             |

### Reference

This is a simplified version of effort estimation models like **COCOMO**, which use similar dimensional scoring to estimate software development effort and risk.

`,
      },
      {
        key: "scope_clarity",
        label: "Scope Clarity",
        description: `
        
Refers to how well-defined the project goals, deliverables, and boundaries are at the start. This can be measured using a **checklist** that evaluates the quality and stability of project requirements.

## Calculation Method

Score the project across multiple requirement-related factors. Each factor is rated on a scale from 1 to 3. The **average** of these scores determines the final clarity level.

### Formula

The Clarity Score ($\\text{CS}$) is calculated as:

$$
\\text{CS} = \\frac{S_{doc} + S_{signoff} + S_{stable} + S_{usecase}}{4}
$$

Where:  
- $S_{doc}$: Documentation quality  
- $S_{signoff}$: Stakeholder sign-off process  
- $S_{stable}$: Requirements stability  
- $S_{usecase}$: Use case or user story definition

### Scoring Table

| Factor          | Symbol         | Score Levels                           | Description                                                   |
|-----------------|----------------|----------------------------------------|---------------------------------------------------------------|
| Documentation   | $S_{doc}$      | 1: No | Are requirements formally documented?                         |
|||2: Partially||
|||3: Yes, in detail||
| Sign-off        | $S_{signoff}$  | 1: No  | Is there a formal stakeholder sign-off process?               |
|||2: Informal||
|||3: Yes, mandatory||
| Stability       | $S_{stable}$   | 1: Weekly | How often do requirements change?       |
|||2: Per sprint/month||
|||3: Rarely after planning||
| Use Cases       | $S_{usecase}$  | 1: No         | Are user stories or use cases defined with acceptance criteria? |
|||2: Some are||
|||3: All are||


### Final Score Mapping

| Clarity Score Range        | Clarity Level |
|----------------------------|----------------|
| $< 1.75$                   | Vague          |
| $1.75 \\leq \\text{Score} < 2.5$ | Medium         |
| $\\geq 2.5$                 | Clear          |

## Reference

This method aligns with best practices in software requirements engineering, which emphasize the importance of **clear, documented, and verifiable** requirements.


        `,
      },
      {
        key: "urgency_level",
        label: "Urgency Level",
        description: `
        
Represents how quickly the project needs to be completed, based on client or market demands. This can be categorized by assessing the **business impact of a delay**.

## Calculation Method  
Classify based on the **primary driver for the project's deadline**.

### Scoring Table

| Level   | Description                                                                                   |
|---------|-----------------------------------------------------------------------------------------------|
| High    | Driven by a hard deadline with significant consequences                                        |
|         | (e.g., regulatory compliance date, major client launch, high financial penalty).              |
| Medium  | Driven by a target business goal                                                               |
|         | (e.g., capturing a market opportunity, feature for a quarterly release).                      |
|         | A delay is costly but not catastrophic.                                                       |
| Low     | Driven by internal optimization or a flexible roadmap.                                        |
|         | The deadline is a target with little to no penalty for slippage.                              |

> **Note:** This classification reflects urgency and consequence of delay, not just the raw number of days or weeks available.
        
        `,
      },
      {
        key: "on_schedule",
        label: "On Schedule",
        description: `

This attribute reflects whether the project is realistically expected to be completed within the planned schedule. It is calculated using **Schedule Pressure Analysis**, which compares the client's required timeline with standard estimation models.

## Calculation Method

**Step 1: Estimate Nominal Schedule using the COCOMO II Model**  

Use the **TDEV (Time to Develop)** formula to compute the optimal duration the project would take without schedule pressure.

$$
TDEV = c \\cdot (Effort\\_Estimate)^d
$$

Where:  
- **TDEV**: Estimated time to develop the project (in months)  
- **Effort_Estimate**: Estimated total effort in Person-Months (PM)  
- **c** and **d**: Constants based on the project type. For an *Organic* project:  
  - $c = 2.5$  
  - $d = 0.38$

**Step 2: Calculate Schedule Pressure Ratio**

Compare the estimated optimal time (TDEV) with the schedule required by the client or business.

$$
Pressure\\_Ratio = \\frac{Required\\_Schedule}{TDEV}
$$

Where:  
- **Required_Schedule**: Time (in months) available based on client or business demands  
- **Pressure_Ratio**: Indicates how compressed the schedule is

**Step 3: Final Mapping to "Yes/No"**

| Pressure Ratio Range         | Outcome          | Meaning                                                                 |
|-----------------------------|------------------|-------------------------------------------------------------------------|
| $Pressure\\_Ratio \\geq 1.0$   | Yes              | Required schedule is equal to or longer than optimal duration           |
| $0.85 \\leq Pressure\\_Ratio < 1.0$ | No           | Risky compression – high chance of delay without mitigation             |
| $Pressure\\_Ratio < 0.85$     | No               | Severe compression – likely to fail unless scope or budget is adjusted |

### Worked Example

- **Effort Estimate**: 100 Person-Months  
- **Required Schedule**: 10 months

**Step 1**:  
Calculate TDEV  
$$
TDEV = 2.5 \\cdot (100)^{0.38} \\approx 12.9 \\text{ months}
$$

**Step 2**:  
Calculate Pressure Ratio  
$$
Pressure\\_Ratio = \\frac{10}{12.9} \\approx 0.77
$$

**Step 3**:  
Final Mapping: Since $0.77 < 0.85$, the outcome is **No**. The timeline is highly compressed and at high risk.

> This pre-project analysis helps provide a **data-driven justification** when advising stakeholders about schedule risks and necessary adjustments (e.g., more time, scope cuts, or additional resources).


        `,
      },
      {
        key: "budget_estimation",
        label: "Budget Estimation",
        description: `

This attribute represents the **total allocated funds** for the project. It is a direct numerical input, **not calculated** from any model or formula.
It reflects the budget that has been approved or committed by stakeholders or management for the entire duration of the project.

### Notes

- The value is typically entered in **monetary units (LKR)**.
- It serves as a key input when assessing feasibility and cost-related risks.
- Combined with other attributes (like Team Size and Duration), this helps determine if the available resources are sufficient for a successful outcome.

        `,
      },
    ],
  },
  {
    title: "Organizational Structure",
    items: [
      {
        key: "org_structure_type",
        label: "Organizational Structure",
        description: `

This attribute describes how the project team is **organizationally structured**. It influences authority levels, communication, and how resources are allocated. Team structures are typically categorized into:

- **Projectized**: Team members are dedicated full-time, and the project manager has high authority.
- **Matrix**: Team members report to both a functional manager and a project manager. The authority level of the project manager can vary:
  - **Weak Matrix**: Functional manager holds more authority.
  - **Balanced Matrix**: Authority is shared.
  - **Strong Matrix**: Project manager has higher authority.
- **Functional**: Work is conducted within a single department, and the functional manager holds the most authority.

## Calculation Method

Use a checklist or decision tree to determine the structure type:

| Question                                                                                      | Answer | Resulting Structure |
|-----------------------------------------------------------------------------------------------|--------|---------------------|
| Is the Project Manager's authority high and are resources dedicated full-time to the project? | Yes    | **Projectized**     |
| No → Do team members report to both a functional manager and a project manager?               | Yes    | **Matrix** (Weak/Balanced/Strong) |
| No → Does the project work happen within a single department?                                 | Yes    | **Functional**      |

### Reference

This classification method aligns with standards in the **Project Management Body of Knowledge (PMBOK® Guide)**.

        
        `,
      },
      {
        key: "client_priority",
        label: "Client Priority",
        description: `

This attribute captures the **client’s primary objective** for the project—whether their main concern is minimizing **cost**, maximizing **quality**, or meeting a **tight deadline**. It reflects what the client values most and shapes decision-making throughout the project.

## Calculation Method

Conduct a **forced ranking exercise** with the client or product owner. Ask them to rank the following constraints of the **Project Management Triangle** from 1 (most important) to 3 (least important):

- **Time**
- **Cost**
- **Quality**

The constraint ranked **#1** is recorded as the value for this attribute.

### Decision Logic

| Client's Top Priority (Rank #1) | Attribute Value |
|----------------------------------|-----------------|
| Time                             | time          |
| Cost                             | cost          |
| Quality                          | quality       |

### Reference

This method directly addresses the trade-offs described in the classic **Project Management Triangle** (also known as the Iron Triangle):

> R. Atkinson, *Project management: cost, time and quality, two best guesses and a phenomenon, it's time to accept other success criteria*, *International Journal of Project Management*, vol. 17, no. 6, pp. 337–342, 1999.
> [Available online](https://doi.org/10.1016/S0263-7863%2898%2900069-6)

        
        `,
      },
      {
        key: "control_mechanism",
        label: "Control Mechanism",
        description: `
         
Describes how well project controls (e.g., monitoring, governance, audits) are established. This measures the rigor of project monitoring and control processes.

### Calculation Method

Use a checklist-based scoring system to assess the maturity of project control mechanisms.

| Control Artifact                                                        | Points |
|-------------------------------------------------------------------------|--------|
| Project progress is tracked daily/weekly on a public dashboard (e.g., Jira, Azure DevOps) | +3     |
| A formal change control process is defined and followed                 | +3     |
| Regular governance meetings with stakeholders are held                 | +2     |
| Quality gates or formal code reviews are mandatory                      | +2     |



### Final Mapping

| Total Points | Maturity Level |
|--------------|----------------|
| 0–3          | Weak           |
| 4–7          | Moderate       |
| >7           | Strong         |



### Notes

- **Project Controls**: Methods and tools used to monitor, guide, and evaluate the performance of a project. Examples include dashboards, governance reviews, and formal approval checkpoints.
- This attribute reflects the discipline and transparency of project execution.

        
        `,
      },
      {
        key: "risk_management_score",
        label: "Risk Management Score",
        description: `
        
Indicates the quality and depth of the project's risk identification and mitigation planning. This can be scored based on the maturity of the risk management process.


## Calculation Method

Use a checklist-based scoring system to evaluate risk management practices.

| Risk Management Artifact or Practice                                           | Points |
|--------------------------------------------------------------------------------|--------|
| A formal risk register exists                                                  | +3     |
| 80% of identified risks have assigned owners and mitigation plans             | +3     |
| The risk register is reviewed regularly (e.g., weekly/bi-weekly)              | +2     |
| A contingency budget/buffer is allocated based on risk analysis               | +2     |



### Final Mapping

| Total Points | Risk Maturity Level |
|--------------|---------------------|
| 0–3          | Low                 |
| 4–7          | Medium              |
| >7           | High                |



### Reference

> Project Management Institute, *A Guide to the Project Management Body of Knowledge (PMBOK® Guide)*, 7th ed., Newtown Square, PA: PMI, 2021.
        
        `,
      },
    ],
  },
  {
    title: "Team Experience & Collaboration",
    items: [
      {
        key: "avg_dev_experience",
        label: "Avg Dev Experience",
        description: `
        
The average number of years of experience among developers in the team. This provides insight into team seniority and potential efficiency.


## Calculation Method

Collect the total years of professional software development experience from each developer and compute the average.

**Formula:**

$$
\\text{Average Developer Experience} = \\frac{\\text{Sum of all developers' years of experience}}{\\text{Total number of developers}}
$$

This is a direct numerical input and not categorized or scored.


        
        `,
      },
      {
        key: "pm_experience",
        label: "PM Experience",
        description: `
        
The total number of years the project manager has spent managing projects. This provides insight into their capability to lead and mitigate delivery risks effectively.

## Calculation Method

Obtain the total years of experience the assigned project manager has in a project management role.

**Formula:**

$$
\\text{Project Manager Experience} = \\text{Total years in a project management role}
$$

This is a direct numerical input and not categorized or scored.

        
        `,
      },
      {
        key: "team_sdlc_knowledge",
        label: "Team SDLC Knowledge",
        description: `
        
Indicates the team's familiarity and expertise with Software Development Life Cycle (SDLC) processes. A more experienced team is likely to handle planning, execution, and delivery more efficiently.

**SDLC** refers to the structured approach used in developing software, covering all key phases: requirements gathering, design, development, testing, deployment, and maintenance.

## Calculation Method

Conduct a survey among all technical team members (developers, QA engineers, etc.) to rate their confidence or experience in major SDLC phases.

Each team member rates the following on a scale of 1 to 5 (where 1 = No Experience, 5 = Expert):

| Survey Question                                                                 | Description                                                |
|----------------------------------------------------------------------------------|------------------------------------------------------------|
| Requirements Analysis                                                            | Understanding and documenting what the software must do    |
| System Design                                                                    | Designing architecture, components, and data flow          |
| Agile/Scrum Ceremonies                                                           | Participation in daily standups, sprint planning, etc.     |
| CI/CD Pipelines                                                                  | Familiarity with automated build, test, and deploy systems |
| Quality Assurance (QA) Processes                                                 | Knowledge of testing techniques and bug tracking           |

### Formula

$$
\\text{SDLC Familiarity Score} = \\frac{\\text{Sum of all team member ratings}}{\\text{Total number of ratings}}
$$

This produces a score on a 1–5 scale.

### Final Mapping

| SDLC Familiarity Score | Rating  |
|------------------------|----------|
| < 2.5                  | Low      |
| 2.5 – 3.9              | Medium   |
| ≥ 4.0                  | High     |

        
        `,
      },
      {
        key: "user_involvement",
        label: "User Involvement",
        description: `
        
Indicates how actively and frequently end-users participate in project decisions and feedback loops. High user involvement often correlates with better alignment between delivered software and actual user needs.

## Calculation Method

Assign points based on how frequently users are involved in key project activities. Score these interactions on a regular basis (e.g., per sprint or milestone).

| Activity                                                   | Description                                                                 | Points |
|------------------------------------------------------------|-----------------------------------------------------------------------------|--------|
| Users participate in requirements gathering                | Users are involved in defining what the system should do                    | +2     |
| Users attend sprint demos                                  | Users attend demonstrations of work completed during a sprint              | +2     |
| Users are available for ad-hoc questions                   | Users can be consulted during development for clarifications               | +1     |
| Dedicated users perform User Acceptance Testing (UAT)      | End-users validate that the system meets their expectations                | +3     |
| Users are embedded in the team (e.g., Product Owner role)  | A user representative works closely with the dev team throughout the project | +2     |

- **User Acceptance Testing (UAT)**: A phase where real users test the software before final release to ensure it meets requirements.

- **Agile**: A group of software development methods based on iterative development, where requirements and solutions evolve through user collaboration.

### Final Mapping

| Total Score | User Involvement Level |
|-------------|------------------------|
| 0 – 3         | Low                    |
| 4 – 7         | Medium                 |
| > 7          | High                   |

### Reference

> K. Beck *et al.*, "Manifesto for Agile Software Development," 2001.  
> [Available online](https://agilemanifesto.org)

        
        `,
      },
      {
        key: "communication_quality",
        label: "Communication Quality",
        description: `
        
Assesses the effectiveness and clarity of communication within the team before a project begins. This **Communication Readiness Score** predicts how well the team is likely to collaborate based on key structural and historical factors.

## Calculation Method

Use a scoring model based on four predictive factors. Each factor is rated from 1 (Poor) to 3 (Good). The final score is the average of these ratings.

**Formula:**

$$
\\text{Readiness Score} = \\frac{S_{\\text{dist}} + S_{\\text{size}} + S_{\\text{collab}} + S_{\\text{plan}}}{4}
$$

Where:
- $ S_{\\text{dist}} $: Team Distribution
- $ S_{\\text{size}} $: Team Size
- $ S_{\\text{collab}} $: Prior Collaboration
- $ S_{\\text{plan}} $: Communication Plan

### Scoring Table

| Factor                     | Criteria                                                                                   | Score |
|---------------------------|--------------------------------------------------------------------------------------------|--------|
| **Team Distribution**      | Fully co-located in the same office                                                       | 3      |
|                           | Hybrid/distributed within similar time zones (≤ 3 hours difference)                       | 2      |
|                           | Distributed across time zones with > 3 hours difference                                    | 1      |
| **Team Size**             | Small team (3–5 members)                                                                   | 3      |
|                           | Medium team (6–9 members)                                                                  | 2      |
|                           | Large team (10+ members)                                                                   | 1      |
| **Prior Collaboration**   | >75% of team has worked together successfully before                                       | 3      |
|                           | 25–75% of team has worked together                                                         | 2      |
|                           | <25% of team has worked together                                                           | 1      |
| **Communication Plan**    | Formal plan with tools, meeting cadences, and response expectations                        | 3      |
|                           | Tools defined (e.g., Slack/Teams), but no formal communication process                     | 2      |
|                           | No formal communication tools or plan                                                      | 1      |

### Final Mapping

| Readiness Score | Communication Level |
|------------------|---------------------|
| ≥ 2.75           | Good                |
| 1.75 – 2.74      | Average             |
| < 1.75           | Poor                |

This approach enables a **quantitative pre-project assessment** of the expected internal communication quality, which is a critical factor in successful software project execution.

        
        `,
      },
    ],
  },
  {
    title: "Technology & Tools",
    items: [
      {
        key: "tool_familiarity",
        label: "Tool Familiarity",
        description: `
        
Assesses how well the team understands and utilizes the essential tools required for the project's success. These may include version control systems (e.g., Git), CI/CD platforms, issue trackers, IDEs, and collaboration tools.

## Calculation Method

Conduct a survey where each team member rates their familiarity with the core tools being used in the project. Tools may include:

- **Jira** (project/task management)
- **Git** (version control)
- **CI/CD platforms** (e.g., Jenkins, GitHub Actions)
- **IDEs** (e.g., VS Code, IntelliJ IDEA)
- **Communication platforms** (e.g., Slack, Teams)

Each member rates their proficiency on a **1–5 scale**, where:

- 1 = Not familiar at all  
- 5 = Expert-level familiarity

Compute the average of all responses to derive the final tool score.

**Formula:**

$$
\\text{Tool Familiarity Score} = \\frac{\\sum \\text{All individual ratings for toolset}}{\\text{Number of team members}}
$$

### Final Mapping

| Tool Familiarity Score | Description |
|------------------------|-------------|
| < 2.5                  | Low         |
| 2.5 – 3.9              | Medium      |
| ≥ 4.0                  | High        |

This metric helps evaluate whether the team is technically equipped to start and execute the project efficiently. Low tool familiarity may result in ramp-up delays, miscommunications, or technical errors during development.

        
        `,
      },
      {
        key: "legacy_system_involved",
        label: "Legacy System Involved",
        description: `
        
Indicates whether the project involves working with or upgrading an existing (**legacy**) system. Legacy systems often present technical challenges that can increase risk.

## Calculation Method

This is a **boolean** value ($true$ or $false$) determined through a **technical assessment** of the existing system.

The value is set to **$true$** if the project’s success depends on integrating with, modifying, or replacing a system that meets **any** of the following conditions:

- Built on **outdated or unsupported technology**
- Has **little or no documentation**
- Has **no access to original developers**
- **Lacks automated test coverage**

If **none** of these apply, the value is **$false$**.

### Final Mapping

| Legacy System Involvement | Description |
|---------------------------|-------------|
| $true$                    | Project involves a legacy system |
| $false$                   | No legacy system involvement     |

Working with legacy systems typically increases project complexity and risk due to poor maintainability, lack of institutional knowledge, and integration challenges.

        
        `,
      },
      {
        key: "tech_stack_familiarity",
        label: "Tech Stack Familiarity",
        description: `
        
Measures how familiar the team is with the **technologies** used in the project (e.g., programming languages, frameworks, databases). High familiarity reduces ramp-up time and increases development efficiency.

## Calculation Method

1. **Identify the core technologies** involved in the project (e.g., Python/Django, React, PostgreSQL).
2. For each technology, calculate the **average years of experience** across the team.
3. Assign **weights** to technologies based on their criticality (e.g., more weight to core backend/frontend frameworks).
4. Compute the **weighted average** experience using the formula below.

**Formula:**

$$
\\text{Familiarity Score} = \\sum (\\text{Weight}_i \\times \\text{AvgExperience}_i)
$$

Where:
- $ \\text{Weight}_i $: Importance of technology $i$
- $ \\text{AvgExperience}_i $: Average years of experience the team has with technology $i$

> Note: The weights should sum to 1. Example: Backend (0.4), Frontend (0.3), Database (0.2), DevOps (0.1)

## Final Mapping

| Familiarity Score         | Description                         |
|---------------------------|-------------------------------------|
| **Low** (< 1.5 years)     | Limited team familiarity             |
| **Medium** (1.5–2.9 years)| Moderate, working-level familiarity |
| **High** (≥ 3 years)      | Strong expertise with tech stack     |

This score helps estimate the team's efficiency and learning curve for the chosen tech stack.

        
        `,
      },
      {
        key: "testing_strategy",
        label: "Testing Strategy",
        description: `
        
Indicates the **primary method of testing** used in the project: automated testing, manual testing, or a combination of both. A higher degree of automation typically indicates better scalability and repeatability in testing.

## Calculation Method

Determine the **ratio of automated to total test cases**, either planned or based on actual implementation.

**Formula:**

$$
\\text{Automation Ratio} = \\frac{\\text{Number of Automated Test Cases}}{\\text{Total Number of Test Cases}}
$$

Where:
- **Automated Test Cases**: Tests executed using scripts/tools.
- **Total Test Cases**: Includes both automated and manual test cases.

## Final Mapping

| Automation Ratio         | Description                        |
|--------------------------|------------------------------------|
| **Manual** (< 0.3)       | Primarily manual testing           |
| **Mixed** (0.3–0.7)      | Balanced approach (manual + auto)  |
| **Automated** (> 0.7)    | Predominantly automated testing    |

Understanding the testing approach helps assess the project's test coverage efficiency and maintainability.

        
        `,
      },
    ],
  },
];

export const projectSuccessStatus = {
  key: "success_status",
  label: "Project Success Status",
  description: `
  
This attribute represents the **estimated probability (0.0 to 1.0)** that the project is successful, based on real outcomes. It is the **dependent variable** in the machine learning model, meaning it is **not provided as an input** during prediction but is instead the value the model learns to estimate.

---

## Important Clarification

**This is the target variable the machine learning model aims to predict.**  
It is **measured only after the project is completed**, based on real outcomes, and is **not an input attribute** like the others.

---

## Calculation Method (Post-Project)

Project success is calculated as a **weighted score** that combines:
- **Time adherence**
- **Cost adherence**
- **Quality delivered**
- **Stakeholder satisfaction**

### Formula:

$$
\\text{Success Score} = (W_t \\times S_t) + (W_c \\times S_c) + (W_q \\times S_q) + (W_s \\times S_s)
$$

Where:

- $ S_t $: Time Score  

  $$ S_t = 1 - \\frac{\\text{Actual Duration} - \\text{Planned Duration}}{\\text{Planned Duration}} $$
  (Cap at 1.0 if completed early)

- $ S_c $: Cost Score  

  $ S_c = 1 - \\frac{\\text{Actual Cost} - \\text{Budget}}{\\text{Budget}} $ 
  (Cap at 1.0 if under budget)

- $ S_q $: Quality Score  

  $ S_q = 1 - \\frac{\\text{Critical Bugs Post-Launch}}{\\text{Total Features}} $

- $ S_s $: Stakeholder Satisfaction 

  Obtained via post-project survey, normalized to 0–1

- $ W_t, W_c, W_q, W_s $:  
  Weights that sum to 1.0 and reflect stakeholder priorities.  
  Example: If time is most important, $ W_t $ might be 0.4.

---

## Usage in the Model

This **Success Score (0.0–1.0)** is the **label** used to train and evaluate the machine learning model.  
The other 18 attributes are used as **predictors**.


  
  `,
};
