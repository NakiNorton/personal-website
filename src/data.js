import lienFlashGif from './assets/lienflash.gif'
import edibleGif  from './assets/edible.gif'
import lienFlash from './assets/lienFlash-home.png'
import edible from './assets/edible-new.png'


export const data = {
  name: 'Stephanie Norton',
  projects:[
    {
      id: 1,
      name: 'LienFlash',
      gif: lienFlashGif,
      image: lienFlash,
      deployedUrl: 'https://lienflash.herokuapp.com/',
      githubUrl: 'https://github.com/lienflash/lienflash-fe',
      className: 'img lienflash-img',
      description: 'LienFlash is a client backed app built for a team of lawyers who experienced frustration in dealing with the Lien filing process. This app was developed with two front-end developers (myself and one other) and a back-end team.', 
      features: 
       'LienFlash is a Progressive Web App, it can be used in the browser or it can be installed on a desktop or a mobile device. The app allows a user to login as either a general user (client) or an admin.  Users can create a new job, track that job in the lien process, and submit the job info to an administrator when they are ready to submit a Notice of Intent, Lien, or Release of Lien. Users are sent SMS notifications to remind them of upcoming deadlines.',
      techStack: "React (w/ Hooks) / React Router / JSON Web Token (JWT) / Fetch API / Redux / Material UI / Continuous Integration (Travis CI) / Jest / React Testing Library"
    },
    {
      id: 2,
      name: 'Edible',
      gif: edibleGif,
      image: edible,
      deployedUrl: 'https://lienflash.herokuapp.com/',
      githubUrl: 'https://github.com/lienflash/lienflash-fe',
      className: 'img', 
      description: "Edible. is a web application designed for plant lovers who want to start foraging for wild plants. This app was a solo project developed with an open API, Trefle.", 
      features: "The user is able to filter the plants being displayed by 'edible part' categories; roots, seeds, flowers, leaves, fruits, and also search for plants by common name or scientific name. The user can save plants to their Saved Plants page, and also remove plants from this page.",
      techStack: ['React, React Router', 'Fetch API', 'Redux', 'SASS/SCSS', 'Jest', 'React Testing Library']
    },
    {
      id: 3,
      name: 'ReadMe',
      className: 'img', 
      deployedUrl: 'https://readme-deploy.herokuapp.com/',
      githubUrl: 'https://github.com/NakiNorton/ReadMe',
      description: "ReadMe is a book tracking app for avid readers using the New York Times API. This app was built in a team with three other front-end developers.",  
      features: "Users can view top selling books by genre, search for books by author or title, save books to their reading list, click on a book to view the books blurb, and click a button to be redirected to Amazon where they can purchase the book.",
      techStack: ['React, React Router', 'Fetch API', 'Redux', 'CSS', 'Jest', 'React Testing Library']
    },
  ]
}

