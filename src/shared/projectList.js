
const JQ = 'jQuery';
const JS = 'Javascript';
const ND = 'Node';
const PHP = 'PHP';
const WP = 'WordPress';
const CSS = 'CSS';
const SASS = 'SASS';
const HTML = 'HTML';
const REACT = 'React';
const RDX = 'Redux';
const REACT_NTV = 'React Native';
const BOOT = 'Bootstrap';
const MSQL = 'MySQL';
const MONGDB = 'MongoDB';
const EXPR = 'Express';
const PASSP = 'Passport';

const DEV = 'Development';
const FRONT = 'Front End';
const BACK = 'Back End';
const ARCH = 'Site Architecture';
const DSGN = 'Graphic Design';
const WRT = 'Copy Writing';
const CODE = 'Code';
const BRND = 'Brand';
const DBUG = 'Debug';
const STUP = 'SetUp';




const projectData =
    [
        {
            id: 1,
            inactive: false,
            inRes: true,
            thumb: 'https://via.placeholder.com/320x180',
            name: 'Kupboard / Kupboard Server',
            desc: 'Full stack web app that provides small individual food pantries a platform to communicate their inventory, requested items, schedules, and announcements.Implements JWT to manage accounts and authentication.',
            stack: [REACT, BOOT, MONGDB, EXPR, PASSP + '(JWT Auth)'],
            skills: [],
            roles: [DSGN, DEV, FRONT, BACK],
            links: [
                {
                    url: 'apple.com',
                    text: 'apple',
                    disabled: true
                },
                {
                    url: 'apple.com',
                    text: 'another',

                }

            ]
        },
        {
            id: 2,
            inactive: false,
            inRes: true,
            thumb: 'https://via.placeholder.com/360x225',
            name: 'TO-DO!',
            desc: 'Simple, calendar driven, to do list application. Implements device storage and persist state.',
            stack: [REACT_NTV, RDX],
            skills: [],
            roles: [DSGN, DEV, FRONT, BACK],
            links: [
                {
                    url: 'apple.com',
                    text: 'apple',
                    disabled: true
                },
                {
                    url: 'apple.com',
                    text: 'another',

                }
            ]
        },
        {
            id: 3,
            inRes: true,
            inactive: false,
            thumb: 'https://via.placeholder.com/360x225',
            name: 'ShareList',
            desc: 'Web app that allows users to create, maintain and share item lists, such as shopping lists. Implements custom data objects and API.',
            stack: [PHP, MSQL, JS, JQ, BOOT, 'RMCDO'],
            skills: [],
            roles: [DSGN, DEV, FRONT, BACK],
            links: [
                {
                    url: 'apple.com',
                    text: 'apple',
                    disabled: true
                },
                {
                    url: 'apple.com',
                    text: 'another',

                }

            ]
        },
        {
            id: 4,
            inRes: true,
            inactive: false,
            thumb: 'https://via.placeholder.com/360x225',
            name: 'RMCDO / RMCMS',
            desc: 'Utility class/library to perform CRUD operations, verify data, and manage query results.',
            stack: [PHP, MSQL, JS, JQ],
            skills: [],
            roles: [DSGN, DEV, FRONT, BACK],
            links: [
                {
                    url: 'apple.com',
                    text: 'apple',
                    disabled: true
                },
                {
                    url: 'apple.com',
                    text: 'another',

                }

            ]
        },
        {
            id: 5,
            inRes: true,
            inactive: false,
            thumb: 'https://via.placeholder.com/360x225',
            name: 'MasterMind',
            desc: 'An adaptation of the classic code-breaking game. Features progressive difficulty levels.',
            stack: [HTML, CSS, JS],
            skills: [],
            roles: [DSGN, DEV, FRONT, BACK],
            links: [
                {
                    url: 'apple.com',
                    text: 'apple',
                    disabled: true
                },
                {
                    url: 'apple.com',
                    text: 'another',

                }

            ]
        },
        {
            id: 6,
            inRes: true,
            inactive: false,
            thumb: 'https://via.placeholder.com/360x225',
            name: 'MazeSolver',
            desc: 'A simple BSF demo that finds the shortest route solution to a user customizable maze.',
            stack: [HTML, CSS, JS],
            skills: [],
            roles: [DSGN, DEV, FRONT, BACK],
            links: [
                {
                    url: 'apple.com',
                    text: 'apple',
                    disabled: true
                },
                {
                    url: 'apple.com',
                    text: 'another',

                }

            ]
        },


    ];

export default projectData;