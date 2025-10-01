import { useEffect, useState } from 'react'
import styles from './App.module.css'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Avatar, Chip } from '@mui/material';
import StackIcon from "tech-stack-icons";
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from './components/LinkedInIcon';
import GitHubIcon from './components/GitHubIcon';
import FacebookIcon from './components/FacebookIcon';
import TwitterIcon from './components/TwitterIcon';
import InstagramIcon from './components/InstagramIcon';
import { experienceData, skillsData, projectsData, profileData } from './data';
import { animated } from '@react-spring/web';
import { useSlideInFromLeft, Trail } from './utils/animation';

// TODO:adam some skills icons are missing.
// TODO:adam some project icons are missing.
// TODO:adam add education
// TODO:adam add languages
// TODO:adam add personal images
// TODO:adam fix the npm install issue
// TODO:adam add README.md
// TODO:adam add fade in animations
// TODO:adam add a browser site icon
// TODO:adam add responsive design
function App() {
  const [profileDataOpen] = useState(true)
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight)

  // Header animations
  const aboutHeaderAnimation = useSlideInFromLeft({ delay: 100 });
  const experienceHeaderAnimation = useSlideInFromLeft({ delay: 100, threshold: 0.01 });
  const skillsHeaderAnimation = useSlideInFromLeft({ delay: 100 });
  const projectsHeaderAnimation = useSlideInFromLeft({ delay: 100 });
  const contactHeaderAnimation = useSlideInFromLeft({ delay: 100 });

  useEffect(() => {
    const handleResize = () => {
      const newViewportHeight = window.innerHeight
      setViewportHeight(newViewportHeight)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])


  return (
    <div className={styles.container}>
      <div
        className={styles.header}
        style={{ height: `${viewportHeight}px` }}
      >
        <div className={styles.headerOverlay} />
        <div className={styles.headerContent}>
          <Trail open={profileDataOpen}>
            {profileData.name.split('').map((c) => c === " " ? "\u00A0" : c).map((char, index) => (
              <h1 key={index}>{char}</h1>
            ))}
          </Trail>
          <hr />
          <Trail open={profileDataOpen}>
            {profileData.title.split('').map((c) => c === " " ? "\u00A0" : c).map((char, index) => (
              <p key={index}>{char}</p>
            ))}
          </Trail>
        </div>
      </div>

      <div className={styles.about} ref={aboutHeaderAnimation.ref}>
        <animated.div style={aboutHeaderAnimation.spring}>
          <h1>About me</h1>
        </animated.div>
        <p>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px', verticalAlign: 'middle' }}>
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          Israel
        </p>
        <p>
          Highly accomplished and results-driven <b>Fullstack Developer</b>, specializing in <b>React and React Native</b>, with over 10 years of experience specializing in
          building scalable, high-performance web and mobile applications. Proven expertise in leading end-to-end product
          development, mentoring junior teams, and optimizing application architecture for maximum efficiency and user
          experience. Seeking to leverage deep technical knowledge and leadership skills to drive innovation at a
          growth-focused organization.
        </p>
        <a
          className={styles.skillsLink}
          href='#skills'
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('skills')?.scrollIntoView({
              behavior: 'smooth'
            });
          }}
        >
          Check out my skills
        </a>
      </div>
      <div className={styles.experience} ref={experienceHeaderAnimation.ref}>
        <div className={styles.experienceContent}>
          <animated.div style={experienceHeaderAnimation.spring}>
            <h1>Work Experience</h1>
          </animated.div>
          <Timeline>
            {experienceData.map((item, index) => (
              <TimelineItem className={styles.timelineItem} key={index}>
                <TimelineSeparator>
                  <TimelineDot sx={{ backgroundColor: 'transparent', border: '1px solid lightgray', width: '50px', height: '50px' }}>
                    <item.logo />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <div className={styles.timelineContent}>
                    <h3 className={styles.timelineTitle}>{item.title}</h3>
                    <h4 className={styles.timelineCompany}>{item.company}</h4>
                    <p className={styles.timelineDate}>{item.date}</p>
                    <p className={styles.timelineDescription}>{item.description}</p>
                    <ul className={styles.timelineBulletPoints}>
                      {item.bulletPoints.map((point, pointIndex) => (
                        <li key={pointIndex}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </div>
      </div>
      <div id="skills" className={styles.skills} ref={skillsHeaderAnimation.ref}>
        <animated.div style={skillsHeaderAnimation.spring}>
          <h1>Core Technical Skills</h1>
        </animated.div>
        <ul className={styles.skillsListGroup}>
          {Object.entries(skillsData).map(([key, value], index) => (
            <li key={index} className={styles.skillsListGroupItem}>
              <h3>{key}</h3>
              <ul className={styles.skillsList}>
                {value.map((skill, skillIndex) => (
                  <li key={skillIndex} className={styles.skillItem}>
                    <Chip
                      avatar={skill.icon ? <StackIcon name={skill.icon} /> : <Avatar sx={{ bgcolor: "lightblue" }}>{skill.name.slice(0, 1).toUpperCase()}</Avatar>}
                      label={skill.name}
                      variant="outlined"
                    />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.projects} ref={projectsHeaderAnimation.ref}>
        <div className={styles.projectsContent}>
          <animated.div style={projectsHeaderAnimation.spring}>
            <h1>Projects</h1>
          </animated.div>
          <ul className={styles.projectsList}>
            {projectsData.map((project, index) => (
              <li
                key={index}
                className={styles.projectsListItem}
              >
                <a href={project.url} target="_blank">
                  <div className={styles.projectsListItemContent}>
                    <project.logo style={{ width: '120px', height: '120px' }} />
                    <h4>{project.name}</h4>
                    <p>{project.description}</p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.contact} ref={contactHeaderAnimation.ref}>
        <div className={styles.contactContent}>
          <animated.div style={contactHeaderAnimation.spring}>
            <h1>Let's build together</h1>
          </animated.div>
          <div className={styles.contactItem}>
            <EmailIcon />
            <p>adambat1899@gmail.com</p>
          </div>
          <div className={styles.contactItem}>
            <PhoneIcon />
            <p>+972536247130</p>
          </div>
          <div className={styles.footer}>
            <p>© 2025 Adam Batwash. All rights reserved.</p>
            <div className={styles.socialMedia}>
              <a href="https://www.linkedin.com/in/adam-batwash-130386a0" target="_blank">
                <LinkedInIcon style={{ width: '42px', height: '42px', fill: 'currentColor' }} />
              </a>
              <a href="https://github.com/batuash" target="_blank">
                <GitHubIcon style={{ width: '42px', height: '42px', fill: 'currentColor' }} />
              </a>
              <a href="https://www.facebook.com/adam.batwash" target="_blank">
                <FacebookIcon style={{ width: '42px', height: '42px', fill: 'currentColor' }} />
              </a>
              <a href="https://x.com/batuash?s=21" target="_blank">
                <TwitterIcon style={{ width: '42px', height: '42px', fill: 'currentColor' }} />
              </a>
              <a href="https://www.instagram.com/adambatwash?igsh=dDY2MHYwY3djd2Uy&utm_source=qr" target="_blank">
                <InstagramIcon style={{ width: '42px', height: '42px', fill: 'currentColor' }} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
