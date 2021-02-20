import React, { useState } from 'react'

import { data } from '../../data'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import linkedIn from '../../assets/linkedIn.jpg'



const AboutMe = () => {
  const [story, setStory] = useState(false);

  const useStyles = makeStyles((theme) => ({
    root: {
      width: '250px',
      height: '250px',
      opacity: '0.75',
      border: "5px solid white",
      margin: '0 auto',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

  const classes = useStyles();

  const showStory = () => {
    !story ? setStory(true) : setStory(false)
  }

  const displayStory = () => {
    return (
      <>
        <p className="paragraph">I’m a graduate of Turing School of Software Design’s Front-End Software Engineering program which is a seven month immersive program focused on project-based learning. The 70-80 hrs a week I put into this program has enabled me to develop a solid foundation to kick-off my new career as a software engineer.</p>
        
        <p className="paragraph">To be honest, this program was the hardest thing I’ve ever done in my life. But that’s why I got into tech; for the challenge, the fulfilment, and sense of purpose I feel when I’m challenged to grow both professionally and personally. With the continual innovation in tech there is no shortage of things to learn, and ways that I can use my skills to make a positive impact. I was also attracted to a career in software engineering as I’ve always loved being able to exercise my creativity with hands-on work (tinkering with woodwork, sewing, painting). When I code, I start to lose track of time and become fully engaged in what I'm doing - it's a great feeling.</p>

        <p className="paragraph">Prior to Turing... I grew up in New Zealand with dual New Zealand/USA citizenship and I bought a one-way ticket to Boston in 2015. I wanted to explore the USA and make the most of my dual citizenship. I ended up working in Boston for 4 years as an Executive Assistant in the consulting industry. After moving to Denver, CO (where I currently reside) in late 2019, I decided to address the nagging feeling that a career as an Executive Assistant wasn’t the right path to continue on. This led me to a period of self-reflection, career exploration, and online coding courses. I quickly fell in love with coding and after speaking to people in the industry I decided to commit to a career change. In early 2020 and enrolled at Turing for its project based learning, and longer ‘bootcamp’ program.</p>
      </>
    )
  }

  return (
    <div className='about'>
      <h2 className='about__heading heading-secondary'>About</h2>
      <div className='section-about'>
        <div className="avatar-container">
          <Avatar className={classes.root} src={linkedIn} alt="LinkedIn profile photo" />
        </div>

        <div className="about__textbox">
              <p className="paragraph">I'm an empathetic software developer with a wealth of experience working both collaboratively and independently to deliver quality results. I love problem solving, variety in my work, and user-centric design.</p>
          <h3 className="heading-tertiary u-margin-bottom-small">Key Skills</h3>
              <ul className='about__skill-list paragraph'>
                <li className='pill'>React</li>
                <li className='pill'>React Hooks</li>
                <li className='pill'>Javascript ES5/ES6</li>
                <li className='pill'>API</li>
                <li className='pill'>Git/GitHub Workflow</li>
                <li className='pill'>Redux</li>
                <li className='pill'>HTML5</li>
                <li className='pill'>Agile</li>
                <li className='pill'>UI/UX</li>
                <li className='pill'>Responsive Web Design</li>
                <li className='pill'>CSS3</li>
                <li className='pill'>SASS/SCSS</li>
                <li className='pill'>Test Assisted Development</li>
              </ul>
        </div>
      </div>
    </div>
  )
}

export default AboutMe