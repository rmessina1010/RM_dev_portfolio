const homeData = [
    {
        type: 'plax',
        tint: 'shade',
        img: 'images/img-4.jpg',
        imgPos: true,
        cont:
            [
                {
                    colClass: 'text-center text-md-left',
                    btnClass: 'text-center text-md-left',
                    hed: "Test Paralax headline",
                    cont: " Some basic lorem ipsum description. more words etc etc. Woking text and stuff more more more more etc. Something consisitng of natural looking text and spanning more than one line (by choice) and stuf. ect",
                    btns: [
                        {
                            text: "Check Out My Projects!",
                            url: "/projects"
                        },
                        {
                            text: "Contact Me",
                            url: "mailto:ray@raymessinadesign.com"
                        }

                    ]
                }, {}

            ]

    },
    {
        type: "top",
        head: "Headline from External data file lorem ipsum longeer text",
        text: "lorem ipsum with link from external data file. <a href='#'>test link.</a>",
        clname: "py-4"
    },
    {
        type: "deck",
        cont: [
            {
                head: "Front End & UI/UX",
                text: "Projects..blah blah",
                icon: "fa fa-home",
            },
            {
                head: "Web Development",
                text: "Projects..blah blah",
                icon: "fas fa-code",
            },
            {
                head: "Art Direction & Design",
                text: "Projects..external...blah blah",
                icon: "fas fa-pencil-ruler",
            },
            {
                head: "Yet another external item",
                text: "Projects..blah blah",
                icon: "fa fa-database",
            }
        ]
    },



];

export default homeData;