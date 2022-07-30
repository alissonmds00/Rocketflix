/*                    API CONTENT                  */
const ApiKey = 'c971480b4edf2658535b9f7e359cb43e';
const BaseUrl = 'https://api.themoviedb.org/3/movie/';
const ImgUrl = 'https://image.tmdb.org/t/p/w500';
const Language = 'language=pt-BR';
/* ----------------------------------------------- */

/*                  Doom  items                     */
const buttom = document.getElementById('shuffle')
const content = document.getElementById('main')
const name = document.getElementById('nome').innerHTML
const desc = document.getElementById('desc').innerHTML
const synopsis = document.getElementById('sinopse').innerHTML
const thumb = document.getElementById('thumb').innerHTML
/* ------------------------------------------------- */


function shuffle() {
    document.getElementById('main').removeAttribute('style')
    let random = Math.floor(Math.random() * 9999)
    let urlDesc = `${BaseUrl}${random}?api_key=${ApiKey}&${Language}`
    function getData() {
        axios.get(urlDesc)
            .then(response => {
                let Data = response.data
                let path = JSON.stringify(Data.poster_path)
                path = path.replace('"', "")
                path = path.replace('"', "")
                document.getElementById('nome').innerHTML = JSON.stringify(Data.title)
                document.getElementById('desc').innerHTML = JSON.stringify(Data.overview)
                let urlImg = `${ImgUrl}${path}` 
                document.getElementById('thumb').setAttribute('src', urlImg)
                console.log(Data)
                console.log(path)
                console.log(ImgUrl)
            })
            .catch(error => {
                document.getElementById('nome').innerHTML = 'Ops, filme não encontrado. Tente novamente!'
                document.getElementById('desc').innerHTML = ''
                document.getElementById('thumb').setAttribute('src', 'data:image/png;base64,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')
            })
    }
    getData()
}

buttom.addEventListener('click', shuffle)   