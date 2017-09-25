const makeHTML = (book) => {
  const div = document.createElement('div')

  div.className = "item"

  div.innerHTML = `
    <i class="large book middle aligned icon"></i>
    <div class="content">
      <a class="header" href="/">${book.volumeInfo.title}</a>
      <div class="description">
        ${book.volumeInfo.authors[0]}
      </div>
    </div>
  `

  return div
}


const simpleGet = (url) => {
  return new Promise((resolve) => {
    const req = new XMLHttpRequest()

    req.open('GET', url)

    req.onload = function() {
      resolve(JSON.parse(this.responseText))
    }

    req.send()
  })

}



document.addEventListener('DOMContentLoaded', function(){
  // Google Books API docs:
  // https://developers.google.com/books/docs/v1/using
  // Here is an example using a search term
  const baseUrl = 'https://www.googleapis.com/books/v1/volumes?q='

  // Here is an example of searching an author
  //GET https://www.googleapis.com/books/v1/volumes?q=inauthor:pynchon

  let data

  const form = document.querySelector('form.ui.form')
  const list = document.querySelector('div.ui.relaxed.divided.list')


  const addToDOM = function(){
    console.log('this happens second')

    data = JSON.parse(this.responseText)
    // take that response


    // and add elements to the DOM
    data.items.forEach((book) => {
      const bookNode = makeHTML(book)
      list.appendChild(bookNode)
    })
  }


  form.addEventListener('submit', (ev) => {
    ev.preventDefault()
    list.innerHTML = ''

    const val = ev.target.querySelector('input').value
    ev.target.querySelector('input').value = ''

    // make a request to the books API
    const url = `${baseUrl}${val}`

    var response = simpleGet(url, addToDOM)

    response.then(function(resp){
      resp.items.forEach((book) => {
        const bookNode = makeHTML(book)
        list.appendChild(bookNode)
      })
    })

    console.log('this happens first')

  })

})
