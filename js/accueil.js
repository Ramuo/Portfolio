const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 1500)

function getData() {
  header.innerHTML =
    '<img src="/images/ionis.jpg" alt="" class= f-cardImg/>'
  title.innerHTML = 'IONIS-STM Paris'
  excerpt.innerHTML =
    'MSc2 Informatique & Management School of Technology and Management'
  profile_img.innerHTML =
    '<img src="/images/profileImg.jpg" alt="" />'
  name.innerHTML = 'Alpha BARRY'
  date.innerHTML = '2022 - 2023'

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}