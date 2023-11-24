var nomprod = document.getElementById('nomprod')
var categ = document.getElementById('categ')
var btn = document.getElementById('btnajout')


function ajout(e) {
    e.preventDefault()
    var formvalid = true
    if (nomprod.value == "") {
        nomprod.classList.add('is-invalid')
        nomprod.classList.remove('is-valid')
        formvalid = false

    } else {
        nomprod.classList.add('is-valid')
        nomprod.classList.remove('is-invalid')
    }
    if (categ.value == "") {
        categ.classList.add('is-invalid')
        categ.classList.remove('is-valid')
        formvalid = false

    } else {
        categ.classList.add('is-valid')
        categ.classList.remove('is-invalid')
    }
    if (formvalid) {
        var categorie = JSON.parse(localStorage.getItem('categorie')) || []
        var data = {
            nomprod: nomprod.value,
            categ: categ.value,

        }
        categorie.push(data)

        localStorage.setItem('categorie', JSON.stringify(categorie))
        window.location.href = '/categorie.html'
    }

}

btn.addEventListener('click', ajout)


