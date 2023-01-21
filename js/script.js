
const cardContainer = document.getElementsByClassName('card-container')[0]
const cardProject = document.getElementsByClassName('card')

const menuBtn = document.querySelector('.menu-btn')
const closeBtn = document.querySelector('.close-btn')
const mailBtn = document.querySelector('.mail-btn')
const mobileMenu = document.querySelector('.mobile-menu')

const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  if(e){
    alert('e-mail enviado com sucesso!')
  }

  form.email.value = ''
  form.mailBody.value = ''
})



projectslist.map((project) => {
  const projectItem = document.createElement('div')
  const projectContent = `
  <div class="card" onclick="linkRedirect('${project.deployURL}')">
  <img src=${project.bannerURL} alt="imagem do projeto ${project.name}">

  <button class="folder-icon" onclick="linkRedirect('${project.repositorieURL}')">
  <a href=${project.repositorieURL} target='_blank' >
  <i  class="ph-folder-open "></i>
  </a>
  </button>

  <h3 class="card-title">${project.name}</h3>
  <p class="card-description">${project.description}</p>

  <div class="tags">
    ${project.tags.map((tag) => (
    `<span class="tag">${tag}</span>`
    )).join('')}
  </div>
  </div>
  `
  projectItem.innerHTML = projectContent
  cardContainer.append(projectItem)

  
})

if(window.screen.width <= 393){
  mobileMenu.classList.add('mobile-menu-active')
}

menuBtn.addEventListener('click', () => {
  toggleMobileMenu()
})
closeBtn.addEventListener('click', () => {
  toggleMobileMenu()
})


function toggleMobileMenu(){
  mobileMenu.classList.toggle('mobile-menu-active')
}

function linkRedirect(deployURL){
  if(deployURL == ''){
    alert('PROJETO EM MANUTENÇÃO!! :( \natualmente este projeto não pode ser acessado pois está em manutenção, mas seu código continua disponível no github, basta clicar no icone da pasta.' )
  }else{

    window.open(deployURL, '_blank')
  }
}

