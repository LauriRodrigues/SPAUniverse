import { Router } from './router.js'

const router = new Router()
router.add('/', '/pages/home.html')
router.add('/universe', '/pages/universe.html')
router.add('/exploration', '/pages/exploration.html')
router.add(404, '/pages/404.html')

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()

//---------background-----------

const body = document.querySelector('body')
const navHome = document.querySelector('#navHome')
const navUniverse = document.querySelector('#navUniverse')
const navExploration = document.querySelector('#navExploration')

navHome.addEventListener('click', () => {
  body.classList.add('homeBG')
  body.classList.remove('universeBG')
  body.classList.remove('explorationBG')
})

navUniverse.addEventListener('click', () => {
  body.classList.remove('homeBG')
  body.classList.add('universeBG')
  body.classList.remove('explorationBG')
})

navExploration.addEventListener('click', () => {
  body.classList.remove('homeBG')
  body.classList.remove('universeBG')
  body.classList.add('explorationBG')
})


  