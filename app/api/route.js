import { AzureOpenAI } from 'openai';
import { NextResponse } from 'next/server';

const endpoint = process.env.AZURE_OPENAI_ENDPOINT;
const apiKey = process.env.AZURE_OPENAI_API_KEY;
const apiVersion = '2024-05-01-preview';
const deployment = process.env.AZURE_OPENAI_MODEL;

const DATA_RESUME = {
  experience: [
    {
      role: "IT Software Engineering Intern",
      company: "Wayne State University",
      duration: "May 2023 – August 2024",
      location: "Detroit, MI",
      responsibilities: [
        "Led a cross-functional team of four to deliver a full-stack project (C#, ASP.NET, AngularJS, Python, YOLOv7) two weeks early, overseeing the entire SDLC and ensuring on-time, high-quality results.",
        "Resolved 100+ hardware/software/networking issues in Linux/Unix environments, achieving 98% uptime and 99% customer satisfaction.",
        "Managed 300+ technology rollouts and maintenance tasks via Microsoft Configuration Manager and PowerShell, cutting deployment times by 50%.",
        "Maintained 100% inventory accuracy with Greenware, reducing operational errors by 50%.",
      ]
    },
    {
      role: "IT/Infosec Automation Intern",
      company: "Five Investments LLC",
      duration: "May 2022 – August 2022",
      location: "Denver, CO",
      responsibilities: [
        "Automated user onboarding/offboarding with OKTA Workflows, eliminating errors and boosting efficiency.",
        "Streamlined device setup via Kandji DEP, cutting configuration time by 50%.",
        "Implemented Duo Security and Device Health, increasing device compliance by 30%.",
        "Deployed security patches across 50+ devices with Automox, ensuring system security.",
        "Managed over 50 IT Infosec tickets in Atlassian Jira, ensuring timely resolution and maintaining a 95% customer satisfaction rate.",
      ]
    }
  ],
  projects: [
    {
      name: "AI Parking Detection WebApp",
      technologies: ["AngularJS", "Python", "ASP.NET", "C#", "YOLOv7", "SQL"],
      features: [
        "Documented REST APIs with Swagger UI, improving integration clarity and accessibility.",
        "Implemented server-side features with JWT authentication, reducing unauthorized access by 80%.",
        "Achieved 98% code coverage using Jasmine, cutting production bugs by 20%.",
        "Applied the MVC pattern to improve scalability and maintainability.",
        "Led Agile ceremonies (sprint planning, retrospectives, daily stand-ups) to align team goals with business objectives."
      ]
    },
    {
      name: "Web Portfolio with AI Chatbot",
      technologies: ["JavaScript", "HTML/CSS", "NextJS", "Azure", "OpenAI"],
      features: [
        "Built a responsive portfolio site with Next.js, boosting project visibility and user engagement by 50%.",
        "Integrated an Azure/OpenAI-powered chatbot for real-time responses to resume inquiries, reducing reply times by 90%."
      ]
    },
    {
      name: "Customized Vehicle Infotainment System",
      technologies: ["ReactJS", "HTML/CSS"],
      features: [
        "Integrated Jest for unit testing, achieving 99% code coverage and reducing production bugs by 20%.",
        "Implemented MVC architecture to enhance scalability and maintainability.",
        "Applied OOP principles to improve code clarity, maintainability, and scalability."
      ]
    },
    {
      name: "3D Lidar Detection for Wayne Robotics",
      technologies: ["Python", "ROS", "Ubuntu"],
      features: [
        "Developed the foundational codebase for the 3D Lidar Detection system, enabling accurate environmental mapping for Wayne State Robotics.",
        "Collaborated with multidisciplinary teams to ensure seamless integration and functionality across the project."
      ]
    }
  ],
  education: {
    degree: "Bachelor’s in Computer Science",
    institution: "Wayne State University",
    graduationDate: "August 2019 – December 2024",
    location: "Detroit, MI"
  },
  skills: {
    programmingLanguages: [
      "Python",
      "Java",
      "C/C++/C#",
      "AngularJS",
      "NoSQL",
      "React.js",
      "Node.js",
      "TypeScript",
      "JavaScript",
      "HTML/CSS"
    ],
    frameworks: [
      "AngularJS",
      "React.js",
      "Node.js",
      "Next.js"
    ],
    toolsAndTechnologies: [
      "Ubuntu",
      "DevOps",
      "CI/CD",
      "Git",
      "JIRA",
      "Visual Studio",
      "Cherwell Systems",
      "Greenware"
    ],
    otherSkills: [
      "Agile Methodologies",
      "REST APIs",
      "Information Security",
      "Computer Networking",
      "Office 365"
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
