export const CURRENT_DATE = new Date();
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
    experience: [
        {
            employer: 'Hy Cite Enterprises,' + String.fromCharCode(160) + 'LLC',
            title: 'Sr. Graphic' + String.fromCharCode(160) + 'Designer / Web' + String.fromCharCode(160) + 'Designer',
            showDesc: false,
            desc: null,
            startDate: new Date(2013, 10, 11, 0, 0, 0, 0),
            endDate: CURRENT_DATE,
            location: 'Madison, WI',
            highlighs: [
                'Oversaw the design and development of corporate(HyCite.com) and customer (RoyalPrestige.com) websites; provided art direction, wire framing and information architecture',
                'Oversaw the design and development of corporate(HyCite.com) and customer (RoyalPrestige.com) websites; provided art direction, wire framing and information architecture',
                'Oversaw the design and development of corporate(HyCite.com) and customer (RoyalPrestige.com) websites; provided art direction, wire framing and information architecture'
            ]
        },
        {
            employer: 'Rockford Register' + String.fromCharCode(160) + 'Star',
            title: 'Marketing Graphic' + String.fromCharCode(160) + 'Designer',
            showDesc: false,
            desc: null,
            startDate: new Date(1998, 8, 28, 0, 0, 0, 0),
            endDate: new Date(2008, 7, 20, 0, 0, 0, 0),
            location: 'Rockford, IL',
            highlighs: []
        },
        {
            employer: 'Fat Wallet',
            title: 'Web Designer',
            showDesc: false,
            desc: null,
            startDate: new Date(2008, 9, 13, 0, 0, 0, 0),
            endDate: new Date(2012, 4, 25, 0, 0, 0, 0),
            location: 'Rockford, IL',
            highlighs: []
        },
        {
            employer: 'DazzleFish',
            title: 'Art Director',
            showDesc: false,
            desc: null,
            startDate: new Date(2002, 2, 5, 0, 0, 0, 0),
            endDate: new Date(2013, 10, 10, 0, 0, 0, 0),
            location: 'Rockford, IL',
            highlighs: []
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