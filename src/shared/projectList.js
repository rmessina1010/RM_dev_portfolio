
const JQ = 'jQuery';
const JS = 'Javascript';
const ND = 'NodeJS';
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



const GH = 'Source';
const CP = 'CodePen';
const SOON = 'Demo: Coming Soon';
const DEMO = 'Demo';
const SCAN_QR = 'Scan Expo.io QR';

const projectData =
    [
        {
            id: 1,
            inactive: false,
            inRes: true,
            thumb: 'images/kupboard.jpg',
            name: 'Kupboard / Kupboard Server',
            desc: 'Full stack web app that provides small individual food pantries a platform to communicate their inventory, requested items, schedules, and announcements. Implements JWT to manage accounts and authentication.',
            stack: [REACT, BOOT, CSS, ND, EXPR, MONGDB, PASSP + '(JWT Auth)'],
            skills: [],
            roles: [],
            links: [
                {
                    url: 'https://kupboard.netlify.app',
                    text: DEMO,
                },
                {
                    url: 'https://github.com/rmessina1010/Kupboard_react',
                    text: GH + ': App',

                },
                {
                    url: 'https://github.com/rmessina1010/kupboardServer',
                    text: GH + ': Server',
                }

            ]
        },
        {
            id: 2,
            inactive: false,
            inRes: true,
            thumb: 'images/todo_add.jpg',
            name: 'TO-DO!',
            desc: 'Simple, calendar driven, to do list application. Implements device storage and persist state.',
            stack: [REACT_NTV, RDX],
            skills: [],
            roles: [],
            links: [
                {
                    qr: true,
                    qrtxt: SCAN_QR + ' to  launch TO_DO! demo',
                    url: 'images/rm_to_do_QR.png',
                    text: DEMO
                },
                {
                    url: 'https://github.com/rmessina1010/rm_simple_todo',
                    text: GH,

                }
            ]
        },
        {
            id: 3,
            inRes: true,
            inactive: false,
            thumb: 'images/sharelist.jpg',
            name: 'ShareList',
            desc: 'Web app that allows users to create, maintain and share item lists, such as shopping lists. Implements custom data objects and API.',
            stack: [PHP, MSQL, JS, JQ, BOOT, 'RMCDO'],
            skills: [],
            roles: [],
            links: [
                {
                    url: 'http://sharelist.raymessinadesign.com',
                    text: DEMO,
                },
                {
                    url: 'https://github.com/rmessina1010/shareList',
                    text: GH,

                }

            ]
        },
        {
            id: 7,
            inRes: true,
            inactive: false,
            thumb: 'images/datatable.jpg',
            name: 'DataTable Component',
            desc: 'A reusable, scalabe, feature and style customizable React component that creates tables with sortable columns. Fetaures images, user styles, and live row and cell links.',
            stack: [REACT, CSS],
            skills: [],
            roles: [],
            links: [

                {
                    url: 'https://raymessinadesign.com/projects/datatable',
                    text: DEMO,
                },
                {
                    url: 'https://github.com/rmessina1010/DataTable',
                    text: GH,

                }

            ]
        },
        {
            id: 4,
            inRes: true,
            inactive: false,
            thumb: 'images/rmcms.jpg',
            name: 'RMCDO / RMCMS',
            desc: 'Utility class/library to perform CRUD operations, verify data, and manage query results.',
            stack: [PHP, MSQL, JS, JQ],
            skills: [],
            roles: [],
            links: [
                {
                    url: 'https://github.com/rmessina1010/rm_db_access',
                    text: GH,

                }

            ]
        },
        {
            id: 5,
            inRes: true,
            inactive: false,
            thumb: 'images/mastermind.jpg',
            name: 'MasterMind',
            desc: 'An adaptation of the classic code-breaking game. Features progressive difficulty levels.',
            stack: [HTML, CSS, JS],
            skills: [],
            roles: [],
            links: [
                {
                    url: 'https://raymessinadesign.com/mastermind/?lvl=',
                    text: DEMO,
                },
                {
                    url: 'https://github.com/rmessina1010/MasterMind',
                    text: GH,

                }

            ]
        },
        {
            id: 6,
            inRes: true,
            inactive: false,
            thumb: 'images/mazesolver.jpg',
            name: 'MazeSolver',
            desc: 'A simple BSF demo that finds the shortest route solution to a user customizable maze.',
            stack: [HTML, CSS, JS],
            skills: [],
            roles: [],
            links: [

                {
                    url: 'https://raymessinadesign.com/projects/mazerunner/maze_solver.html',
                    text: DEMO,
                },
                {
                    url: 'https://github.com/rmessina1010/maze-solver',
                    text: GH,

                }

            ]
        },


    ];

export default projectData;