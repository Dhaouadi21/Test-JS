var nomprod = document.getElementById('nomprod')
var ref = document.getElementById('ref')
var description = document.getElementById('description')
var quantite = document.getElementById('quantite')
var prix = document.getElementById('prix')
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
    if (ref.value == "") {
        ref.classList.add('is-invalid')
        ref.classList.remove('is-valid')
        formvalid = false

    } else {
        ref.classList.add('is-valid')
        ref.classList.remove('is-invalid')
    }
    if (description.value == "") {
        description.classList.add('is-invalid')
        description.classList.remove('is-valid')
        formvalid = false

    } else {
        description.classList.add('is-valid')
        description.classList.remove('is-invalid')
    }
    if (quantite.value == "") {
        quantite.classList.add('is-invalid')
        quantite.classList.remove('is-valid')
        formvalid = false

    } else {
        quantite.classList.add('is-valid')
        quantite.classList.remove('is-invalid')
    }
    if (prix.value == "") {
        prix.classList.add('is-invalid')
        prix.classList.remove('is-valid')
        formvalid = false

    } else {
        prix.classList.add('is-valid')
        prix.classList.remove('is-invalid')
    }

    if (formvalid) {
        var produit = JSON.parse(localStorage.getItem('produit')) || []
        var data = {
            nomprod: nomprod.value,
            ref: ref.value,
            desc: description.value,
            quant: quantite.value,
            pri: prix.value,
        }
        produit.push(data)

        localStorage.setItem('produit', JSON.stringify(produit))
        window.location.href = '/Liste.html'
    }




}

btn.addEventListener('click', ajout)