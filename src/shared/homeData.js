import { myEmail } from './siteData';
const homeData = [

    {
        type: 'plax',
        tint: 'shade-m',
        img: 'images/img-6.jpg',
        imgPos: true,
        cont:
            [
                {
                    hed: "Hello, am" + String.fromCharCode(160) + "Ray" + String.fromCharCode(160) + "Messina,",
                    sub: "Full Stack Web Developer and" + String.fromCharCode(160) + "Designer.",
                    hedClass: 'text-center ',
                    subClass: 'text-center sub-large',
                },
                {
                    colClass: 'text-center text-md-left',
                    btnClass: 'text-center text-md-left',

                    cont: "I am passionate about building dynamic, scalable,  responsive, and elegant websites and applications. Having recently earned my Full Stack Web and Mobile Developemnt Certification from NuCamp, I am ready to tackle new challenges.",

                    btns: [
                        {
                            text: "View My Projects",
                            url: "/projects"
                        },
                        {
                            text: "Contact Me",
                            url: "mailto:" + myEmail
                        }

                    ]
                }

            ]

    },
    {

        type: "side",
        head: "I am a designer who codes and a coder who" + String.fromCharCode(160) + "designs.",
        text: "<p class='pt-1'>I have always applied both sides of my brain to any endevour. After working as an in the Marketing sector as Art Director, I decided to transition into coding.  I have recently earned my Full Stack Web and Mobile Development Certification from <a href='http://nucamp.co' target='_blank'>NuCamp</a> and ready to tackle new challenges.</p>",
        clname: "py-5",

    },

    {
        type: 'plax',
        tint: 'shade',
        img: 'images/img-9.jpg',
        imgPos: true,
        cont:
            [
                {
                    hed: "Let's Build Something Together.",
                    hedClass: 'text-center pt-4',
                    colClass: 'text-center  ',
                    btnClass: 'text-center ',

                    cont: "sss",
                    btns: [
                        {
                            text: "Let's Build Something",
                            url: "mailto:" + myEmail
                        }

                    ]
                }

            ]

    },

    {
        type: "top",
        head: "MERN and LAMP stacks, and WordPress, served with lots of syrup and a dab" + String.fromCharCode(160) + "of" + String.fromCharCode(160) + "butter.",
        text: "Just in case you had been wondering what's under the hood. Am a life-learner, who is always eager to broaden his technical horizons, but most of my experice is in the LAMP and MERN stack, with a casual bit of Worpress development. I consider myself rather sharp at CSS, Javascript, and PHP.",
        clname: "py-5"
    },
    {
        type: "deck",
        grid: { xs: '6', sm: '4', md: '3', lg: '2' },
        ogrid: { lg: '10' },
        clname: " justify-content-center",
        cont: [
            {
                head: "React",
                text: null,
                icon: "fab fa-react",
            },
            {
                head: "Redux",
                text: null,
                icon: "iconify",
                attrs: {
                    ['data-icon']: "cib:redux",
                    ['data-inline']: "false"
                }
            },
            {
                head: "NodeJS",
                text: null,
                icon: "fab fa-node-js",
            },
            {
                head: "ExpressJS",
                text: null,
                icon: "iconify",
                attrs: {
                    ['data-icon']: "simple-icons:express",
                    ['data-inline']: "false"
                }
            },
            {
                head: "Javascript",
                text: null,
                icon: "fab fa-js",
            },
            {
                head: "PHP",
                text: null,
                icon: "fab fa-php",
            },
            {
                head: "MySQL",
                text: null,
                icon: "iconify",
                attrs: {
                    ['data-icon']: "whh:mysqltwo",
                    ['data-inline']: "false"
                }
            },
            {
                head: "MongoDB",
                text: null,
                icon: "iconify",
                attrs: {
                    ['data-icon']: "simple-icons:mongodb",
                    ['data-inline']: "false"
                }
            },
            {
                head: "Bootstrap",
                text: null,
                icon: "fab fa-bootstrap",
            },
            {
                head: "WordPress",
                text: null,
                icon: "fab fa-wordpress",
            },
            {
                head: "CSS3",
                text: null,
                icon: "fab fa-css3-alt",
            },
            {
                head: "HTML5",
                text: null,
                icon: "fab fa-html5",
            },




        ]
    },



];

export default homeData;