export const projects = [
  {
    title: 'Soccer Visual Analytics',
    description: "Using a custom trained YoloV5 model, I created a vision analytics tool to track player movements and actions on the field. This tool tracks infomations like team possesion, player speed, distance traveled, and more. Utlized techniques like image segmentation to detect player teams, perpective transformation to properly calculate distance and speed. Roboflow and kaggle were used to train the model.",
      image: '/images/1.png',
      tags: ['YoloV5', 'Python', 'Roboflow'],
    source: 'https://github.com/Bkfinley8/SoccerVisualAnalytics',
    id: 0,
  },
  {
    title: 'Quandary', 
    description:"Implemented a custom programming language built on top of Java. This language combines compoonents of functional programming languages and also features of imperative languages. In this project, I designed and constructed a context-free grammar for the language, and then implemented a parser that could parse and evaluate expressions written in the language. An interpreter was also implemented to run programs written in the language.",
    image: '/images/2.png',
    tags: ['Java', 'Parser', 'Interpreter'],
    source: 'https://github.com/Bkfinley8/Quandary',
    id: 1,
  },
  {
    title: 'Ignite',
    description: "A pilot project for a professional social connection platform for those in medical fields. This app allows users to connect with other professionals in their field, and also allows them to find jobs and internships. Built using FLutter for both mobile and web platforms. Firebase was used for authentication and database management.",
      image: '/images/3-2.png',
      tags: ['Flutter', 'Firebase'],
    source: 'https://google.com',
    id: 2,
  },
  {
    title: 'Parking Master',
    description: "A parking lot management system for owners to manage their parking lots and for customers to find parking. Built using HTML and CSS for the frontend, and PHP for the backend. Relational database on MySQL was used to store parking lot information and customer information.",
    image: '/images/4.png',
    tags: ['HTML', 'CSS', 'PHP', 'MySQL'],
    source: 'https://github.com/Bkfinley8/ParkingMaster',
    id: 3,
  },
  {
    title: 'Catan Leaderboard',
    description: "A web app that allows users to easily keep score in the board game Catan. This app allows users to join sessions on a mobile device and interact with the host keeping track of the game state. Electron, JavaScript, HTML and CSS were used to build the app.",
    image: '/images/5.png',
    tags: ['Electron', 'JavaScript', 'HTML', 'CSS'],
    source: 'https://github.com/Bkfinley8/CatanLeaderboard',
    id: 4,
  },
  {
    title: 'Moody Beats',
    description: "A mobile app built using Kotlin in Android Studio. This app connects with the users Spotify account via the Spotify API and plays songs based on their music preference and their \'mood\' (surrounding ambient light).",
    image: '/images/6-2.png',
    tags: ['Kotlin', 'Android Studio', 'Spotify API'],
    source: 'https://github.com/Bkfinley8/MoodyBeats',
    id: 5,
  },
];

export const TimeLineData = [
  { year: 2017, text: 'Started my journey', },
  { year: 2018, text: 'Worked as a freelance developer', },
  { year: 2019, text: 'Founded JavaScript Mastery', },
  { year: 2020, text: 'Shared my projects with the world', },
  { year: 2021, text: 'Started my own platform', },
];