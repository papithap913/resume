const resumeData = {
    "name": "papitha",
    "contact": {
      "email": "papithap@gmail.com",
      "phone": "7708457280",
      "address": "139 Main road, viruthachalam, india"
    },
    "summary": "Experienced software engineer with a passion for solving complex problems and delivering high-quality software solutions. Proficient in multiple programming languages and technologies.",
    "experience": [
      {
        "position": "Senior Software Engineer",
        "company": "Tech Solutions Inc.",
        "location": "viruthachalam, india",
        "dates": "January 2020 - Present",
        "responsibilities": [
          "Lead a team of developers in the design and implementation of a scalable web application.",
          "Developed new features and maintained existing codebase for product improvement.",
          "Participated in code reviews and provided constructive feedback to team members."
        ]
      },
      {
        "position": "Software Engineer",
        "company": "InnovateTech Ltd.",
        "location": "viruthachalam, india",
        "dates": "June 2017 - December 2019",
        "responsibilities": [
          "Designed and implemented RESTful APIs for a cloud-based application.",
          "Worked closely with product managers to gather requirements and translate them into technical specifications.",
          "Resolved complex technical issues and optimized application performance."
        ]
      }
    ],
    "education": [
      {
        "degree": "Bachelor of computer Application",
        "institution": "Barathithasan univercity",
        "location": "viruthachalam, india",
        "dates": "2013 - 2017"
      }
    ],
    "skills": [
      "Programming Languages: Java, Python, JavaScript",
      "Web Development: HTML/CSS, React.js, Node.js",
      "Database Management: SQL, MongoDB",
      "Version Control: Git",
      "Agile Methodologies"
    ],
    "languages": [
      {
        "language": "English",
        "fluency": "Native"
      },
      {
        "language": "Tamil",
        "fluency": "Conversational"
      }
    ],
    "references": [
      {
        "name": "papitha",
        "position": "CTO",
        "company": "Tech Solutions Inc.",
        "contact": "papithap@gmail.com"
      },
      {
        "name": "papitha",
        "position": "Senior Software Engineer",
        "company": "InnovateTech Ltd.",
        "contact": "papithap@gmail.com"
      }
    ]
  };
  
  // Using for...in loop
  console.log("Using for...in loop:");
  for (let key in resumeData) {
    if (Array.isArray(resumeData[key])) {
      console.log(`${key}:`);
      resumeData[key].forEach(item => {
        for (let prop in item) {
          console.log(`  ${prop}: ${item[prop]}`);
        }
      });
    } else {
      console.log(`${key}: ${resumeData[key]}`);
    }
  }
  
  // Using for...of loop
  console.log("\nUsing for...of loop:");
  for (let [key, value] of Object.entries(resumeData)) {
    if (Array.isArray(value)) {
      console.log(`${key}:`);
      for (let item of value) {
        for (let [prop, val] of Object.entries(item)) {
          console.log(`  ${prop}: ${val}`);
        }
      }
    } else {
      console.log(`${key}: ${value}`);
    }
  }
  
  // Using forEach loop
  console.log("\nUsing forEach loop:");
  Object.entries(resumeData).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      console.log(`${key}:`);
      value.forEach(item => {
        Object.entries(item).forEach(([prop, val]) => {
          console.log(`  ${prop}: ${val}`);
        });
      });
    } else {
      console.log(`${key}: ${value}`);
    }
  });
  