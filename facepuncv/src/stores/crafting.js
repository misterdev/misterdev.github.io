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
        label: "GSOC 19",
        icon: "https://developers.google.com/open-source/gsoc/resources/downloads/GSoC-icon-192.png",
        date: "25 dicc",
        // 
        description: "A cookie associated with a cross-site resource at https://google.com/ was set without the `SameSite` attribute. A future release of Chrome will only deliver cookies with cross-site requests if they are set with `SameSite=None` and `Secure",
        link: "?",
        skills: [
            {}, {}
        ]
    },
    {
        // icon
        label: "Lay Lab",
        icon: "https://developers.google.com/open-source/gsoc/resources/downloads/GSoC-icon-192.png",
        date: "25 dicc",
        // 
        description: "kajshdkjahsdkja aksjdhkajs dkjashd kashdk asdkjahs dkahs d aisuhda sdkasdiuasdauis daiusd asiduha sidiuashd ajshdkhae fiuh",
        link: "?",
        skills: [
            {}, {}
        ]
    },
    {
        // icon
        label: "GSOC 15",
        icon: "https://developers.google.com/open-source/gsoc/resources/downloads/GSoC-icon-192.png",
        date: "25 dicc",
        // 
        description: "jh hk kj jh kjh kjh kj hk jh kjh kj hkj hk jh kj h kjh kj hkj hkj hkj h kjh",
        link: "?",
        skills: [
            {}, {}
        ]
    },
    {
        // icon
        label: "DMDTEK",
        icon: "https://developers.google.com/open-source/gsoc/resources/downloads/GSoC-icon-192.png",
        date: "25 dicc",
        // 
        description: "...",
        link: "?",
        skills: [
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
        skills: [
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
        skills: [
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
        skills: [
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
        skills: [
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