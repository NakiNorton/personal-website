import lienFlashImage from './assets/lienflash.gif'
import readme from './assets/readme.gif'
import edible from './assets/edible.gif'
import overlookhotel from './assets/overlookhotel.gif'
import rancidTomatillos from './assets/rancidTomatillos.gif'

export const data = {
  name: 'Stephanie Norton',
  email: 'steph.jane.norton@gmail.com',
  aboutMe: '',
  photos: [],
  projects:[
    {
      id: 1,
      name: 'LienFlash',
      image: lienFlashImage,
      className: 'img lienflash-img',
      description: 'We have created an app that allows a user to create a job, track that job in the lien process, and submit the job info to an administrator when they are ready to submit a Notice of Intent, Lien, or Release of Lien.'
    },
    {
      id: 2,
      name: 'Edible',
      image: edible,
      className: 'img', 
      description: "Edible. is a web application designed for plant lovers who want to start foraging for wild plants. The user is able to filter the plants being displayed by 'edible part' categories; roots, seeds, flowers, leaves, fruits, and also search for plants by common name or scientific name. The user can save plants to their Saved Plants page, and also remove plants from this page. This app was a solo project developed with an open API, Trefle."
    },
    {
      id: 3,
      name: 'ReadMe',
      image: readme,
      className: 'img', 
      description: "ReadMe is a web application we built that connects users to various New York Times Best Sellers Lists. For our group project during Module 3 of the Turing School of Software and Design, we were asked to built a web application that incorporates technology unfamiliar to us. Our group integrated Redux as our 'stretch tech,' to aid us in managing global state."
    },
    {
      id: 5,
      name: 'Rancid Tomatillos',
      image: rancidTomatillos,
      className: 'img',
      description: "Rancid Tomatillos is a movie rating app where a user can login and rate movies, comment on movies, and favorite/unfavorite movies.If a user doesn't have a login, they can view movie details but they aren't able to share their own ratings or comments, and they do not have favoriting capabilities."
    },
    {
      id: 4,
      name: 'Overlook Hotel',
      image: overlookhotel,
      className: 'img',
      description: "Overlook is a hotel management tool for hotel customers and staff to manage room bookings. This was the final solo project in Mod 2 at Turing School of Software and Design. When logging in as a guest, the guest's name, bookings, and their total amount spent at the hotel are displayed. A guest can view all available rooms that meet their search criteria for date and room type, and make a new reservation. When logging in as a manager, the total amount of rooms available, total revenue for today's date, and percentage of occupied rooms for today will be displayed. A manager can search for a guest by name and view all of the guests bookings."
    },
  ]
}

