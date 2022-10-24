const profile = {
    name: "유영한",
    email: "gentry_@naver.com",
    tel: "010-9201-1597",
};

export { profile };

const portfolio = [
    {
        id: 1,
        title: "IMDB",
        type: "Standard Web",
        font: ["Noto Sans KR"],
        color: ["#f5c518", "#c8c8c8", "#5fafff"],
        skill: ["HTML5", "CSS3", "jquery"],
        date: ["2022.05.01 ~ 2022.05.01"],
        mock: process.env.PUBLIC_URL + "/mockup.png",
        cell: process.env.PUBLIC_URL + "/cellphone.png",
        link: "https://youngentry.github.io/imdb/",
    },
    {
        id: 2,
        title: "2K",
        type: "Responsive Web",
        font: ["Noto Sans KR", "Oswald"],
        color: ["#e61f27", "#111", "#fff"],
        skill: ["HTML5", "CSS3", "jquery"],
        srcRes: process.env.PUBLIC_URL + "/2k_res.png",
        date: ["2022.05.01 ~ 2022.05.01"],
        mock: process.env.PUBLIC_URL + "/mockup.png",
        cell: process.env.PUBLIC_URL + "/cellphone.png",
        link: "http://youngentry.github.io/2k-web-coding-220718",
    },
    {
        id: 3,
        title: "OPS",
        type: "Standard Web",
        font: ["Noto Sans KR", "Gowun Batang"],
        color: ["#000", "#585858", "#fff"],
        skill: ["HTML5", "CSS3", "JavaScript - jquery"],
        srcRes: process.env.PUBLIC_URL + "/ops_res.png",
        date: ["2022.05.01 ~ 2022.05.01"],
        mock: process.env.PUBLIC_URL + "/mockup.png",
        cell: process.env.PUBLIC_URL + "/cellphone.png",
        link: "http://youngentry.github.io/ops",
    },
    {
        id: 4,
        title: "BESPOKE",
        type: "Responsive Web",
        font: ["Noto Sans KR"],
        color: ["#d97e59", "#000", "#fff"],
        skill: ["HTML5", "CSS3", "JavaScript - jquery"],
        date: ["2022.05.01 ~ 2022.05.01"],
        mock: process.env.PUBLIC_URL + "/mockup.png",
        cell: process.env.PUBLIC_URL + "/cellphone.png",
        link: "http://youngentry.github.io/bespoke",
    },
    // {
    //     id: 5,
    //     title: "hd05",
    //     type: "Standard Web",
    //     font: ["Noto Sans KR", "Gowun Batang"],
    // color: ["#2c4c3f", "#000", "#fff"],
    //     skill: ["HTML5", "CSS3", "JavaScript - jquery",],
    //     date: ["2022.05.01 ~ 2022.05.01"],
    //     mock: process.env.PUBLIC_URL + "/mockup.png",
    //     cell: process.env.PUBLIC_URL + "/cellphone.png",
    //     link: "http://youngentry.github.io/",
    // },
];

export { portfolio };
