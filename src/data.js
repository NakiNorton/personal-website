import lienFlashGif from './assets/lienflash.gif'
import readmeGif  from './assets/readme.gif'
import edibleGif  from './assets/edible.gif'
import rancidTomatillosGif  from './assets/rancid-short.gif'
import lienFlash from './assets/lienFlash-home.png'
import readme from './assets/readMe-new.png'
import edible from './assets/edible-new.png'
import rancidTomatillos from './assets/rancidTomatillos-photo.png'

export const data = {
  name: 'Stephanie Norton',
  email: 's.norton.dev@gmail.com',
  aboutMeSection0: "Software Engineer, avid traveller, hiker, [very] amateur snowboarder." ,
  projects:[
    {
      id: 1,
      name: 'LienFlash',
      gif: lienFlashGif,
      image: lienFlash,
      className: 'img lienflash-img',
      description: 'LienFlash is a client backed app built for a team of lawyers who have experienced frustration in dealing with the Lien filing process. This app was developed with two front-end developers (myself and one other) and a back-end team.', 
      features: 
       'LienFlash is a Progressive Web App, it can be used in the browser or it can be installed on a desktop or a mobile device. The app allows a user to login as either a general user (client) or an admin.  Users can create a new job, track that job in the lien process, and submit the job info to an administrator when they are ready to submit a Notice of Intent, Lien, or Release of Lien. Users are sent SMS notifications to remind them of upcoming deadlines.',
      techStack: ['React (w/ Hooks)', 'React Router', 'JSON Web Token (JWT)', 'Fetch API', 'PWA', 'Redux', 'SASS/SCSS', 'Material UI', 'Continuous Integration(Travis CI)', 'Heroku', 'Jest', 'React Testing Library', 'Redux mock store']
    },
    {
      id: 2,
      name: 'Edible',
      gif: edibleGif,
      image: edible,
      className: 'img', 
      description: "Edible. is a web application designed for plant lovers who want to start foraging for wild plants. This app was a solo project developed with an open API, Trefle.", 
      features: "The user is able to filter the plants being displayed by 'edible part' categories; roots, seeds, flowers, leaves, fruits, and also search for plants by common name or scientific name. The user can save plants to their Saved Plants page, and also remove plants from this page.",
      techStack: ['React', 'React Router', 'Fetch API', 'Redux', 'SASS/SCSS', 'Jest', 'React Testing Library', 'Redux mock store']
    },
    {
      id: 3,
      name: 'ReadMe',
      gif: readmeGif,
      image: readme,
      className: 'img', 
      description: "ReadMe is a book tracking app for avid readers using the New York Times API. This app was built in a team with three other front-end developers.",  
      features: "Users can view top selling books by genre, search for books by author or title, save books to their reading list, click on a book to view the books blurb, and click a button to be redirected to Amazon where they can purchase the book.",
      techStack: ['React', 'React Router', 'Fetch API', 'Redux', 'CSS', 'Heroku', 'Jest', 'React Testing Library', 'Redux mock store']
    },
    // {
    //   id: 5,
    //   name: 'Rancid Tomatillos',
    //   gif: rancidTomatillosGif,
    //   image: rancidTomatillos,
    //   className: 'img',
    //   description: "Rancid Tomatillos is a movie rating app built for a pair project.", 
    //   features: "A user can login and rate movies, comment on movies, and favorite/unfavorite movies. If a user doesn't have a login, they can view movie details but they aren't able to share their own ratings or comments, and they do not have favoriting capabilities.",
    //   techStack: 'React, React Router, Fetch API, CSS, Unit and Integration testing with: Jest, React Testing Library'
    // }
  ]
}

