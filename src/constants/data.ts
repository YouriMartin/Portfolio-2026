import {CVData, SkillCategory, SocialLink} from '@/types';

export const CV_DATA: CVData = {
    name: 'Youri Martin',
    title: 'Full Stack Developer',
    contact: {
        email: 'youri.dev.martin@gmail.com',
        location: 'Rennes, France'
    },
    summary: `Full Stack Developer with strong experience in Java, Spring Boot, and JavaScript.
Comfortable with modern architectures such as Hexagonal Architecture, SOA, and microservices.
Experienced in building complex, secure, and scalable web applications on both backend and frontend.`,
    experience: [
        {
            company: 'Erium',
            position: 'Full Stack Developer',
            period: '2024/10 - Present',
            description: 'Blacknoise project – Breach and Attack Simulator',
            achievements: [
                'Development of a breach and attack simulation platform',
                'Backend development using NestJS with CQRS architecture',
                'Implementation of SOA and microservices architecture',
                'Frontend development with React',
                'Design and implementation of unit and functional tests',
                'Containerization and orchestration using Docker',
                'Database design and management with PostgreSQL'
            ]
        },
        {
            company: 'Inetum',
            position: 'Full Stack Developer',
            period: '2024/01 - 2024/07',
            description: 'ANTAI Project',
            achievements: [
                'Backend development using Java 17 and Spring Boot',
                'Implementation of Hexagonal Architecture',
                'Business process orchestration with Camunda BPMN',
                'Integration of RabbitMQ and ClamAV',
                'Frontend development with Angular 15',
                'Containerization using Docker and automation with Ansible',
                'Data management with MariaDB and Redis'
            ]
        },
        {
            company: 'Agence Mirada',
            position: 'Full Stack Developer',
            period: '2021/10 - 2023/09',
            description: 'Internal and client projects',
            achievements: [
                'Poulpe: Internal CRM project (Express.js, Angular, Sequelize)',
                'Bernard: Video streaming and sharing platform (Express.js, Next.js, Sequelize)',
                'Kera Groupe: Development with Strapi and Next.js',
                'Agence Sauvages: Development with Strapi and Next.js',
                'Tarmac Simulation: Development with Strapi and Next.js',
                'Émergence Incubation: WordPress and SQL',
                'GoodPaper: WordPress and SQL'
            ]
        }
    ],
    education: [
        {
            institution: 'ENI - École Informatique',
            degree: 'Application Designer and Developer',
            period: '2021/09 - 2023/10'
        },
        {
            institution: 'AFPA - Brest',
            degree: 'Web and Mobile Web Developer',
            period: '2020/11 - 2021/07'
        }
    ],
    skills: [
        'Java',
        'Spring Boot',
        'NestJS',
        'Node.js',
        'Express.js',
        'React',
        'Angular',
        'Next.js',
        'Docker',
        'PostgreSQL',
        'MariaDB',
        'Redis',
        'RabbitMQ',
        'CQRS',
        'Microservices'
    ]
};

export const SKILLS_DATA: SkillCategory[] = [
    {
        category: 'Backend',
        skills: [
            {name: 'NestJS', level: 'advanced', description: 'Scalable Node.js backend framework'},
            {name: 'Node.js', level: 'advanced', description: 'JavaScript backend development'},
            {name: 'Java', level: 'advanced', description: 'Backend development with Java 17'},
            {name: 'Spring Boot', level: 'advanced', description: 'REST APIs and microservices'},
            {name: 'Express.js', level: 'advanced', description: 'Node.js web framework'},
            {name: 'CQRS', level: 'intermediate', description: 'Command Query Responsibility Segregation'},
            {name: 'Hibernate / JPA', level: 'intermediate', description: 'Java ORM'},
            {name: 'Sequelize', level: 'advanced', description: 'Node.js ORM'},
            {name: 'RabbitMQ', level: 'intermediate', description: 'Asynchronous messaging'},
            {name: 'Camunda BPMN', level: 'intermediate', description: 'Business process orchestration'},
            {name: 'JUnit', level: 'intermediate', description: 'Java unit testing'},
            {name: 'Jest', level: 'advanced', description: 'JavaScript testing'}
        ]
    },
    {
        category: 'Frontend',
        skills: [
            {name: 'React', level: 'advanced', description: 'Component-based UI development'},
            {name: 'Angular', level: 'advanced', description: 'Single Page Applications'},
            {name: 'Next.js', level: 'advanced', description: 'React SSR applications'},
            {name: 'Vue.js', level: 'intermediate', description: 'Frontend framework'},
            {name: 'Redux', level: 'intermediate', description: 'State management'},
            {name: 'RxJS', level: 'intermediate', description: 'Reactive programming'},
            {name: 'Three.js', level: 'beginner', description: '3D Web development'},
            {name: 'Figma', level: 'intermediate', description: 'UI/UX collaboration'}
        ]
    },
    {
        category: 'Database',
        skills: [
            {name: 'PostgreSQL', level: 'advanced', description: 'Relational database design and optimization'},
            {name: 'MySQL / MariaDB', level: 'advanced', description: 'Relational databases'},
            {name: 'MongoDB', level: 'intermediate', description: 'NoSQL databases'},
            {name: 'Redis', level: 'intermediate', description: 'In-memory data store'}
        ]
    },
    {
        category: 'DevOps & Architecture',
        skills: [
            {name: 'Docker', level: 'advanced', description: 'Containerization and service isolation'},
            {name: 'Microservices', level: 'advanced', description: 'Distributed systems design'},
            {name: 'SOA', level: 'advanced', description: 'Service-Oriented Architecture'},
            {name: 'Ansible', level: 'intermediate', description: 'Infrastructure automation'},
            {name: 'Debian', level: 'intermediate', description: 'System administration'},
            {name: 'Bash', level: 'intermediate', description: 'Shell scripting'}
        ]
    },
    {
        category: 'Testing & Quality',
        skills: [
            {name: 'Unit Testing', level: 'advanced', description: 'Backend and frontend unit tests'},
            {name: 'Functional Testing', level: 'intermediate', description: 'End-to-end and functional tests'},
            {name: 'Clean Architecture', level: 'intermediate', description: 'Maintainable code structure'}
        ]
    },
    {
        category: 'Agile & Methodologies',
        skills: [
            {
                name: 'Scrum',
                level: 'advanced',
                description: 'Scrum practices, ceremonies, facilitation and team coordination (non-certified)'
            },
            {
                name: 'Scrum Master Practices',
                level: 'intermediate',
                description: 'Sprint planning, daily stand-ups, retrospectives, impediment tracking'
            },
            {
                name: 'SAFe',
                level: 'intermediate',
                description: 'Scaled Agile Framework knowledge and team-level practices'
            }
        ]
    },
    {
        category: 'Other',
        skills: [
            {name: 'English', level: 'intermediate', description: 'Technical English'},
            {name: 'LSF', level: 'beginner', description: 'French Sign Language'},
            {name: 'Self-hosted AI', level: 'intermediate', description: 'Self-hosted AI deployment'}
        ]
    }
];

export const SOCIAL_LINKS: SocialLink[] = [
    {
        platform: 'github',
        url: 'https://github.com/yourimartin',
        username: 'YouriMartin'
    },
    {
        platform: 'linkedin',
        url: 'https://linkedin.com/in/yourprofile',
        username: 'yourprofile'
    }
];
