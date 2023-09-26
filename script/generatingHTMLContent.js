let infoHTML = '';

information.forEach((info) => {
  infoHTML += `
    <div class="project-content">
      <div class="demo-view">
        <img src="${info.image}"/>
      </div>
      <div class="demo-try">
        <h3>${info.title}</h3>
        <span>${info.description} </span>
        <div class="tech-used">
          <h3>${info.techUsed}</h3>
        </div>
        <div class="buttons">
          <div>
            <span>Code</span>
            <a href="${info.navigation.codeUrl}"><img src="icons/github.png"/></a>
          </div>
          <div>
            <span>Live Demo</span>
            <a href="${info.navigation.liveDemoUrl}"><img src="icons/demo.png"/></a>
          </div>
        </div>
      </div>
    </div>
  `
})

document.querySelector('.js-demo-generate-section').innerHTML = infoHTML;