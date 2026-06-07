// import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faCode, faFilePdf, faLink, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import {faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import profile_img from './assets/profile.jpg'
import './App.css'

const links = [
  {title: "Resume", id: 1, icon: <FontAwesomeIcon icon={faFilePdf} size="xl"/>, link: "https://bit.ly/43l7pjy"},
  {title: "Portfolio", id: 2, icon: <FontAwesomeIcon icon={faCode} size="xl"/>, link: "https://github.com/mli254"},
  {title: "Github", id: 3, icon: <FontAwesomeIcon icon={faGithub} size="xl"/>, link: "https://github.com/mli254"},
  {title: "Linkedin", id: 4, icon: <FontAwesomeIcon icon={faLinkedin} size="xl"/>, link: "https://www.linkedin.com/in/limadison/"}
]

function LinkCard({link}) {
  return (<>
    <div class="box box-border border-1 rounded-xl p-5 mx-8 bg-[#FBFFF5] shadow-[3px_3px_rgba(0,0,0)] transition delay-80 duration-100 ease-in-out hover:shadow-none hover:translate-1 active:bg-[#C6CCC0]">
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
          <h1 class="font-[Open_Sans] text-lg font-semibold">{link.title}</h1>
          <h2 class="font-[Open_Sans] text-sm text-black/50"><FontAwesomeIcon icon={faLink} /> {link.link}</h2>
          </div>
        </div>
      </a>
    </div>
  </>)
}

function App() {
  return (
    <>
      <div id="center_card" class="box box-border border-2 rounded-xl w-100 md:w-150 mx-auto p-10 bg-[#D5DBC3] shadow-[5px_5px_rgba(0,0,0)]">
        <div id="light_mode">
          <button type="button" aria-label="Toggles between light or dark mode" class="bg-[#FBFFF5] box-border border-1 rounded-full p-2 shadow-[2px_3px_rgba(0,0,0)] transition delay-100 duration-100 ease-in-out hover:shadow-none hover:translate-1 active:bg-[#C6CCC0]">
            <FontAwesomeIcon icon={faSun} size="lg"/>
            </button>
        </div>

        <div id="profile" class="text-center">
          <img src={profile_img} alt="image of Madison Li" class="rounded-full w-45 h-45 object-cover object-top mx-auto box-border border-1 shadow-[2px_3px_rgba(0,0,0)]"
          />
          <div class="p-5 mb-8">
            <h1 class="font-[Open_Sans] text-2xl font-bold">Madison Li</h1>
            <p class="font-[Akatab] text-lg text-black/50">Software & Game Developer</p>
            <p class="font-[Iosevka Charon] text-black/30"><FontAwesomeIcon icon={faLocationDot} /> Sunnyvale, CA</p>
            </div>
        </div>

        <div id="links" class="flex flex-initial flex-col gap-y-8">
          {links.map((link) => <LinkCard link={link} key={link.id}/>)}
        </div>
      </div>
    </>
  )
}

export default App
