
const cardContainer = document.getElementsByClassName('card-container')[0]
const cardProject = document.getElementsByClassName('card')

projectslist.map((project) => {
  const projectItem = document.createElement('div')
  const projectContent = `
  <div class="card">
  <img src=${project.bannerURL} alt="imagem do projeto ${project.name}">

  <button class="folder-icon">
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






