// =====================================================
//  YAHAN SE APNA DATA BADLO (sirf isi file ko edit karna hai)
//  Text "..." ke andar hi rehna chahiye. Comma (,) mat hatana.
// =====================================================
window.PORTFOLIO = {
  name: "Sanaullah Khan",
  role: "Aspiring Software Engineer",
  bio: "BCA student in AI & Machine Learning. I build software projects and learn something new every day.",
  university: "Integral University",
  city: "Lucknow",
  showPreview: true,               // true = projects me live preview dikhega, false = sirf buttons
  photo: "photo.jpg",              // photo badalni ho to isi naam se nayi photo upload karo

  // Card ke peeche wala QR: text me jo link likhoge, scan karne par wahi khulega
  qrText: "https://www.linkedin.com/in/sanaullah-khan-666872335",
  qrCaption: "Scan to open my LinkedIn",

  contact: {
    email: "sanaullahkhan74532@gmail.com",
    phone: "",                     // number dalna ho to likho, jaise "+91 98765 43210". Khali = nahi dikhega
    linkedin: "https://www.linkedin.com/in/sanaullah-khan-666872335",
    github: "https://github.com/Sanaullahkhan9838",
    location: "Greater Lucknow Area, Uttar Pradesh",
    status: "Open to work, remote"
  },

  about: [
    "I’m a BCA (Artificial Intelligence & Machine Learning) student at Integral University, Lucknow, with a strong interest in AI, Machine Learning and software development.",
    "I’m working towards becoming a software engineer by building practical projects and strengthening my problem-solving, data structures and clean-code skills. My AI and Machine Learning background helps me build smarter software."
  ],

  facts: [
    { title: "Education", text: "BCA (AI & ML), Integral University" },
    { title: "Learning now", text: "HTML, CSS, JavaScript, React, Node.js, Python" },
    { title: "Exploring", text: "AI, Machine Learning, software design, databases" },
    { title: "Available", text: "Open to remote work" }
  ],

  skills: [
    { group: "Programming languages", items: ["Python", "Java", "C", "JavaScript", "SQL", "Bash"] },
    { group: "Software engineering", items: ["Data Structures & Algorithms", "OOP", "SDLC & Agile", "Clean Code", "Debugging & Testing", "Version Control"] },
    { group: "Web technologies", items: ["HTML5", "CSS3", "React", "Node.js", "REST APIs"] },
    { group: "Databases", items: ["MySQL", "MongoDB"] },
    { group: "Tools and platforms", items: ["Git", "GitHub", "GitHub Pages", "Linux", "VS Code", "Postman"] }
  ],

  // Naya project add karne ke liye ek { ... }, block copy karke niche paste karo
  projects: [
    {
      title: "Student Registration Form",
      description: "A simple student registration form built with HTML and CSS, with a graph paper background theme.",
      tech: ["HTML", "CSS"],
      live: "https://sanaullahkhan9838.github.io/student-registration-form/",   // live demo link (khali chhodo to preview nahi dikhega)
      link: "https://github.com/Sanaullahkhan9838/student-registration-form",   // code ka GitHub link
      linkText: "View on GitHub"
    }
  ],
  projectsNote: "More projects are on the way. Follow my GitHub to see them first.",

  roadmap: [
    { title: "Programming fundamentals", text: "C, Java, Python and problem-solving" },
    { title: "Data structures and algorithms", text: "Arrays, trees, graphs and complexity" },
    { title: "OOP and design", text: "Classes, design principles and clean code" },
    { title: "Web basics", text: "HTML, CSS, JavaScript, React and Node.js" },
    { title: "Databases", text: "SQL, MySQL and MongoDB" },
    { title: "Tools and workflow", text: "Git, GitHub, Linux, testing and Agile" },
    { title: "AI and Machine Learning", text: "Python, ML basics and building smart features" },
    { title: "Projects", text: "Design, build and ship real software" }
  ],

  quote: "Every expert was once a beginner. Keep learning, keep building, never stop improving.",
  quoteNote: "Learn something new every day. Turn knowledge into real projects. Treat errors as chances to learn.",
  footer: "Sanaullah Khan. Let’s learn, build and grow together."
};
