import slide1 from "../imgs/slides/slide1.jpg";
import slide2 from "../imgs/slides/slide2.jpg";
import slide3 from "../imgs/slides/slide3.jpg";
import slide4 from "../imgs/slides/slide4.jpg";
import slide5 from "../imgs/slides/slide5.jpg";

import UNSWLogo from "../imgs/organizations/logo_UNSW.png";
import TeamKidsLogo from "../imgs/organizations/logo_TK.png";
import XMULogo from "../imgs/organizations/logo_XMU.png";

import envitedImg from "../imgs/projects/envited.png";
import responsiveImg from "../imgs/projects/responsive.png";
import tictactoeImg from "../imgs/projects/tictactoe.png";
import resonateImg from "../imgs/projects/resonate.png";
import slackrImg from "../imgs/projects/slackr.png";
import webscrapingImg from "../imgs/projects/webscraping.png";
import emailtriggerImg from "../imgs/projects/emailtrigger.png";
import smallyoutubeImg from "../imgs/projects/smallyoutube.png";

export const myEmail = "shawnhe94@gmail.com";

export const images = [slide1, slide2, slide3, slide4, slide5];

export const organizationInfo = {
  TeamKids: {
    organizationName: "TeamKids Australia",
    title: "Before & After School Educator",
    period: "2022 - Present",
    logo: TeamKidsLogo,
    videoID: "1OMbP3rX8Qw",
    bg: "#006cb8",
  },
  UNSW: {
    organizationName: "University of New South Wales",
    title: "Master of Information Technology (Artificial Intelligence)",
    period: "2020 - 2022",
    logo: UNSWLogo,
    videoID: "tVw4o6KDTHI",
    bg: "#ffe660",
  },

  XMU: {
    organizationName: "Xiamen University",
    title: "Bachelor of Arts (Japanese Language and Literature)",
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
    img: envitedImg,
    url: "https://shawnxsh.github.io/envited/",
  },
  EmailTrigger: {
    name: "Email Sending Trigger",
    languages: ["Python", "GCP"],
    description:
      "Simulate the registration process on a website by triggering email sending from server side.",
    img: emailtriggerImg,
    url: "https://github.com/shawnxsh/task_GCP",
  },
  ResponsiveHomepage: {
    name: "A Responsive Homepage",
    languages: ["ReactJS", "TailwindCSS"],
    description: "A responsive website using TailwindCSS.",
    img: responsiveImg,
    url: "https://shawnxsh.github.io/tailwindcss/",
  },
  SmallYouTube: {
    name: "Small YouTube",
    languages: ["ReactJS", "MUI", "YouTube Data API"],
    description: "A small YouTube website where you can search youtube videos.",
    img: smallyoutubeImg,
    url: "https://shawnxsh.github.io/smallyoutube/",
  },
  TicTacToe: {
    name: "Tic-Tac-Toe",
    languages: ["ReactJS", "CSSTransition"],
    description: "A little game.",
    img: tictactoeImg,
    url: "https://shawnxsh.github.io/tic-tac-toe/",
  },
  WebScraping: {
    name: "Web scraping on YouTube",
    languages: ["Python", "Selenium"],
    description:
      "Automate searching for videos on YouTube and retrieve the top comments.",
    img: webscrapingImg,
    url: "https://github.com/shawnxsh/task_webScraping",
  },
  Task_Resonate: {
    name: "Contact Searching",
    languages: ["ReactJS", "FramerMotion"],
    description:
      'A responsive "Contacts" application that allows the user to browse their contact.',
    img: resonateImg,
    url: "https://shawnxsh.github.io/task_resonate/",
  },
  BogusSlack: {
    name: "Messaging Tool Application ——— Slackr",
    languages: ["VanillaJS"],
    description:
      "A single page frontend for a bogus version of Slack in Vanilla JS.",
    img: slackrImg,
    url: "https://user-images.githubusercontent.com/60959735/185286691-9a541cb8-e173-465b-9603-350e220b3201.MP4",
  },
};
