import slide1 from "../imgs/slides/slide1.jpg";
import slide2 from "../imgs/slides/slide2.jpg";
import slide3 from "../imgs/slides/slide3.jpg";
import slide4 from "../imgs/slides/slide4.jpg";
import slide5 from "../imgs/slides/slide5.jpg";

import UNSWLogo from "../imgs/organizations/logo_UNSW.png";
import TeamKidsLogo from "../imgs/organizations/logo_TK.png";
import XMULogo from "../imgs/organizations/logo_XMU.png";

export const images = {
  slide1,
  slide2,
  slide3,
  slide4,
  slide5,
};

export const organizationInfo = {
  UNSW: {
    organizationName: "University of New South Wales",
    title: "Master of Information Technology (Artificial Intelligence)",
    period: "2020 - 2022",
    logo: UNSWLogo,
    videoID: "tVw4o6KDTHI",
    bg: "#ffe660",
  },
  TeamKids: {
    organizationName: "TeamKids Australia",
    title: "Before & After School Educator",
    period: "2022 - Present",
    logo: TeamKidsLogo,
    videoID: "1OMbP3rX8Qw",
    bg: "#006cb8",
  },
  XMU: {
    organizationName: "Xiamen University",
    title: "Bachelor of Arts (Japanese language and literature)",
    period: "2015 - 2019",
    logo: XMULogo,
    videoID: "BwxwWxY7CuY",
    bg: "#f95839",
  },
};

export const projectsData = {
  Task_Envited: {
    name: "Event Creating Website",
    languages: ["ReactJS", "FramerMotion", "TailwindCSS"],
    description: "The initial front end for an event social media application",
    img: "...",
  },
  EmailTrigger: {
    name: "Email Sending Trigger",
    languages: ["Python", "GCP"],
    description:
      "Simulate the registration process on a website by triggering email sending from server side.",
    img: "...",
  },
  ResponsiveHomepage: {
    name: "A Responsive Homepage",
    languages: ["ReactJS", "TailwindCSS"],
    description: "A responsive website using TailwindCSS.",
    img: "...",
  },
  SmallYouTube: {
    name: "Small YouTube",
    languages: ["ReactJS", "MUI", "YouTube Data API"],
    description: "A small YouTube website where you can search youtube videos.",
    img: "...",
  },
  TicTacToe: {
    name: "Tic-Tac-Toe",
    languages: ["ReactJS", "CSSTransition"],
    description: "A little game.",
    img: "...",
  },
  WebScraping: {
    name: "Web scraping on YouTube",
    languages: ["Python", "Selenium"],
    description:
      "Automate searching for videos on YouTube and retrieve the top comments.",
    img: "...",
  },
  Task_Resonate: {
    name: "Contact Searching",
    languages: ["ReactJS", "FramerMotion"],
    description:
      'A responsive "Contacts" application that allows the user to browse their contact.',
    img: "...",
  },
  BogusSlack: {
    name: "Messaging Tool Application ——— Slackr",
    languages: ["VanillaJS"],
    description:
      "A single page frontend for a bogus version of Slack in Vanilla JS.",
    img: "...",
  },
};
