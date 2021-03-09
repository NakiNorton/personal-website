import lienFlash from './assets/lien-new.png'
import readMe from './assets/new.png'
import portfolio from './assets/portfolio.png'


export const data = {
  name: 'Stephanie Norton',
  projects:[
    {
      id: 1,
      name: 'LienFlash',
      image: lienFlash,
      deployedUrl: 'https://lienflash.herokuapp.com/',
      githubUrl: 'https://github.com/lienflash/lienflash-fe',
      className: 'img',
      description: 'LienFlash is an app built for a team of lawyers experiencing frustration in dealing with the Lien filing process. The app allows a user to login as either a general user (client) or an admin.  Users can create a new job, track that job in the lien process, and submit the job info to an administrator when they are ready to submit a Notice of Intent, Lien, or Release of Lien. Users are sent SMS notifications to remind them of upcoming deadlines.',
      techStack: "React / React Router / JSON Web Token (JWT) / Fetch API / Redux / Material UI / Continuous Integration (Travis CI) / Jest / React Testing Library"
    },
    {
      id: 2,
      name: 'Portfolio',
      image: portfolio,
      className: 'img', 
      deployedUrl: 'https://www.stephanie-norton.com/',
      githubUrl: 'https://github.com/NakiNorton/personal-website',
      className: 'img', 
      description: 'My portfolio is a website built to showcase a few of my projects and make it easy for people to connect with me.', 
      techStack: 'React / react-scroll / EmailJS / Material UI / SASS/SCSS, Netlify' 
    },
    {
      id: 3,
      name: 'ReadMe',
      image: readMe,
      className: 'img', 
      deployedUrl: 'https://readme-deploy.herokuapp.com/',
      githubUrl: 'https://github.com/NakiNorton/ReadMe',
      description: "ReadMe is a book tracking app for avid readers using the New York Times API. Users can view top selling books by genre, search for books by author or title, save books to their reading list, click on a book to view the books blurb, and click a button to be redirected to Amazon where they can purchase the book.",
      techStack: 'React / React Router / Fetch API / Redux / CSS / Jest / React Testing Library'
    },
  ]
}

