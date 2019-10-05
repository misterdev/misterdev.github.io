import { writable } from 'svelte/store'

export let content = {}
export const navigation = writable({cat: categories.EXP, item: 0})

export const categories = {
    EXP: 'Experience',
    EDU: 'Education',
    PROJ: 'Projects',
    STUFF: 'Stuff',
    CONTACT: 'Contacts',
}

content.EXPERIENCE = [
    {
        // icon
        name: "GSOC 19",
        icon: "...",
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
        name: "Lay Lab",
        icon: "...",
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
        name: "GSOC 15",
        icon: "...",
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
        name: "DMDTEK",
        icon: "...",
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