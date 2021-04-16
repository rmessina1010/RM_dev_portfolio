const homeData = [
    {
        type: "plax",
        img: 'images/img-4.jpg',
        imgPos: true,
        cont:
            [
                {
                    btnClass: 'text-center text-md-left',
                    hed: "Test Paralax healine",
                    cont: " Some basic lorem ipsum description. more words etc etc. Woking text and stuff more more more more etc. Something consisitng of natural looking text and spanning more than one line (by choice) and stuf. ect",
                    btns: [
                        {
                            text: "fff",
                            url: "#"
                        }
                    ]
                },

            ]

    },
    {
        type: "top",
        head: "Headline from External data file",
        text: "lorem ipsum with link from external data file. <a href='#'>test link.</a>",
        clname: "py-5"
    },
    {
        type: "deck",
        cont: [
            {
                head: "An external item",
                text: "Projects..blah blah",
                icon: "fa fa-home",
            },
            {
                head: "Another external item",
                text: "Projects..blah blah",
                icon: "fa fa-home",
            },
            {
                head: "A different headline",
                text: "Projects..external...blah blah",
                icon: "fa fa-home",
            },
            {
                head: "Yet another external item",
                text: "Projects..blah blah",
                icon: "fa fa-home",
            }
        ]
    },



];

export default homeData;