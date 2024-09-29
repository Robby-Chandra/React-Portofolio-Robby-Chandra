export const HERO_CONTENT = "Mobile and web developer with a passion for creating intuitive, user-friendly applications. Currently a student at Bina Nusantara University, I'm eager to apply my skills in various programming languages and frameworks to real-world projects. Let's build something amazing together!";

export const ABOUT_ME_TEXT = `As a dedicated Mobile Application and Technology student at Bina Nusantara University, I've cultivated a diverse skill set in both mobile and web development. My journey in programming has led me to master languages such as C, Java, Python, Dart, HTML5, CSS, JavaScript, Kotlin, Swift, and MySQL. I've also gained hands-on experience with popular frameworks and libraries including Flutter, React JS, Tailwind CSS, and Bootstrap.

My approach to learning is project-driven, allowing me to apply theoretical knowledge to practical scenarios. This has not only deepened my understanding of various technologies but also honed my problem-solving skills. Currently, I'm actively seeking enrichment opportunities or job positions that align with my technical abilities and passion for development. I'm excited about the prospect of contributing my skills to innovative projects and continuing to grow as a developer in a professional setting.`

import Cerificate from "../assets/certi-intuitiva.png"
import binus from "../assets/Binus.png"
import yakob from "../assets/yakob.png"

export const EXP = [
    {
        year: "3 Februari 2024 - 30 Maret 2024",
        role: "Participant",
        company: "UI/UX Competition",
        desc: 'I participated in an inspiring UI/UX Design competition titled "INTUITIVA: Embrace Intuitive Digital Interfaces Design," which focused on creating user-friendly and intuitive digital interfaces using Figma. This challenging event provided me with the opportunity to apply cutting-edge UI/UX design principles, develop creative solutions to enhance user experience, and create interactive prototypes. Throughout the competition, I honed my skills in designing effective and intuitive interfaces, presenting design concepts to judges, and utilizing Figma to bring my ideas to life. This experience significantly enriched my expertise in UI/UX design and sharpened my ability to craft intuitive and impactful digital interfaces.',
        image: Cerificate,
        skills: [],
        skills2: [],
    },

    {
        year: "2022 - Present",
        role: "Student",
        company: "Bina Nusantara University",
        desc: "My journey in technology truly took off when I enrolled in the Mobile Application and Technology program at Bina Nusantara University. This pivotal period in my education exposed me to a wide array of programming languages, significantly expanding my technical toolkit. Throughout my time at Binus, I immersed myself in numerous projects, developing a diverse portfolio that includes mobile applications, websites, and various other digital solutions. This hands-on experience not only solidified my theoretical knowledge but also honed my practical skills, preparing me for the dynamic world of software development.",
        image: binus,
        skills: ["C", "Java", "Python", "MySQL", "Figma", "Dart", "Flutter" ],
        skills2: ["HTML5", "CSS", "JavaScript", "Kotlin", "Swift", "Tailwind CSS", "React JS"],
    },

    {
        year: "2019 - 2021",
        role: "Student",
        company: "Santo Yakobus High School",
        desc: "I pursued the Natural Sciences track, which laid a strong foundation for my future in technology. It was here that I first dipped my toes into the world of programming, learning HTML and the basics of Dart. My curiosity led me to explore Arduino, where I engaged in small projects that ignited my passion for hands-on tech development. These early experiences were crucial in shaping my interest in mobile and web development, setting the stage for my current pursuits in university.",
        image: yakob,
        skills: ["HTML5", "Dart", "C"],
        skills2: []
    },
];

import willify from "../assets/Project-Img/willify.png"
import VirtualFR from "../assets/Project-Img/VirtualFittingRoom.png"
import PurePlate from "../assets/Project-Img/PurePlate.png"
import BonkGarage from "../assets/Project-Img/BonkGarage.png"
import DokDok from "../assets/Project-Img/DokDok.png"
import Portofolio1 from "../assets/Project-Img/Portofolio-Tailwind.png"
import Portofolio2 from "../assets/Project-Img/Portofolio-React.png"
import BonkToys from "../assets/Project-Img/BonkToys.png"
import { image } from "framer-motion/client";

export const PROJECT = [
    {
        title: "Willify",
        image: willify,
        description: "Willify is a Music Player website project that I developed using HTML, CSS, and JavaScript. This website has functionality similar to popular music platforms like Spotify, SoundCloud etc.",
        language: ["HTML", "CSS", "JavaScript"],
    },

    {
        title: "Virtual Fitting Room",
        image: VirtualFR,
        description: "Virtual Fitting Room is an application I developed using Unity with Augmented Reality features. This app allows users to try on clothes from offline stores online, eliminating the need to visit physical stores.",
        language: ["C#", "Unity"],
    },

    {
        title: "Pure Plate",
        image: PurePlate,
        description: "A Marketplace application for healthy food. Developed using Kotlin with functionality similar to Shopee, Tokopedia, etc.",
        language: ["Kotlin"]
    },

    {
        title: "Bonk Garage",
        image: BonkGarage,
        description: "A Marketplace application for die-cast toys like Hot Wheels, Mini GT, etc. Developed using Kotlin.",
        language: ["Kotlin"]
    },

    {
        title: "DokDok",
        image: DokDok,
        description: "HealthEase is an innovative health care application inspired by platforms like Halodoc, reimagined with a fresh user interface and enhanced features. Designed using Figma, this app aims to provide users with a seamless and comprehensive digital healthcare experience.",
        language: ["Figma"]
    },

    {
        title: "Portofolio Website",
        image: Portofolio1,
        description: "This project is a personal portfolio website designed and developed to showcase my skills, projects, and professional experience in web development. The website serves as a digital resume and a demonstration of my capabilities in front-end technologies.",
        language: ["HTML5", "Tailwind CSS", "JavaScript"]
    },

    {
        title: "Portofolio Website",
        image: Portofolio2,
        description: "This project is a modern, dynamic personal portfolio website developed using React.js and styled with Tailwind CSS. It serves as a showcase of my front-end development skills, particularly in React ecosystem, and presents my projects and professional experience in an interactive and visually appealing manner.",
        language: ["React JS", "Tailwind CSS"]
    },

    {
        title: "Bonk Toys",
        image: BonkToys,
        description: "Bonk Toys is a dynamic mobile application designed for action figure enthusiasts, collectors, and sellers. Built with Kotlin, this user-friendly platform creates a vibrant community where users can buy, sell, and trade action figures with ease.",
        language: ["Flutter"]
    }
];

export const CONTACT = {
    address: "Jl. Mangga A No.42, Lagoa, Koja, Jakarta Utara",
    phone: "+62 81211580275",
    email: "rochan.130904@gmail.com",
}