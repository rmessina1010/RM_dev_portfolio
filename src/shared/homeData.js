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
                    sub: "Full Stack Web Developper and" + String.fromCharCode(160) + "Designer.",
                    hedClass: 'text-center ',
                    subClass: 'text-center ',
                },
                {
                    colClass: 'text-center text-md-left',
                    btnClass: 'text-center text-md-left',

                    cont: "Some basic lorem ipsum description. more words etc etc. Woking text and stuff more more more more etc. Something consisitng of natural looking text and spanning more than one line (by choice) and stuf. ect",
                    btns: [
                        {
                            text: "My Projects",
                            url: "/projects"
                        },
                        {
                            text: "Contact Me",
                            url: "mailto:ray@raymessinadesign.com"
                        }

                    ]
                }

            ]

    },
    {
        type: "top",
        head: "Headline from External data file lorem ipsum longeer text",
        text: "lorem ipsum with link from external data file. <a href='#'>test link.</a>",
        clname: "py-4"
    },

    {
        type: 'plax',
        tint: 'shade',
        img: 'images/img-9.jpg',
        imgPos: true,
        cont:
            [
                {
                    hed: "Hello, am Ray. Full Stack Web Developer and Designer",
                    hedClass: 'text-center pt-4',
                    colClass: 'text-center  ',
                    btnClass: 'text-center ',

                    cont: " Some basic lorem ipsum description. more words etc etc. Woking text and stuff more more more more etc. Something consisitng of natural looking text and spanning more than one line (by choice) and stuf. ect",
                    btns: [
                        {
                            text: "Let's Build Something",
                            url: "mailto:ray@raymessinadesign.com"
                        }

                    ]
                }

            ]

    },

    {
        type: "top",
        head: "Headline from External data file lorem ipsum longeer text",
        text: "MERN, LAMP, and WordPress.",
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