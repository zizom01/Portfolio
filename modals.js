const cyber = document.getElementById('cyber');
const database = document.getElementById('database');
const game = document.getElementById('gameDev');
const web = document.getElementById('web');
const text = document.getElementById('mText');
const title = document.getElementById('titleM');

function Learn(btn) {
    switch (btn) {
        case cyber:
            title.textContent = "Cyber Security";
            text.textContent = "During my mandatory military service in Kuwait, I served as part of the Cyber Security Directorate, a role that significantly enhanced my technical skills and professional growth. Over the course of a year, I was immersed in various facets of cybersecurity, gaining hands-on experience in critical areas such as reverse engineering, threat hunting, penetration testing, and technical support. My responsibilities involved identifying and mitigating potential cyber threats to safeguard sensitive systems and information. I honed my analytical skills by performing detailed assessments of vulnerabilities and implementing measures to enhance system resilience. Additionally, my work in reverse engineering allowed me to understand the inner workings of software and detect malicious behaviors, contributing to proactive security measures. This role provided me with practical exposure to tools and techniques used in the cybersecurity domain, along with a solid foundation in the theoretical principles underpinning these methods. Collaborating with a team of experts under high-pressure situations helped me develop strong problem-solving abilities and a keen attention to detail. The experience not only deepened my passion for technology but also reinforced my commitment to continuous learning and professional development in the ever-evolving field of cybersecurity. My military service remains a cornerstone of my career journey, shaping my dedication to technological excellence and security.";
            break;
        case web:
            title.textContent = "Web Development";
            text.textContent = "Web development has been a central focus of my technical journey, blending creativity with practical functionality. I specialize in building dynamic full-stack applications using Node.js for the backend and frameworks like Bootstrap for responsive design. My work includes integrating SQL databases, implementing authentication mechanisms like Passport.js, and using RESTful APIs for seamless communication between front-end and back-end systems. I have also explored no-code platforms like Wix and WordPress to understand the versatility of web development tools. Whether creating an interactive website, an enrollment system, or a management dashboard, I prioritize clean code, user-friendly designs, and scalable architecture. This balance of technical precision and user focus drives my passion for web development.";
            break;
        case game:
            title.textContent = "Game Development";
            text.textContent = "As a game developer, I have explored both creative and technical aspects of this exciting field. My primary experience is with Godot, where I’ve worked on projects ranging from 2D platformers to simulation management games. I enjoy designing game mechanics, creating compelling narratives, and implementing intuitive user interfaces that keep players engaged. I’ve also dabbled in Unity, gaining insight into its ecosystem and advanced 3D capabilities. My game development journey often involves problem-solving, such as optimizing performance or debugging complex gameplay features. These challenges push me to innovate and continuously learn, fostering a deep appreciation for the intersection of art and technology that defines game development.";
            break;
        case database:
            title.textContent = "Database Design and Development";
            text.textContent = "My experience with databases spans both NoSQL and SQL systems, offering me a well-rounded understanding of data storage and management. I began with MongoDB, where I became proficient in designing flexible, schema-less databases that support dynamic applications. Over time, I transitioned to SQL-based systems like MySQL to deepen my understanding of structured query language and relational database design. This shift allowed me to develop robust, normalized database schemas, write complex queries, and optimize database performance for large-scale applications. My projects often involve designing databases for web and management systems, ensuring data integrity and scalability. I enjoy the challenge of crafting efficient database structures that align with project requirements while maintaining a user-friendly interface for data retrieval and updates. These experiences have cemented my passion for databases and their pivotal role in modern applications.";
            break;
        default:
            break;
    }
}