//Profile Image
import profileImage from './assets/Profile_Large.jpeg'

// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reactrouterLogo from './assets/tech_logo/reactrouter.png'
import linuxLogo from './assets/tech_logo/linux.png';
import awsLogo from './assets/tech_logo/aws.jpeg';
import phpLogo from './assets/tech_logo/php.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import vercelLogo from './assets/tech_logo/vercel.png';

// Project Section Logo's
import eucdash from './assets/project_images/euc_dash.png';
import quoteManager from './assets/project_images/quote_manager.png';
import rfqManager from './assets/project_images/rfq_manager.png';

// Experience Section Logo's
import raptorLogo from './assets/work_exp_logo/raptor.png';
import rptLogo from './assets/work_exp_logo/rpt-logo.svg';

// Education Section Logo's
import aktuLogo from './assets/education_logo/aktu-logo.png';
import rbsetcLogo from './assets/education_logo/rbsetc.png';



export const aboutInfo = [
    {
        name: "Hemesh Singh",
        roles: [
            ' Backend Developer',
            ' Software Engineer',
            ' MERN Stack Developer',
        ],
        aboutMe: "I'm an enthusiastic Full-Stack Developer who loves to code and create fully functional, responsive, clean and user-friendly web applications from scratch that are user friendly too. I work as a fullstack developer and I have very good basis in client side tech and server side technologies supported with real world projects and ever learning. I am a tech enthusiast who likes designing efficient digital solutions – with performance and user experience in mind!",
        resumeLink: "https://drive.google.com/file/d/1Y9wzK8Dt1VHjHASglT6S39qLFQXw_nku/view?usp=drive_link",
        linkedinLink: "https://www.linkedin.com/in/hemesh1",
        githubLink: "https://github.com/hemesh3",
        profilePic: profileImage,
    }
];

export const skillsInfo = [
    {
        title: 'Frontend',
        skills: [
            { name: 'HTML', logo: htmlLogo },
            { name: 'CSS', logo: cssLogo },
            { name: 'JavaScript', logo: javascriptLogo },
            { name: 'React.js', logo: reactjsLogo },
            { name: 'React Router', logo: reactrouterLogo },
            { name: 'Bootstrap', logo: bootstrapLogo },
        ],
    },
    {
        title: 'Backend & Database',
        skills: [
            { name: 'Node.js', logo: nodejsLogo },
            { name: 'Express.js', logo: expressjsLogo },
            { name: 'PHP', logo: phpLogo },
            { name: 'MongoDB', logo: mongodbLogo },
            { name: 'MySQL', logo: mysqlLogo },
        ],
    },
    {
        title: 'Languages',
        skills: [
            { name: 'JavaScript', logo: javascriptLogo },
            { name: 'PHP', logo: phpLogo },
            { name: 'Python', logo: pythonLogo },
        ],
    },
    {
        title: 'Tools',
        skills: [
            { name: 'Git', logo: gitLogo },
            { name: 'GitHub', logo: githubLogo },
            { name: 'VS Code', logo: vscodeLogo },
            { name: 'Vercel', logo: vercelLogo },
            { name: 'Linux', logo: linuxLogo },
            { name: 'AWS', logo: awsLogo },
        ],
    },
];

