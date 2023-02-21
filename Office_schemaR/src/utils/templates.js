export const getMarkerPopUpTemplate = (title, url) => `
  <div>
  <strong class='marker-pop-up-title'>${title}</strong><br>
  <a class='marker-pop-up-url' href=${url} target='_blank'>
  URL
  </a>
  </div>
  `;



export const getIconTemplate = (icon, title) => `
<div class="marker">
<img class='marker-image' src=${icon} alt=${title}>
</div>
`