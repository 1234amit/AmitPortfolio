import React from "react";
import "./SkillsSection.css";
import {
  FaPython,
  FaJava,
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaGitAlt,
  FaDocker,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiDjango,
  SiBootstrap,
  SiTailwindcss,
  SiSass,
  SiJavascript,
  SiExpress,
  SiLaravel,
  SiGit,
  SiGithub,
  SiDocker,
  SiKubernetes,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiRedis,
} from "react-icons/si";

const SkillsSection = () => {
  const skills = [
    {
      category: "Backend",
      items: [
        { name: "Python (Django, DRF)", icon: <SiDjango /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "Java (Spring Boot)", icon: <SiSpringboot /> },
        { name: "Php (Laravel)", icon: <SiLaravel /> },
      ],
    },
    {
      category: "Frontend",
      items: [
        { name: "React.js", icon: <FaReact /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "SCSS", icon: <SiSass /> },
        { name: "Bootstrap", icon: <SiBootstrap /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      ],
    },
    {
      category: "Databases",
      items: [
        { name: "MySQL", icon: <SiMysql /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "Redis", icon: <SiRedis /> },
      ],
    },

    {
      category: "Tools & Platforms",
      items: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "Docker", icon: <FaDocker /> },
      ],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-grid">
          {skills.map((skillGroup, index) => (
            <div key={index} className="skill-card">
              <h3 className="skill-category">{skillGroup.category}</h3>
              <ul className="skill-list">
                {skillGroup.items.map((skill, idx) => (
                  <li key={idx} className="skill-item">
                    <span className="skill-icon">{skill.icon}</span>
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
