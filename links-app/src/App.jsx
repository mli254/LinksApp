// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import profile_img from './assets/profile.jpg'
import './App.css'

const links = [
  {title: "resume", id: 1, src: "placeholder", link: "https://github.com/mli254"},
  {title: "portfolio", id: 2, src: "placeholder", link: "https://github.com/mli254"},
  {title: "github", id: 3, src: "placeholder", link: "https://github.com/mli254"},
  {title: "linkedin", id: 4, src: "placeholder", link: "https://www.linkedin.com/in/limadison/"}
]

function LinkCard({link}) {
  return (<>
    <div class="box box-border border-1 rounded-xl p-5 mx-8 bg-[#FBFFF5] shadow-[3px_3px_rgba(0,0,0)]">
      <a 
      href={link.link} 
      target="_blank" 
      alt="opens in new tab"
      rel="noreferrer noopener">
        <div>
          <h1>{link.title}</h1>
          <p>{link.link}</p>
          </div>
      </a>
    </div>
  </>)
}

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div id="center_card" class="box box-border border-2 rounded-xl w-150 mx-auto p-10 bg-[#D5DBC3] shadow-[5px_5px_rgba(0,0,0)]">
        <div id="light_mode">
          <button type="button" class="bg-[#FBFFF5] box-border border-1 rounded-full p-2 shadow-[2px_3px_rgba(0,0,0)]">Toggle</button>
        </div>

        <div id="profile" class="text-center">
          <img src={profile_img} alt="image of Madison Li" class="rounded-full w-45 h-45 object-cover object-top mx-auto box-border border-1 shadow-[2px_3px_rgba(0,0,0)]"
          />
          <div class="p-5 mb-8">
            <h1>Madison Li</h1>
            <p>Software & Game Developer</p>
            <p>Sunnyvale, CA</p>
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
