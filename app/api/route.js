import { AzureOpenAI } from 'openai';
import { NextResponse } from 'next/server';

const endpoint = process.env.AZURE_OPENAI_ENDPOINT;
const apiKey = process.env.AZURE_OPENAI_API_KEY;
const apiVersion = '2024-05-01-preview';
const deployment = process.env.AZURE_OPENAI_MODEL;

const DATA_RESUME = {
  "experience": [
    {
      "role": "Web Developer",
      "company": "Seriously Agile LLC",
      "duration": "December 2024 – Present",
      "location": "New York, NY",
      "responsibilities": [
        "Utilized full-stack development skills (WordPress, HTML/CSS, JavaScript) to build complete web platforms, delivering robust backend and responsive frontend functionalities.",
        "Enhanced UI/UX by integrating diverse CMS components across 10+ pages, leading to improved cross-functionality and a more cohesive web architecture."
      ]
    },
    {
      "role": "IT Software Engineering Intern",
      "company": "Wayne State University",
      "duration": "May 2023 – August 2024",
      "location": "Detroit, MI",
      "responsibilities": [
        "Led a 4-person agile team in the full-stack development of a system using Angular, Python, and SQL, achieving project completion 2 weeks ahead of schedule.",
        "Designed interactive Angular (JavaScript/TypeScript) web interfaces and scalable Python backends with RESTful APIs (C#) and SQL databases, handling 50+ daily requests.",
        "Implemented CI/CD pipelines using GitHub Actions to automate the build and deployment process, increasing development efficiency and consistency.",
        "Provided IT Support by resolving Tier 1/2 technical issues, resulting in a 99% customer satisfaction rate."
      ]
    },
    {
      "role": "IT/Infosec Automation Intern",
      "company": "Five Investments LLC",
      "duration": "May 2022 – August 2022",
      "location": "Denver, CO",
      "responsibilities": [
        "Automated user onboarding/offboarding with OKTA Workflows, eliminating errors and boosting efficiency.",
        "Streamlined device setup via Kandji DEP, cutting configuration time by 50%.",
        "Implemented Duo Security and Device Health, increasing device compliance by 30%.",
        "Deployed security patches across 50+ devices with Automox, ensuring system security.",
        "Managed over 50 IT Infosec tickets in Atlassian Jira, ensuring timely resolution and maintaining a 95% customer satisfaction rate."
      ]
    }
  ],
  "projects": [
    {
      "name": "Formula 1 Telemetry Dashboard",
      "technologies": ["Python", "FastF1", "Flask", "Pandas", "Plotly.js", "HTML/CSS", "JavaScript"],
      "features": [
        "Engineered a Python-based telemetry dashboard to compare F1 drivers' vehicle stats using third-party APIs for accurate data extraction.",
        "Processed data with Flask and Pandas, rendering interactive visualizations with Plotly.js for throttle, brake, speed, and gear."
      ]
    },
    {
      "name": "Web Portfolio with AI Chatbot",
      "technologies": ["JavaScript", "HTML/CSS", "Next.js", "Azure", "OpenAI"],
      "features": [
        "Built and deployed a responsive Next.js portfolio using JavaScript and HTML5/CSS, boosting project visibility and user engagement.",
        "Developed a Q&A AI Chatbot using Azure and OpenAI APIs to detail professional skills and experience, achieving 99% response accuracy."
      ]
    },
    {
      "name": "AI Parking Detection WebApp",
      "technologies": ["Angular", "JavaScript", "TypeScript", "C#", "SQL"],
      "features": [
        "Designed and architected 5+ responsive Angular (JavaScript/TypeScript) pages, ensuring compatibility across phones, tablets, and laptops.",
        "Integrated SQL database with frontend using RESTful APIs (C#) to retrieve user login data, improving login efficiency and data retrieval speed by 50%."
      ]
    },
    {
      "name": "Customized Vehicle Infotainment System",
      "technologies": ["React.js", "HTML/CSS"],
      "features": [
        "Integrated Jest for unit testing, achieving 99% code coverage and reducing production bugs by 20%.",
        "Implemented MVC architecture to enhance scalability and maintainability.",
        "Applied OOP principles to improve code clarity, maintainability, and scalability."
      ]
    },
    {
      "name": "3D Lidar Detection for Wayne Robotics",
      "technologies": ["Python", "ROS", "Ubuntu"],
      "features": [
        "Developed the foundational codebase for the 3D Lidar Detection system, enabling accurate environmental mapping for Wayne State Robotics.",
        "Collaborated with multidisciplinary teams to ensure seamless integration and functionality across the project."
      ]
    }
  ],
  "education": {
    "degree": "Bachelor of Science in Computer Science",
    "institution": "Wayne State University",
    "graduationDate": "Graduated 2024",
    "location": "Detroit, MI"
  },
  "skills": {
    "programmingLanguages": [
      "Python",
      "Java",
      "C/C++/C#",
      "JavaScript",
      "TypeScript",
      "SQL"
    ],
    "frameworks": [
      "Angular",
      "React.js",
      "Node.js",
      "Next.js",
      "Flask",
      "WordPress"
    ],
    "toolsAndTechnologies": [
      "Ubuntu",
      "DevOps",
      "CI/CD",
      "Git",
      "GitHub Actions",
      "JIRA",
      "Visual Studio",
      "Cherwell Systems",
      "Greenware",
      "Azure",
      "OpenAI APIs",
      "FastF1",
      "Pandas",
      "Plotly.js"
    ],
    "otherSkills": [
      "Agile Methodologies",
      "REST APIs",
      "Information Security",
      "Computer Networking",
      "Office 365",
      "UI/UX Design"
    ]
  }
};

export async function POST(req) {
  const { messages } = await req.json();
  const client = new AzureOpenAI({ endpoint, apiKey, apiVersion, deployment });

  // Prepend system instruction with updated resume data
  messages.unshift({
    role: 'system',
    content: `You are MoinPortfolioGPT, answering only questions based on the resume provided. Resume: ${JSON.stringify(DATA_RESUME)}`
  });

  const response = await client.chat.completions.create({
    messages,
    max_tokens: 128
  });

  return NextResponse.json({
    message: response.choices[0].message.content
  });
}
