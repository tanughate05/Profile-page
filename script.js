"use strict";

// Skills
let skills = {
  frontend: ["HTML", "CSS", "Javascript", "React"],
  backend: ["Java", "Spring Boot", "Hibernate"],
  database: ["MYSQL", "SQL Server", "MongoDB"],
};

// Function to count skills
function getSkillCount(category) {
  // convert  to lowercase
  category = category.toLowerCase();

  if (category === "frontend") {
    return skills.frontend.length;
  } else if (category === "backend") {
    return skills.backend.length;
  } else if (category === "database") {
    return skills.database.length;
  } else {
    return "Invalid category. Choose: frontend, backend, database";
  }
}

// Display
console.log("Frontend Skill Count:", getSkillCount("frontend"));
console.log("Backend Skill Count:", getSkillCount("backend"));
console.log("Database Skill Count:", getSkillCount("database"));

let profileLinks = {
  github: "https://github.com/tanughate05",
  linkedin: "https://www.linkedin.com/in/tanughate05/",
};

// Function to get URL
function getProfileURL(type) {
  type = type.toLowerCase();

  if (type === "github") {
    return profileLinks.github;
  } else if (type === "linkedin") {
    return profileLinks.linkedin;
  } else {
    return "Invalid link type — choose: github or linkedin";
  }
}

// Display
console.log("GitHub URL:", getProfileURL("github"));
console.log("LinkedIn URL:", getProfileURL("linkedin"));
