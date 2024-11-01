import { AzureOpenAI } from 'openai';
import { NextResponse } from 'next/server';

const endpoint = process.env.AZURE_OPENAI_ENDPOINT;
const apiKey = process.env.AZURE_OPENAI_API_KEY;
const apiVersion = '2024-05-01-preview'; 
const deployment = process.env.AZURE_OPENAI_MODEL;



const client = new AzureOpenAI({ endpoint, apiKey, apiVersion, deployment });



const DATA_RESUME = {
  experience: [
    {
      role: "Software Engineering Intern & IT Systems Specialist",
      company: "Wayne State University",
      duration: "May 2023 - August 2024",
      location: "Detroit, MI",
      responsibilities: [
        "Led a team of four to develop a parking detection web app using Python, ASP.NET, SQL, AngularJS, and YOLOv7, completing the project two weeks ahead of schedule.",
        "Oversaw the SDLC from requirements gathering to testing and deployment to ensure high-quality and timely delivery.",
        "Resolved over 100 hardware, software, and connectivity issues on Windows, maintaining a 98% customer satisfaction rate.",
        "Managed over 100 technology rollouts and maintenance tasks with Microsoft Configuration Manager and PowerShell, reducing deployment times by 50%.",
        "Automated troubleshooting processes with advanced PowerShell scripting, improving issue resolution times by 50% and strengthening system security.",
        "Maintained 100% accuracy in inventory tracking using Greenware, ensuring precise asset management and reducing operational errors."
      ]
    },
    {
      role: "IT/Infosec Automation Intern",
      company: "Five Investment LLC",
      duration: "May 2023 - August 2023",
      location: "Denver, CO",
      responsibilities: [
        "Automated device onboarding, reducing setup time by 50%.",
        "Managed Duo Security to improve device compliance by 30% through enforced security policies.",
        "Developed 15+ GAM scripts for G Suite offboarding to reduce process time by 13%.",
        "Deployed security patches across 500 devices with Automox, ensuring system security.",
        "Automated enrollment in Rapid7 and CrowdStrike using Jamf, increasing security coverage by 25%.",
        "Managed over 50 IT Infosec tickets in Atlassian Jira, achieving a 95% customer satisfaction rate."
      ]
    }
  ],
  projects: [
    {
      name: "Parking Detection WebApp",
      technologies: ["AngularJS", "Python", "ASP.NET", "C#", "YOLOv7", "SQL", "SSMS"],
      features: [
        "Implemented JWT authentication to reduce unauthorized access by 40%.",
        "Automated email notifications and password resets with Mailtrap, cutting reset time by 50%.",
        "Built a responsive UI using Angular and Tailwind CSS, reducing page load time to under 2 seconds.",
        "Achieved 98% code coverage with Jasmine testing, ensuring fewer bugs.",
        "Managed project versioning with Git and GitHub, reducing merge conflicts by 80%."
      ]
    },
    {
      name: "Customized Vehicle Infotainment System",
      technologies: ["ReactJS", "HTML/CSS"],
      features: [
        "Developed a customizable alternative to Apple CarPlay with themes, colors, and custom app displays (e.g., Spotify, Google Maps, Contacts), increasing user engagement by 40%.",
        "Enhanced visual dynamics and interactivity with React libraries, improving interface responsiveness by 30%.",
        "Achieved 99% code coverage with Jest testing, reducing production bugs by 20%."
      ]
    },
    {
      name: "Point-&-Click Zombie Killer Game",
      technologies: ["JavaScript", "HTML/CSS", "jQuery"],
      features: [
        "Implemented score tracking and real-time prompts, increasing user interaction by 60%.",
        "Used jQuery for real-time DOM updates, ensuring smooth gameplay with a 0.5-second response time.",
        "Created randomized image functions and game state management to enhance replayability.",
        "Ensured cross-browser compatibility for a 95% smooth gameplay rate."
      ]
    }
  ],
  education: {
    degree: "Bachelor’s in Computer Science",
    institution: "Wayne State University",
    graduationDate: "August 2024"
  },
  skills: [
    "Python", "Angular", "React", "TypeScript", "jQuery", "JavaScript", "C#", "C++", "Java", "HTML/CSS","Azure",
    "AI", "Machine Learning", "Excel", "Postman", "Jasmine", "Pytest", "SQL", "Cherwell", "Microsoft Configuration Manager",
    "Duo", "compliance", "GAM", "G Suite", "Automox", "Rapid7", "CrowdStrike", "Jamf", "AV setup", "IT tickets",
    "Active Directory", "Linux", "Jira", "GitHub", "Git Commands", "Version Control Systems", "SRS Documentation", "Design Documentation"
  ]
};

export async function POST(req) {
  const { messages } = await req.json();
  const client = new AzureOpenAI({ endpoint, apiKey, apiVersion, deployment });

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
