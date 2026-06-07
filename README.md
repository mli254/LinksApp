# LinksApp

## Description
A simple React web application that provides information about Madison Li. It displays a profile image, a short bio, and four links to a resume, portfolio, GitHub, and LinkedIn. There is also a toggle for light/dark mode that will persist on refresh, and a small greeting that changes based on the time of day.

## How to Run
As a static webpage, running the program will require navigating to where the website is hosted at https://mli254.github.io/LinksApp/

## JS Features
* Dark Mode
  * Using the button in the top left, users can swap between dark mode and light mode, with the theme they're currently on persisting even after reload. Additionally, there's a bit of an ease transition, so the change isn't too sudden.
  * I picked this particular feature since I feel dark mode is almost universal, especially as it's essential for proper accessibility on websites—something which I wanted to keep in mind.
  * What was tricky during implementation was learning about multiple different concepts: localStorage as a way to allow variables to persist across reloads, and React hooks like useState and useEffect as ways of creating responsive variables and accessing external systems respectively. I did use a reference for implementing dark mode, but I tried to understand every line of code that was written as well. One minor hurdle that cropped up was that the guide was written before Tailwind's v4 update which removed the need for a Tailwind config file, but luckily Tailwind's documentation showed the new method of allowing class to be toggled using JavaScript.
  * With more time, I'd love to be able to sync the site's theme up with a user's own system preferences, while still allowing them to toggle between all three modes.
* Time-of-day Greeting
  * The time of day greeting will change it's message between "Good Morning/Afternoon/Evening" based on the time of day, which is also displayed in the sentence after.
  * The time ranges are: 
    * 12AM-11:59AM for Morning
    * 12PM-6:59PM for Afternoon
    * 7PM-11:59PM for Evening
  * I chose this feature since it felt like a nice, personal touch. I wanted my application to have a bit of charm while remaining clean and professional, and I felt a small greeting that would update with the user's time would help achieve that affect, along with the 'cel-shaded' effect throughout my page's design.
  * What was tricky when implementing it was primarily in understanding the Date object itself, as there were many helpful functions that altogether provided the functionality that I needed, but it was a matter of finding which functions were most helpful and integrating them into my code.
  * With more time, I'd like to try and test it across different timezones, especially across different locales, as I formatted the string using the "en-us" locale only.
## Issues
* One persisting issue that I wasn't fully able to solve relates to the difference in formatting on mobile vs. computer. I tested my responsive sizing on both my computer (by resizing my browser) and my phone, but while the text on my computer wrapped normally in its box, the text on my phone—specifically for my LinkedIn link—overflowed. Even with additional CSS properties such as flex-shrink, which did solve the overflow issue, the way it displays still looks a bit odd, so I am a bit unsatisfied with that specific portion.