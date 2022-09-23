import plantify from "../assets/img/Plantify.png";
import delicious from "../assets/img/Delicious.png";
import studentDevClub from "../assets/img/student-dev-club.png";
import thingsToDo from "../assets/img/ThingsToDo.png";

import design1 from "../assets/img/Social-Media-UI-Kit.png";
import design2 from "../assets/img/Checkout Page.png";
import design3 from "../assets/img/Sign Up Page.png";

export const projects = [
  {
    id: 1,
    title: "Plantify",
    description:
      `
      Plant delivery application allows user to login through Gmail.\n
      Website contains sections like customer's favorite and category ,where user can find plants of different categories like indoor, outdoor, air-purifying etc. 
      After sign-in user(admin) can add new plant with its image and description to the application .\n
       All the data is managed on firebase database.User can add multiple items into carts where it shows the total amount to be paid .
      `,
    imgUrl: plantify,
    github: "https://github.com/sonamgupta21/Plantify",
    live: "https://platify-plant-shop.netlify.app",
  },
  {
    id: 2,
    title: "Delicious",
    description:
      "This is an food recipe app created to help users search for food recipes with ingredients and instructions ,also a typical picture of what the food looks like. The project is based on Spoonacular’s API.",
    imgUrl: delicious,
    github: "https://github.com/sonamgupta21/Delicious",
    live: "https://delicious-food-recipe.netlify.app",
  },
  {
    id: 3,
    title: "Things To-Do",
    description:
      "An app that provide different sign-in and sign-up method to user (Gmail, GitHub ,Facebook).User authentication is done using Firebase Aouth. It allows user to add ,edit and delete tasks they want to work on ,and also mark tasks as complete without deleting.",
    imgUrl: thingsToDo,
    github: "https://github.com/sonamgupta21/Things-To-Do",
    live: "https://things-todo-list-app.netlify.app/",
  },
  {
    id: 4,
    title: "Student Developer Club",
    description:
      "Developed a website for DSC AKGEC which contains many section. Some of the sections are Home, Achievements, Events, Teams etc. Frontend implemented technologies like HTML ,CSS ,JavaScript, Bootstrap.",
    imgUrl: studentDevClub,
    github: "https://github.com/sonamgupta21/Student-Dveloper-Club",
    live: "https://sonamgupta21.github.io/Student-Dveloper-Club/",
  },
];
export const designs = [
  {
    id: 1,
    title: "Social Media App",
    imgUrl: design1,
    dribble: "https://dribbble.com/shots/19128643-Instagram-Redesign",
  },
  {
    id: 2,
    title: "Checkout Page",
    imgUrl: design2,
    dribble: "https://dribbble.com/shots/19128602-Checkout-Page",
  },
  {
    id: 3,
    title: "SignUp Page",
    imgUrl: design3,
    dribble: "https://dribbble.com/shots/19128578-Sign-Up-Page",
  },
];
export const skills = [
  "hmtl",
  "css",
  "javascript",
  "react",
  "react hooks",
  "redux",
  "es6",
  "firebase services",
  "material ui",
  "tailwind css",
  "styled components",
  "bootstrap",
  "rest api",
  "figma",
  "vs code",
  "c++",
  "git",
  "github",
  "context api"

];
