import lienFlashImage from './assets/lienflash.gif'
import readme from './assets/readme.gif'
import edible from './assets/edible.gif'
import overlookhotel from './assets/overlookhotel.gif'
import rancidTomatillos from './assets/rancid-short.gif'
import photoDallas from './assets/photoDallas.jpg'
import photoHiking from './assets/photoHiking.jpg'

export const data = {
  name: 'Stephanie Norton',
  email: 'steph.jane.norton@gmail.com',
  aboutMeSection0: "Software Engineer, avid traveller, hiker, amateur snowboarder (learning at 29 is hard!)." ,
  aboutMeSection1: "I’m a graduate of Turing School of Software Design’s Front-End Software Engineering program which is a seven month immersive program focused on project-based learning. Requiring a commitment of 70-80hrs a week to learn new tools, languages, frameworks, libraries, and concepts through instructor-led lessons and/or projects, made this program immensely challenging.",
  aboutMeSection2: "To be honest, it was the hardest thing I’ve ever done in my life. But that’s why I got into tech; for the challenge, the fulfilment, and sense of purpose I feel when I’m challenged to grow both professionally and  personally. With the continual innovation in tech there is no shortage of things to learn, and ways that I can use my skills to make a positive impact. I was also attracted to a career in software engineering as I’ve always loved being able to exercise my creativity with hands-on work (tinkering with woodwork, sewing, painting).",
  aboutMeSection3: "Prior to Turing... I grew up in New Zealand with dual New Zealand/USA citizenship and I bought a one-way ticket to Boston in 2015. I wanted to explore the USA and make the most of my dual citizenship. I ended up working in Boston for 4 years as an Executive Assistant in the consulting industry. After moving to Denver, CO (where I currently reside) in late 2019, I decided to address the nagging feeling that a career as an Executive Assistant wasn’t the right path to continue on. This led me to a period of exploration and online beginner coding courses. I quickly fell in love with coding and after speaking to people in the industry I decided to commit to a career change in early 2020 and enrolled at Turing for its project based learning, and longer ‘bootcamp’ program.",
  photos: [photoDallas, photoHiking],
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

