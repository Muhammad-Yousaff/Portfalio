/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Muhammad Yousaf's Portfolio",
  description:
    "A passionate Full Stack Developer skilled in Python, Django, React.js, and cloud deployment. I build scalable web applications with modern technologies and best practices.",
  og: {
    title: "Muhammad Yousaf Portfolio",
    type: "website",
    url: "https://muhammad-yousaff-github-io.vercel.app/",
  },
};

//Home Page
const greeting = {
  title: "Muhammad Yousaf",
  logo_name: "Muhammad Yousaf",
  nickname: "muhammad_yousaf",
  subTitle:
    "A passionate Full Stack Developer skilled in Python, Django, React.js, and cloud deployment. I build scalable web applications with modern technologies and best practices.",
  resumeLink: "https://app.luminpdf.com/viewer/69ab09034ee7c3c4428906cf",
  portfolio_repository: "https://github.com/Muhammad-Yousaff/masterPortfolio",
  githubProfile: "https://github.com/Muhammad-Yousaff",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/Muhammad-Yousaff",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/muhammad-yousaf-3a459a381/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Gmail",
    link: "mailto:m.yousaf6239@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/profile.php?id=100094272588798",
    fontAwesomeIcon: "fa-facebook-f",
    backgroundColor: "#1877F2",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/i_t_x__yousaf/",
    fontAwesomeIcon: "fa-instagram",
    backgroundColor: "#E4405F",
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive and dynamic web applications using React.js and JavaScript/TypeScript",
        "⚡ Developing robust backend APIs with Python, Django, and Django REST Framework",
        "⚡ Creating full-stack solutions with PostgreSQL/MySQL databases and RESTful API architecture",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "simple-icons:django",
          style: {
            color: "#092E20",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            color: "#3178C6",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#F05032",
          },
        },
      ],
    },
    {
      title: "Cloud & DevOps",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Deploying and managing web applications on AWS and Heroku",
        "⚡ Setting up CI/CD pipelines for automated testing and deployment",
        "⚡ Working with Agile development methodologies for efficient project delivery",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#430098",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#F05032",
          },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "#181717",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://github.com/Muhammad-Yousaff",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://github.com/Muhammad-Yousaff",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Punjab Tianjin University of Technology",
      subtitle: "Bachelor of Science in Software Engineering",
      logo_path: "iiitk_logo.png",
      alt_name: "PTUT Lahore",
      duration: "2021 - April 2025",
      descriptions: [
        "⚡ Studied core software engineering subjects including Data Structures, Algorithms, DBMS, OS, and Software Design.",
        "⚡ Gained hands-on experience in Full Stack Development with Python, Django, React.js, and modern web technologies.",
        "⚡ Worked on various academic and personal projects involving RESTful APIs, cloud deployment, and agile methodologies.",
      ],
      website_link: "https://ptut.edu.pk/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "HackerRank Certification",
      subtitle: "- HackerRank",
      logo_path: "hackerrank_logo.png",
      certificate_link:
        "https://www.hackerrank.com/certificates/iframe/dde1f9597690",
      alt_name: "HackerRank",
      color_code: "#2EC86699",
    },
    {
      title: "HackerRank Certification",
      subtitle: "- HackerRank",
      logo_path: "hackerrank_logo.png",
      certificate_link:
        "https://www.hackerrank.com/certificates/iframe/8cf7c4069c84",
      alt_name: "HackerRank",
      color_code: "#2EC86699",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work Experience",
  description:
    "I am a Frontend Developer based in Lahore, building responsive and modern web applications using React.js, JavaScript, and TypeScript. I focus on creating clean, performant user interfaces with great UX.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Frontend Developer",
          company: "Freelance / Self-Employed",
          company_url: "https://github.com/Muhammad-Yousaff",
          logo_path: "github_logo.png",
          duration: "2024 - Present",
          location: "Lahore, Pakistan",
          description:
            "Building responsive and dynamic web applications using React.js, JavaScript, and TypeScript. Working with Django and Django REST Framework on the backend. Deploying projects on AWS and Heroku with CI/CD pipelines.",
          color: "#0879bf",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "muhammad_yousaf.jpg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Python, Django, React, Full Stack Development, and Cloud Deployment.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://github.com/Muhammad-Yousaff",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Lahore, Punjab, Pakistan",
    locality: "Lahore",
    country: "Pakistan",
    region: "Punjab",
    postalCode: "54000",
    streetAddress: "Lahore",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/Lahore",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
