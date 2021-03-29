const CURRENT_DATE = new Date();
const resData = {
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
            title: 'Frameworks &' + String.fromCharCode(160) + 'Libraries',
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
            title: 'Accolades &' + String.fromCharCode(160) + 'Publications',
            name: 'Awards',
            id: 'awards'
        }


    ],

    summary: {
        em: 'ohai.',
        text: 'a sumary string lorem ipsum'
    },
    skills: {
        codes: [
            { name: 'Javascript / ES7' },
            { name: 'HTML5 / CSS3' },
            { name: 'PHP' },
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
            name: 'Full Stack Web and Mobile Develoment Certification',
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
    hist: [
        {
            employer: 'Hy Cite Enterprises, LLC',
            title: 'Sr. Graphic Designer',
            showDesc: false,
            desc: null,
            startDate: new Date(2013, 11, 11, 0, 0, 0, 0),
            endDate: CURRENT_DATE,
            location: 'Madison, WI',
            hilights: []
        }
    ],
    projs: [
        {
            link: null,
            name: ' Kupboard / Kupboard Server',
            desc: 'Full stack web app that provides small individual food pantries a platform to communicate their inventory, requested items, schedules, and announcements.Implements JWT to manage accounts and authentication.',
            stack: 'React, BootStrap, MongoDB, Express, Passport(JWT Auth)'
        },
        {
            link: null,
            name: ' Kupboard / Kupboard Server',
            desc: 'Full stack web app that provides small individual food pantries a platform to communicate their inventory, requested items, schedules, and announcements.Implements JWT to manage accounts and authentication.',
            stack: 'React, BootStrap, MongoDB, Express, Passport(JWT Auth)'
        }

    ]
};

export default resData;