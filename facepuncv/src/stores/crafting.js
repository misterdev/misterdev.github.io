import { writable } from 'svelte/store'

export const categories = {
    EXP: {
        id: 'EXPERIENCE',
        label: 'Experience',
        count: 4,
    },
    EDU: {
        id: 'EDUCATION',
        label: 'Education',
        count: 3,
    },
    PROJ: {
        id: 'PROJECTS',
        label: 'Projects',
        count: 7,
    },
    STUFF: {
        id: 'STUFF',
        label: 'Other Stuff',
        count: 4,
    }
}

export const navigation = writable({cat: categories.EXP.id, selected: 0})

export let content = {}
content.EXPERIENCE = [
    {
        // icon
        label: "OSS Javascript Developer",
        icon: "images/webpack.png",
        date: "25 dicc",
        // 
        description: "After contributing to Webpack, I've been selected globally for the \"Google Summer of Code 2019\" to design and develop a modular output reporting system for webpack",
        links: [
            {
                icon: "images/gsoc.png",
                url: "https://summerofcode.withgoogle.com/",
                label: "GSoC Website"
            },
            {
                icon: "images/gsoc.png",
                url: "https://github.com/misterdev/webpack-reporter-plugin"
            }
        ],
        stats: [
            {
                label: 'Javascript',
                count: 700
            },
            {
                label: 'Firebase',
                count: 600
            },
            {
                label: 'Firebase',
                count: 600
            },
            {
                label: 'Firebase',
                count: 600
            }
        ]
    },
    {
        // icon
        label: "Lay Lab",
        icon: "images/gsoc.png",
        date: "25 dicc",
        // 
        description: "kajshdkjahsdkja aksjdhkajs dkjashd kashdk asdkjahs dkahs d aisuhda sdkasdiuasdauis daiusd asiduha sidiuashd ajshdkhae fiuh",
        links: [
            {
                icon: "images/gsoc.png",
                url: "https://github.com/misterdev/webpack-reporter-plugin"
            }
        ],
        stats: [
            {
                label: 'Javascript',
                count: 500
            },
            {
                label: 'Firebase',
                count: 70
            }
        ]
    },
    {
        // icon
        label: "GSOC 15",
        icon: "images/appinventor.png",
        date: "25 dicc",
        // 
        description: "jh hk kj jh kjh kjh kj hk jh kjh kj hkj hk jh kj h kjh kj hkj hkj hkj h kjh",
        link: "?",
        stats: [
            {
                label: 'Ionic',
                count: 500
            },
            {
                label: 'Firebase',
                count: 70
            },
            {
                label: 'Elasticsearch',
                count: 70
            }
        ]
    },
    {
        // icon
        label: "DMDTEK",
        icon: "images/gsoc.png",
        date: "25 dicc",
        // 
        description: "...",
        link: "?",
        stats: [
            {}, {}
        ]
    },
    {
        // icon
        label: "DMDTEK2",
        icon: "https://scontent-mxp1-1.xx.fbcdn.net/v/t1.0-9/18694_911109745594187_7030459367885190809_n.png?_nc_cat=108&_nc_oc=AQnTdmWlA9fqHKK6xOsSIrBnNJOoEcXsf_mq0OcpGXZPmev-gYY5vkpmY7A7SefxW8w&_nc_ht=scontent-mxp1-1.xx&oh=67ece57b6a4d3cf2c662c30818e478f1&oe=5E268ADB",
        date: "25 dicc",
        // 
        description: "...",
        link: "?",
        stats: [
            {}, {}
        ]
    },
]

content.EDUCATION = [
    {
        // icon
        label: "CS Master",
        icon: "https://scontent-mxp1-1.xx.fbcdn.net/v/t1.0-9/18694_911109745594187_7030459367885190809_n.png?_nc_cat=108&_nc_oc=AQnTdmWlA9fqHKK6xOsSIrBnNJOoEcXsf_mq0OcpGXZPmev-gYY5vkpmY7A7SefxW8w&_nc_ht=scontent-mxp1-1.xx&oh=67ece57b6a4d3cf2c662c30818e478f1&oe=5E268ADB",
        date: "25 dicc",
        // 
        description: "...",
        link: "?",
        stats: [
            {}, {}
        ]
    },
    {
        // icon
        label: "CS Bachelor",
        icon: "https://scontent-mxp1-1.xx.fbcdn.net/v/t1.0-9/18694_911109745594187_7030459367885190809_n.png?_nc_cat=108&_nc_oc=AQnTdmWlA9fqHKK6xOsSIrBnNJOoEcXsf_mq0OcpGXZPmev-gYY5vkpmY7A7SefxW8w&_nc_ht=scontent-mxp1-1.xx&oh=67ece57b6a4d3cf2c662c30818e478f1&oe=5E268ADB",
        date: "25 dicc",
        // 
        description: "...",
        link: "?",
        stats: [
            {}, {}
        ]
    },
    {
        // icon
        label: "IT Degree",
        icon: "https://scontent-mxp1-1.xx.fbcdn.net/v/t1.0-9/18694_911109745594187_7030459367885190809_n.png?_nc_cat=108&_nc_oc=AQnTdmWlA9fqHKK6xOsSIrBnNJOoEcXsf_mq0OcpGXZPmev-gYY5vkpmY7A7SefxW8w&_nc_ht=scontent-mxp1-1.xx&oh=67ece57b6a4d3cf2c662c30818e478f1&oe=5E268ADB",
        date: "25 dicc",
        // 
        description: "...",
        link: "?",
        stats: [
            {}, {}
        ]
    },
]
// export let content = {
//     experience,
//     // education,
//     // projects,
//     // stuff,
//     // contacts,
// }