import type { Project } from "../types";

import imgTchobanov from "../assets/projects/Project-Tchobanov.jpg";
import imgBgTchobanov from "../assets/projects/Project-bg-Tchobanov.jpg";
import imgBrandTheCity from "../assets/projects/Project-BTC.jpg";
import imgMirOffice from "../assets/projects/Project-MIR.jpg";
import imgNineElephants from "../assets/projects/Project-9Slona.jpg";
import imgBgNineElephants from "../assets/projects/Project-bg-9Slona.jpg";
import imgUrbanStorytelling from "../assets/projects/Project-USS.jpg";
import imgBgUrbanStorytelling from "../assets/projects/Project-bg-USS.jpg";
import imgNaepPlovdiv from "../assets/projects/Project-FestivalPlovdiv2025.png";
import imgSTB from "../assets/projects/Project-STB.jpg";
import imgResm from "../assets/projects/Project-RESM.jpg";
import imgBgResm from "../assets/projects/Project-bg-RESM.jpg";

export const projects: Project[] = [
  {
    id: "maestro-dian",
    title: "Maestro Dian Tchobanov",
    description: "Portfolio of Plovdiv's State Opera Director",
    bgImage: imgBgTchobanov,
    projectImage: imgTchobanov,
  },
  {
    id: "brand-the-city",
    title: "Brand the City",
    description: "Festival Identity and web implementation",
    bgImage: "",
    projectImage: imgBrandTheCity,
    link: "https://brandthecity.eu/",
  },
  {
    id: "mir-office-building",
    title: "Mir Office Building",
    description: "Website design and implementation",
    bgImage: "",
    projectImage: imgMirOffice,
    link: "https://mirbuilding.bg",
  },
  {
    id: "nine-elephants",
    title: "Nine Elephants: Festival for Art in Urban Spaces",
    description: "Festival identity and web implementation",
    bgImage: imgBgNineElephants,
    projectImage: imgNineElephants,
  },
  {
    id: "urban-storytelling-school",
    title: "Urban Storytelling School",
    description: "Identity and web implementation",
    bgImage: imgBgUrbanStorytelling,
    projectImage: imgUrbanStorytelling,
  },
  {
    id: "naep-plovdiv",
    title: "National Autumn Exhibitions Plovdiv 2025",
    description: "Festival identity",
    bgImage: "",
    projectImage: imgNaepPlovdiv,
  },
  {
    id: "lyuben-stanev",
    title: "Lyuben Stanev. Literary and film heritage",
    description: "Digital exhibition design and implementation",
    bgImage: "",
    projectImage: imgSTB,
    link: "https://books.steptobulgaria.com/exhibition/",
  },
  {
    id: "resm",
    title: "RESM: Reshaping the Future of Sport",
    description: "Identity",
    bgImage: imgBgResm,
    projectImage: imgResm,
  },
];
