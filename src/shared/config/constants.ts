import classNames from "classnames";
import { ProjectTypes } from "./types";

// whenever wee need to change default className value we will use this
export const cx = classNames;

// nav data
export const navData = [ "About", "Experience", "Works", "Contact" ]

// project data
export const projects : ProjectTypes[] = [
    {
        title : "Portfolio website",
        description : "A comprehensive showcase of a full-stack developer's skills, projects, and expertise in web development, backed by a strong portfolio.",
        tech : [ "Next js 13", "Tailwind CSS", "Express js" ],
        code : 'https://github.com/1nhale/self-portfolio',
        live : 'https://1nhale.in',
        thumnail : "https://demo2.1nhale.in/public_assets/images/projects/portfolio.png",
        featured : true
    },
    {
        title : "Bobby's Indian Restaurant",
        description : "Bobby's is a Indian Restaurant based in spain. I developed their branding website and a comprehensive billing software using MERN stack ",
        tech : [ "PHP", "NodeJS", "ReactJS", "ExpressJS", "Bootstrap" ],
        live : 'https://www.bobbysindianrestaurant.es/',
        thumnail : "https://demo2.1nhale.in/public_assets/images/projects/bobby.png",
    },
    {
        title : "Butterfly Learnings",
        description : "'Butterfly Learning' is a cluster of destinations that lead to the development and behavioral solutions for our children. I developed its branding website and app using “HTML, CSS, jQuery” and for Backend “Django, Python, PostgreSQL, Agora.io, webRtc”",
        tech : [ "HTML", "CSS", "Reactjs", "Django", "SQL" ],
        live : 'https://butterflylearnings.com',
        thumnail : "https://demo2.1nhale.in/public_assets/images/projects/butterfly.png",
        featured : true
    },

    {
        title : "Amazon clone",
        description : "I clone World Largest E-commerce website Amazon using react js",
        tech : [ "React js", "Redux" ],
        code : 'https://github.com/raihanhosen011/amazon-nw',
        live : 'https://amazon-nw.vercel.app/',
        thumnail : "https://demo2.1nhale.in/public_assets/images/projects/amazon.png"
    },

    {
        title : "WineVault LLC",
        description : "WineVault LLC Provides storage and delivery for Illinois licensed wine, beer and spirit distributors along with other industry related products.",
        tech : [ "PHP", "MySQL", "MERN" ],
        live : 'https://www.winevaultllc.com/',
        thumnail : "https://demo2.1nhale.in/public_assets/images/projects/winevault.png"
    }
]