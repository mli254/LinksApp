import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faCode, faFilePdf, faLink, faLocationDot, faMoon } from '@fortawesome/free-solid-svg-icons'
import {faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import profile_img from './assets/profile.jpg'
import './App.css'

const links = [
  {title: "Resume", id: 1, icon: <FontAwesomeIcon icon={faFilePdf} size="xl"/>, link: "https://bit.ly/madison-li-resume"},
  {title: "Portfolio", id: 2, icon: <FontAwesomeIcon icon={faCode} size="xl"/>, link: "https://bit.ly/madison-li-portfolio"},
  {title: "Github", id: 3, icon: <FontAwesomeIcon icon={faGithub} size="xl"/>, link: "https://github.com/mli254"},
  {title: "Linkedin", id: 4, icon: <FontAwesomeIcon icon={faLinkedin} size="xl"/>, link: "https://www.linkedin.com/in/limadison/"}
]

// referenced from: https://dev.to/samanthalaine/implementing-dark-mode-in-a-react-app-3k1a
function useDarkMode() {
  const [theme, setTheme] = useState(localStorage.theme || 'light');

  useEffect(() => {
    // selects the root element in order to apply a 'global' property to the entire page
    const root = window.document.documentElement;
    // sets true/false based on whether the theme is set to 'dark'
    // '===' helps prevent some JavaScript shenanigans with comparisons
    const isDark = theme === 'dark';

    // the toggle method accepts a token, and an optional 'force' argument
    // a 'force' argument will turn the method into a one-way-only operation
    // in this case, isDark = false will only remove 'dark', and isDark = true will only add 'dark'
    root.classList.toggle('dark', isDark);
    localStorage.setItem('theme', theme)
  }, [theme]);

  return {theme, setTheme}
} 

{/* Link Cards; abstracted enough to make adding new links easier */}
{/* Because links open in new tabs, contains an aria-label to indicate what clicking on the card will do for accessibility reasons*/}
function LinkCard({link}) {
  return (<>
    <div class="box box-border dark:border-[#D3F26A] border-1 rounded-xl p-5 mx-4 md:mx-8 bg-[#FBFFF5] dark:bg-[#54574F] shadow-[3px_3px_rgba(0,0,0)] dark:shadow-[3px_3px_#D3F26A] transition delay-80 duration-100 ease-in-out hover:shadow-none hover:translate-1 active:bg-[#C6CCC0]">
      <a 
      href={link.link} 
      target="_blank" 
      aria-label={`Opens a link to Madison's ${link.title} in new tab`}
      rel="noreferrer noopener">
        <div class="flex flex-row gap-x-2 items-center">
          <div>
          {link.icon}
        </div>
        <div>
          <h1 class="font-[Open_Sans] text-sm md:text-lg font-semibold">{link.title}</h1>
          <h2 class="font-[Open_Sans] text-xs md:text-sm text-black/50 dark:text-white/50 shrink gap-x-1 items-center"><FontAwesomeIcon icon={faLink} /> {link.link}</h2>
          </div>
        </div>
      </a>
    </div>
  </>)
}

function App() {
  const {theme, setTheme} = useDarkMode()

  // finds current time of the user, and formats the date as hours:minutes AM/PM, excluding seconds
  let current_time = new Date();
  let greeting = "Evening"
  let time_formatted = current_time.toLocaleTimeString("en-US", {timeStyle:'short'});

  // modifies greeting based on time of day
  let hours = current_time.getHours()
  if (time_formatted.includes("AM")) {
    greeting = "Morning"
  } else if (hours > 11 && hours < 19) {
    greeting = "Afternoon"
  }

  return (
    <>
    {/* Main center card; becomes thinner on smaller screens */}
      <div class="box box-border dark:border-[#D3F26A] border-2 rounded-xl w-100 md:w-150 mx-auto p-10 bg-[#D5DBC3] dark:bg-[#282924] shadow-[5px_5px_rgba(0,0,0)] dark:shadow-[5px_5px_#D3F26A]">
        {/* Dark/Light Mode toggle */}
        <button 
          type="button" 
          aria-label="Toggles theme between light or dark mode" 
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          class="bg-[#FBFFF5] dark:bg-[#54574F] box-border dark:border-[#D3F26A] border-1 rounded-full p-2 shadow-[2px_3px_rgba(0,0,0)] dark:shadow-[3px_3px_#D3F26A] transition ease-in-out hover:shadow-none hover:translate-1 active:bg-[#C6CCC0]">
          {theme === 'dark' ? <FontAwesomeIcon icon={faMoon} size="lg"/> : <FontAwesomeIcon icon={faSun} size="lg"/>}
        </button>

        {/* Time-of-day Greeting */}
        <div class="text-center font-[Iosevka_Charon] m-4 bg-[#FBFFF5] dark:bg-[#54574F] rounded-lg p-1 w-30 md:w-50 text-sm md:text-base flex-initial mx-auto">
          Good {greeting}! It is currently: {time_formatted}
        </div>

        {/* Profile */}
        <div class="text-center">
          <img src={profile_img} alt="image of Madison Li" class="rounded-full w-45 h-45 object-cover object-top mx-auto box-border dark:border-[#D3F26A] border-1 shadow-[2px_3px_rgba(0,0,0)] dark:shadow-[2px_3px_#D3F26A]"
          />
          <div class="p-5 mb-8">
            <h1 class="font-[Open_Sans] text-2xl font-bold">Madison Li</h1>
            <p class="font-[Akatab] text-lg text-black/50 dark:text-white/50">Software & Game Developer</p>
            <p class="font-[Iosevka_Charon] text-black/30 dark:text-white/30"><FontAwesomeIcon icon={faLocationDot} /> Sunnyvale, CA</p>
            </div>
        </div>

        {/* Column of Links; iteratively creates link cards based on the objects in my 'links' array, making it easy to add more links in the future */}
        <div class="flex flex-initial flex-col gap-y-8">
          {links.map((link) => <LinkCard link={link} key={link.id}/>)}
        </div>
      </div>
    </>
  )
}

export default App
