import { myEmail } from './siteData';
import {NBSP}  from './helpers';

const homeData = [

    {
        type: 'plax',
        tint: 'shade-m',
        img: 'images/img-6.jpg',
        alt: 'grayscale image, close up of a developers hands at the typing on a laptop computer',
        imgPos: true,
        cont:
            [
                {
                    hed: "Hello. I'm" + NBSP + "Ray" + NBSP + "Messina,",
                    sub: "Full Stack Web Developer and" + NBSP + "Designer.",
                    hedClass: 'text-center ',
                    subClass: 'text-center sub-large',
                },
                {
                    colClass: 'text-center text-md-left',
                    btnClass: 'text-center text-md-left',

                    cont: "I am passionate about building engaging, dynamic, and scalable, websites and applications. I invite you to take a look at my projects, review my résumé and contact me about how I can help you achieve your business" + NBSP + "goals.",

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
        head: "I am a designer who codes and a coder who" + NBSP + "designs.",
        text: "<p class='pt-1'>Having a balanced mix of technical and creative abilities, I apply both sides of my brain when deriving solutions. After working as an in the Marketing sector as Art Director, I decided to transition into coding. I have recently earned my Full Stack Web and Mobile Development Certification from <a href='http://nucamp.co' target='_blank' rel='noreferrer' >NuCamp</a> and am ready to tackle new" + NBSP + "challenges.</p>",
        clname: "py-5",

    },

    {
        type: 'plax',
        tint: 'shade',
        img: 'images/img-9.jpg',
        alt: 'close up of UI design sketches strewn on desk; laptop, mobile phone, and pen off to the side',
        imgPos: true,
        cont:
            [
                {
                    sub: "Solving problems and turning ideas to reality.",
                    colClass: 'text-center  ',
                    btnClass: 'text-center ',
                    cont: "I love creating beautiful websites and apps that have a positive impact. I am always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Get in touch and let me know how I" + NBSP + "can" + NBSP + "help.",
                    btns: [
                        {
                            text: "Let's Build Something Together",
                            url: "mailto:" + myEmail
                        }

                    ]
                }

            ]

    },

    {
        type: "top",
        head: "MERN and LAMP stacks, and WordPress, served with lots of syrup and a" + NBSP + "dab" + NBSP + "of" + NBSP + "butter",
        text: "Just in case you had been wondering what's under the hood. I am a CSS guru, Javascript ninja, and  PHP connoisseur. Am a lifelong-learner, who is always eager to broaden his technical horizons, but my go to took kits are the LAMP and MERN stacks, with a casual bit of Wordpress" + NBSP + "development.",
        clname: "py-5"
    },
    {
        type: "deck",
        grid: { xs: '6', sm: '4', md: '3', lg: '2' },
        ogrid: { lg: '10' },
        clname: "skill-grid justify-content-center",
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
                    'data-icon': "cib:redux",
                    'data-inline': "false"
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
                    'data-icon': "simple-icons:express",
                    'data-inline': "false"
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
                    'data-icon': "whh:mysqltwo",
                    'data-inline': "false"
                }
            },
            {
                head: "MongoDB",
                text: null,
                icon: "iconify",
                attrs: {
                    'data-icon': "simple-icons:mongodb",
                    'data-inline': "false"
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