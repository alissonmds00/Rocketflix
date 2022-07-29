/*                    API CONTENT                  */
const ApiKey = 'c971480b4edf2658535b9f7e359cb43e';
const BaseUrl = 'https://api.themoviedb.org/3/movie/';
const ImgUrl = 'https://image.tmdb.org/t/p/w';
const Language = 'language=pt-BR';
/* ----------------------------------------------- */

/*                  Doom  items                     */
const buttom = document.getElementById('shuffle')
const content = document.getElementById('main').innerHTML
const name = document.getElementById('nome').innerHTML
const desc = document.getElementById('desc').innerHTML
const synopsis = document.getElementById('sinopse').innerHTML
const thumb = document.getElementById('thumb').innerHTML
/* ------------------------------------------------- */


function shuffle() {
    const random = Math.floor(Math.random() * 10000)
    const urlDesc = `${BaseUrl}${random}?api_key=${ApiKey}&${Language}`
    let path, overview
    function getData() {
        axios.get(urlDesc)
            .then(response => {
                let Data = response.data
                path = JSON.stringify(Data.poster_path)
                document.getElementById('nome').innerHTML = JSON.stringify(Data.title)
                document.getElementById('sinopse').innerHTML = JSON.stringify(Data.overview)
                console.log(Data)
            })
            .catch(error => console.log(error))
    }

    const urlImg = `${ImgUrl}${random}.${path}`

    getData()
}

buttom.addEventListener('click', shuffle)   