export const projects = [
    {
        id: 0,
        title: "End User Consignee (EUC) Dashboard",
        description:
            "Led the design and development of a responsive web dashboard using PHP, Ajax, JavaScript, jQuery, and MySQL. Implemented key features including user authentication, product search, and dynamic filtering. Enhanced performance and security through caching and encryption strategies, successfully delivering the project on time.",
        image: eucdash,
        tags: ["HTML","CSS","JavaScript","PHP","MySql","Data Tables"],
        github: "",
        livelink: "https://euc-dev.raptorsupplies.com",
        imageslink: "",
    },
    {
        id: 1,
        title: "Quoting System",
        description:
            "Developed an automated quote generation system with customized pricing and discount logic, reducing quote turnaround time by 30% and improving pricing accuracy by 30%. Integrated the solution with Zoho CRM to eliminate redundant data entry, cutting manual input by 60%. Implemented tracking and analytics tools to monitor quote performance, leading to a 15% increase in conversion rates.",
        image: quoteManager,
        tags: ["JavaScript","PHP","MySql","Data Tables","CodeIgniter","Payment API","Stripe","Google API"],
        github: "",
        livelink: "https://quote-dev.raptorsupplies.com",
        imageslink: "",
    },
    {
        id: 2,
        title: "RFQ Manger",
        description:
            "Designed and implemented an end-to-end RFQ automation system using the MERN stack, integrating Gmail and Outlook APIs to process over 400 RFQs daily. Leveraged ChatGPT for intelligent parsing and validation, reducing manual data entry by 40%. Integrated with Zoho CRM to streamline lead creation, improving overall response time and boosting lead generation speed by 50%.",
        image: rfqManager,
        tags: ["Node.js", "React JS", "Express.js", "Bootstrap", "Google API","Outlook API","JWT","Mongo DB"],
        github: "",
        livelink: "",
        imageslink: "",
    },

];

export const experiences = [
    {
        id: 0,
        img: raptorLogo,
        logo: rptLogo,
        role: "Web Developer",
        company: "A & M Supplies India Pvt. Ltd.",
        date: "April 2022 - April 2024",
        desc: "Being a Web Developer, I actively work in PHP and MySQl, plus HTML, CSS, and JavaScript for responsive, interactive interfaces. I build dynamic, database-led applications and cross-pollinate backend logic with front-end components, to provide sleek user experiences with clean and maintainable code.",
        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "Bootstrap",
            "PHP",
            "Mysql"
        ],
    },
    {
        id: 1,
        img: raptorLogo,
        logo: rptLogo,
        role: "Full Stack Developer",
        company: "A & M Supplies India Pvt. Ltd.",
        date: "April 2024 - Present",
        desc: "I'm a Full Stack Developer with hands-on experience working with the MERN stack — MongoDB, Express.js, React, and Node.js — along with MySQL for relational database management. I enjoy building end-to-end web applications that combine scalable backend systems with intuitive, user-friendly frontends. My focus is on writing clean, maintainable code, developing well-structured APIs, and handling data efficiently across both SQL and NoSQL environments.",
        skills: [
            "MERN Stack",
            "Mongo DB",
            "Express.js",
            "Node.js",
            "React Js",
            "Mysql"
        ],
    },
];

export const education = [
    {
        id: 0,
        img: rbsetcLogo,
        institute: "Raja Balwant Singh Management and Technical Campus, Agra",
        date: "July 2020 - April 2022",
        grade: "8.90",
        desc: "I’ve finished my MCA in 2022, added more strength and knowledge in the field of computer science and a strong full stack developer skill. Through out the course, I opted for advanced courses such as software engineering, cloud computing, database management, algorithms and system design. I was actively involved in project-based learning, working on academic as well as personal development projects focusing on application of the theory. I’ve also taken technical training courses, attended seminars and teamwork events that have given me the opportunity to come up with solutions and lead differently.",
        course: "Masters of Computer Application (MCA)",
    },
    {
        id: 1,
        img: aktuLogo,
        institute: "Institute of technology and Management, Aligarh",
        date: "July 2014 - May 2018",
        grade: "77.75%",
        desc: "I graduated with a B.Tech in Mechanical Engineering and applied my strengths in subjects like Thermodynamics, Fluid Mechanics, Machine Design, Manufacturing Processes. During the semester, I pursued design and analysis of academic and personal projects and attended technical workshops and meetings. I was also a student coordinator of various college societies and helped in event management and interacting fellow being.",
        course: "Bachelor of Technology - Mechanical Engineering",
    },
];

