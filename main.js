const linksSocialMedia = {
  github: 'Rafatuba',
  youtube: 'esporteinterativo',
  instagram: 'richardselvagem',
  facebook: 'zuck',
  twitter: 'CBF_futebol'
}

function changeSocialMediaLinks() {
  //userName.textContent = 'Rafatuba' //altera com id

  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

// modelos de como escrever variáveis = camelCase , PascalCase , snake_case .

function getGitHubProfilesInfo() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfilesInfo()

//ARROW FUNCTIONS : Cria Função anônima(sem nome). Usa os argumentos da função.
//Se tiver apenas um argumento,não usa parenteses.
//Se houver mais de um argumento: (argumento1, argumento2)
//Sem argumento, usa-se ()
