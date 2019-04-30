const injectDom = (title) => {
  document.querySelector('title').innerHTML = title
  document.head.innerHTML += `<meta name='viewport' content='width=device-width, initial-scale=1'>`
  document.body.innerHTML += `<div id='root'></div>`
  document.body.height = innerHeight + 'px';
}

export default injectDom
