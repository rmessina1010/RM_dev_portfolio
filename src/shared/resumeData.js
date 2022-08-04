import projects from './projectList';
import {NBSP}  from './helpers';

export const CURRENT_DATE = new Date();
const resData = {
    dlfile: {
        url: 'downloads/Ray_Messina_FULL_STACK_DEVELOPER.pdf',
        name: 'Ray_Messina_FULL_STACK_DEVELOPER.pdf',
        text: 'PDF'
    },
    sections: [
        {
            type: 'summ',
            title: 'Summary',
            id: 'summary'
        },
        {
            type: 'codes',
            title: 'Languages',
            id: 'languages'
        },
        {
            type: 'libs',
            title: 'Frameworks &' + NBSP + 'Libraries',
            name: 'Libraries',
            id: 'libs'
        },
        {
            type: 'tools',
            title: 'Tools',
            id: 'tools'
        },
        {
            type: 'lings',
            title: 'Linguae',
            id: 'ling'
        },
        {
            type: 'projs',
            title: 'Projects',
            id: 'projs'

        },
        {
            type: 'hist',
            title: 'Work History',
            id: 'hist'

        },
        {
            type: 'edu',
            title: 'Education',
            id: 'edu'
        },
        {
            type: 'awards',
            title: 'Accolades &' + NBSP + 'Publications',
            name: 'Awards',
            id: 'awards'
        }


    ],

    summary: {
        em: `Full Stack Web developer, with extensive experience in Marketing and Communications.  A coder who designs and a designer who codes.`,
        text: `Demonstrated ability to translate client ideas into functioning reality. Has passion for learning and well-honed trouble shooting and problem solving skills. A strategic and conceptual thinker with a balanced of mix of creative talent and technical know how. Leads by example with an easy-going manner and builds trust by sharing knowledge, vision and experience with${NBSP}colleagues.`
    },
    skills: {
        codes: [
            { name: 'Javascript / ES7' },
            { name: 'TypeScript' },
            { name: 'PHP' },
            { name: 'HTML5 / CSS3' },
            { name: 'SASS' },
            { name: 'SQL' }
        ],
        libs: [
            { name: 'React' },
            { name: 'React Native' },
            { name: 'Redux' },
            { name: 'Bootstrap' },
            { name: 'jQuery' },
            { name: 'NodeJS' },
            { name: 'Express' },
            { name: 'Mongoose' },
            { name: 'Wordpress' }
        ],
        tools: [
            { name: 'Git' },
            { name: 'Postman' },
            { name: 'InDesign' },
            { name: 'Photoshop' },
            { name: 'Lightroom' },
            { name: 'Illustrator' },
            { name: 'Xd' },
            { name: 'REST APIs' },
            { name: 'DreamWeaver' },
            { name: 'Word' },
            { name: 'Powerpoint' },
            { name: 'Excel' },
        ],
        lings: [
            { name: 'Spanish', extra: ' (fluent)' },
            { name: 'Italian' },
            { name: 'Portugese' }
        ]


    },
    edu: [
        {
            name: 'Full Stack Web and Mobile Development Certification',
            the: null,
            inst: 'Nucamp Coding Bootcamp',
            detail: 'with honors'

        },
        {
            name: 'BFA Degree in Graphic Design and Studio Art',
            the: 'the',
            inst: 'State University of New York',
            detail: 'graduate standing: Cum Laude'

        },
    ],
    awards: [
        {
            name: 'Original CSS technique featured on CSS-Tricks.com:',
            detail: '<i>Targeting Menu Elements with Submenus in a Navigation Bar</i>'
        },
        {
            name: 'Dan Schulz Award for Web Design',
            detail: 'from SitePoint'
        }


    ],
    experience: [
        {
            employer: 'Ad Hoc,' + NBSP + 'LLC',
            title: 'Staff Software Engineer'+ NBSP + '[Front End]',
            showDesc: false,
            desc: null,
            startDate: new Date(2021, 11, 27, 0, 0, 0, 0),
            endDate: CURRENT_DATE,
            location: 'Remote/Madison, WI',
            highlighs: [
                `Lead initiative to implement Yarn Workspaces in vets-website, in preparation for continuous deploy`,
                `Helped develop a prototype Backstage Console UI plugin`,
                `Ensured daily front-end deploy ran smoothly; troubleshooting CI/CD issues`,
                `Reviewed PR's and ensured code quality`,
            ]
        },
        {
            employer: 'Hy Cite Enterprises,' + NBSP + 'LLC',
            title: 'Sr. Graphic' + NBSP + 'Designer / Web' + NBSP + 'Designer',
            showDesc: false,
            desc: null,
            startDate: new Date(2013, 10, 11, 0, 0, 0, 0),
            endDate: new Date(2020, 6, 17, 0, 0, 0, 0),
            location: 'Madison, WI',
            highlighs: [
                'Oversaw the design and development of corporate(HyCite.com) and customer (RoyalPrestige.com) websites; provided art direction, wire framing and information architecture',
                'Oversaw the design and development of recruiting website (OportunidadRoyal.com); provided art direction, wire framing, WordPress.org child theme, lead generation forms, and API',
                'Set up and customized a customer-facing blog using Wordpress.com'
            ]
        },
        {
            employer: 'DAZZLEFISH' + NBSP + '/ MUNDANE' + NBSP + 'EGG',
            title: 'Web Developer / Art Director',
            showDesc: false,
            desc: null,
            startDate: new Date(2001, 1, 28, 0, 0, 0, 0),
            endDate: CURRENT_DATE,
            location: 'Madison, WI',
            highlighs: [
                'Designed website for Nobium General Contractors, Escondido, CA',
                'Designed website for Nemrac Translation Services, Rochester, NY'
            ]
        },
        {
            employer: 'ROCKFORD REGISTER' + NBSP + 'STAR (GANNETT)',
            title: 'Marketing Graphic Designer',
            showDesc: false,
            desc: null,
            startDate: new Date(2008, 7, 20, 0, 0, 0, 0),
            endDate: new Date(1998, 8, 28, 0, 0, 0, 0),
            location: 'Rockford, IL',
            highlighs: [
                'Project managed recruitment and promotional campaigns,including the re-branding of the Register Star’s classifieds section—The Source',
                'Eliminated billing redundancies, reducing lineage expenses by 34%'
            ]
        }
    ]
};
let resProjs = projects.filter(proj => proj.inRes);

resData.projs = resProjs.map(proj => {
    let link = null;
    return { id: proj.id, link: link, name: proj.name, desc: (proj.resDesc || proj.desc), stack: proj.stack.join(', ') }
}
);
export default resData;