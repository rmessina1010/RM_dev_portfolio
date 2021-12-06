export const myEmail = 'ray@raymessinadesign.com';
export const mySite = 'dev.raymessinadesign.com';
export const ME = "Ray Messina";
export const miniME = "Ray";

const SiteData = {
	url: mySite,
	info: {
		copyright: 2020,
		siteName: 'Ray Messina Web Dev',
		author: 'Ray Messina Design',
		authorURL: mySite,
		email: myEmail
	},
	pages: [
		{
			id: 1,
			text: "About",
			icon: "fa fa-house",
			url: "/home",
			include: [],
			exclude: []
		},
		{
			id: 2,
			text: "Projects",
			icon: "fa fa-house",
			url: "/projects",
			include: [],
			exclude: []
		},
		{
			id: 3,
			text: "Résumé",
			icon: "fa fa-house",
			url: "/resume",
			include: [],
			exclude: []
		},
		{
			id: 4,
			text: "Musings",
			icon: "fa fa-house",
			url: "/musings",
			include: [],
			exclude: []
		},
		{
			id: 5,
			text: "Contact",
			icon: "fa fa-house",
			url: "mailto:" + myEmail,
			include: [],
			exclude: []
		},
	],
	social: [
		{
			id: 1,
			title: 'contact',
			url: "mailto:" + myEmail,
			icon: 'fa fa-envelope'
		},

		{
			id: 2,
			title: 'github',
			url: 'https://github.com/rmessina1010',
			icon: 'fa fa-github'
		},
		{
			id: 3,
			title: 'codepen',
			url: 'https://codepen.io/RayM',
			icon: 'fa fa-codepen'
		},
		{
			id: 4,
			title: 'linkedin',
			url: 'https://linkedin.com/in/ray-messina-83a41a11',
			icon: 'fa fa-linkedin'
		}
	]

}
export default SiteData;