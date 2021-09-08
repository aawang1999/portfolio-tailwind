import { v4 as uuidv4 } from 'uuid'

export const projectData = [
  {
    id: uuidv4(),
    title: "Realtime Chat App",
    stack: "Node.js, React, Socket.io",
    desc: "A basic functional chat application",
    github: "https://github.com/aawang1999/chat-app-react",
    image: "./images/chat-app.jpg"
  },
  {
    id: uuidv4(),
    title: "React Task Tracker",
    stack: "JSON Server, React",
    desc: "A simple React web app for task management with a mock JSON server backend",
    github: "https://github.com/aawang1999/task-tracker-react",
    image: "./images/task.jpg"
  },
  {
    id: uuidv4(),
    title: "Angular Task Tracker",
    stack: "Angular, JSON Server",
    desc: "A simple Angular web app for task management with a mock JSON server backend",
    github: "https://github.com/aawang1999/task-tracker-angular",
    image: "./images/task-angular.jpg"
  },
  {
    id: uuidv4(),
    title: "Restaurant List",
    stack: "Express.js, Handlebars.js, MongoDB",
    desc: "A web app that allows you to manage restaurant entries",
    github: "https://github.com/aawang1999/restaurant-list-router",
    image: "./images/restaurant.jpg"
  },
  {
    id: uuidv4(),
    title: "Ray's Classroom",
    stack: "N/A",
    desc: "A website to complement my YouTube channel on U.S. civics",
    github: "https://github.com/aawang1999/rays-classroom",
    image: "./images/rays.jpg"
  },
  {
    id: uuidv4(),
    title: "Expense Tracker",
    stack: "Express.js, Handlebars.js, MongoDB, Node.js",
    desc: "A web app that helps you manage your expenses",
    github: "https://github.com/aawang1999/expense-tracker",
    image: "./images/expense.jpg"
  },
  {
    id: uuidv4(),
    title: "URL Shortener",
    stack: "Express.js, Handlebars.js, Node.js",
    desc: "A web app that converts URLs into randomly-generated shortened URLs",
    github: "https://github.com/aawang1999/url-shortener",
    image: "./images/url.jpg"
  },
  {
    id: uuidv4(),
    title: "Login Portal",
    stack: "Express.js, MongoDB, Node.js",
    desc: "A web app that simulates a login portal by managing a list of usernames and passwords",
    github: "https://github.com/aawang1999/account-login",
    image: "./images/account.jpg"
  }
]