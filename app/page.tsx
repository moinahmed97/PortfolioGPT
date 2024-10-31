"use client";


import React from 'react';
import {useState} from "react";

export default function Home() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [ messageInput, setMessageInput] = useState('');

  const [messages, setMessages] = useState([
   
  {
      role: 'assistant',
      content: 'How can I help you learn more about Moin and his Resume?'
  }






  ]);

  const submitForm = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    let newMessages = [...messages, {role: 'user', content: 
    messageInput}]
    setMessages(newMessages);
    setMessageInput('');
    const apiMessage = await fetch('/api',
      {
        method: 'POST',
        headers: {
         'Content-Type': 'application/json', 
        },
        body: JSON.stringify({messages: newMessages})
      }
    ).then(res => res.json());
    setMessages([...newMessages, {role: 'system', content: apiMessage.
      message}]);
  }


  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header>
        <a href="#" className="logo-holder">
          <div className="logo">M</div>
          <div className="logo-text">Portfolio Website</div>
        </a>
        <nav>
          <ul id="menu" className={menuOpen ? "active" :""}>
            <li><a href="#">Home</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#">Projects</a></li>
            <li>
              <a href="mailto:moinn5810@gmail.com" className="button">
                Contact Me
              </a>
            </li>
          </ul>
          <a href="#" className="mobile-toggle" onClick={toggleMobileMenu}>
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                d="M5 7h14M5 12h14M5 17h10"
              />
            </svg>
          </a>
        </nav>
      </header>

      <main>
        <section className="hero container">
          <div className="hero-blue">
            <div>
              <h1>
                <small>Hi I'm</small> Moin Syed
              </h1>
              <p>
                A Computer Science graduate from Wayne State University with experience in software
                engineering and IT automation.
                <span>
                  I'm passionate about AI and full-stack development, with a focus on building
                  innovative solutions and enhancing user experiences.
                </span>
              </p>
              <div className="call-to-action">
                <a href="./MoinSyedResume.pdf" className="button black">
                  View Resume
                </a>
                <a href="mailto:moinn5810@gmail.com" className="button white">
                  Contact Me
                </a>
              </div>
              <div className="social-links">
                <a href="https://github.com/moinahmed97">
                  <img src="./imgs/github.png" width="48" alt="GitHub" />
                </a>
                <a href="https://www.linkedin.com/in/moin-syed-cs/">
                  <img src="./imgs/linkedin.png" width="48" alt="LinkedIn" />
                </a>
              </div>
            </div>
          </div>

          <div className="hero-yellow">
            <img src="./imgs/hero-image.png" alt="moin" width="100%" />
          </div>
        </section>

        <section className="logos container">
          <div className="marquee">
            <div className="track">
              <img src="./imgs/html.png" alt="HTML" width="128" />
              <img src="./imgs/css.png" alt="CSS" width="128" />
              <img src="./imgs/javascript.png" alt="JavaScript" width="128" />
              <img src="./imgs/react.png" alt="React" width="128" />
              <img src="./imgs/nextjs.png" alt="NextJS" width="128" />
              <img src="./imgs/angular.png" alt="Angular" width="128" />
              <img src="./imgs/azure.png" alt="Azure" width="128" />
              <img src="./imgs/vscode.png" alt="VS Code" width="128" />
              <img src="./imgs/python.png" alt="Python" width="128" />
              <img src="./imgs/html.png" alt="HTML" width="128" />
              <img src="./imgs/css.png" alt="CSS" width="128" />
              <img src="./imgs/javascript.png" alt="JavaScript" width="128" />
              <img src="./imgs/react.png" alt="React" width="128" />
              <img src="./imgs/nextjs.png" alt="NextJS" width="128" />
              <img src="./imgs/angular.png" alt="Angular" width="128" />
              <img src="./imgs/azure.png" alt="Azure" width="128" />
              <img src="./imgs/vscode.png" alt="VS Code" width="128" />
              <img src="./imgs/python.png" alt="Python" width="128" />
             
            </div>
          </div>
        </section>

        <section id="skills" className="skills container">
          <h2>
            <small>About me</small> Skills
          </h2>
          <div className="holder-blue">
            <div className="left-column">
              <h3>Front-end</h3>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>jQuery</li>
                <li>Angular</li>
              </ul>
              <h3>Back-end</h3>
              <ul>
                <li>Node.js</li>
                <li>Python</li>
                <li>C++</li>
                <li>C#</li>
                <li>ASP.NET</li>
                <li>SQL</li>
              </ul>
            </div>
            <div className="right-column">
              <h3>A bit about me</h3>
              <p>
                I’m a software engineer passionate about bringing creative tech solutions to life. I
                recently graduated with a Bachelor’s in Computer Science from Wayne State University,
                and during my journey, I’ve built everything from a parking detection web app
                (delivered two weeks early!) to a dynamic, customizable vehicle infotainment system.
              </p>
              <p>
                Whether it’s automating device setups to save time or crafting interactive user
                experiences like my point-and-click zombie game, I love tackling challenges that push
                the boundaries of tech. Let’s collaborate and create something extraordinary!
              </p>
            </div>
          </div>
        </section>

        <section className="chatbot container">
          <h2>
            <small>Talk to me</small> Chatbot
          </h2>
          <div className="chatbot-blue">
            <div className="chat-info">
              <h3>Azure AI Chatbot</h3>
              <p>
                This is a chatbot I put together which knows my skills, work experience, and a copy
                of my resume. You can ask questions about me to get a better idea of who I am and
                what I've done.
              </p>
              <p>
                You can download my resume here if you want to take a look at it. I'm currently
                looking for new opportunities, so if you have a project you think I would be a good
                fit for, please keep in touch!
              </p>
              <a className="button black" href="./MoinSyedResume.pdf">
                Download Resume
              </a>
            </div>
            <div className="chat-box">
              <div className="scroll-area">
              <ul id="chat-log">
  {messages.map((message, index) => (
    <li key={index} className={`${message.role}`}>
      <span className="avatar">{message.role === 'user' ? 'You' : 'AI'}</span>
      <div className="message">{message.content}</div>
    </li>
  ))}
</ul>
              </div>
              <form onSubmit={submitForm}className="chat-message">
                <input type="text" placeholder="Hey there, what skills are you best at?" value={messageInput} onChange={e => 
                  setMessageInput(e.target.value)} />
                <button className="button black">Send</button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
