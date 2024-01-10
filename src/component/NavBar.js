import { useState } from 'react'
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'
 


const Navbar = () => {

  const [isActive, setIsActive] = useState(false) 

  const toggleActiveClass = () => { 
    setIsActive(!isActive)
  }

  const removeActive = () => {
    setIsActive(false)
  }
  return (
    <div className="App">
    <header className="App-header">

    
      <nav className={`${styles.navbar}`}>
          <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
            <li onClick={removeActive}>
              <Link to='/' className={`${styles.navLink}`}>Home</Link>
            </li>
            <li onClick={removeActive}>
              <Link to='aboutme' className={`${styles.navLink}`}>About Me</Link>
            </li>
            <li onClick={removeActive}>
              <Link to='projects' className={`${styles.navLink}`}>Projects</Link>
            </li>
            {/* <li onClick={removeActive}>
              <Link to='links' className={`${styles.navLink}`}>Links</Link>
            </li> */}
          </ul>
          <div className='icon-container'>
            <div>
              <SocialIcon  url="https://www.linkedin.com/in/roniel-overton/" />
              <SocialIcon  url="https://github.com/RonielOverton" />
              <SocialIcon  url="mailto:ronielo86@gmail.com" />
            </div>  
          </div>
        


        <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`}  onClick={toggleActiveClass}>
          <span className={`${styles.bar}`}></span>
          <span className={`${styles.bar}`}></span>
          <span className={`${styles.bar}`}></span>
        </div>
      </nav>
   

    </header>
  </div>
  )
}

export default Navbar