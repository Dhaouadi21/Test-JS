var nom = document.getElementById('nom')

var btn = document.getElementById('btnregister')

var prenom = document.getElementById('prenom')

var email = document.getElementById('email')

var motDePasse = document.getElementById('motDePasse')

var confirmerMotDePasse = document.getElementById('confirmerMotDePasse')

function register(e) {
    e.preventDefault()
    var formvalid = true

    if (nom.value == "") {
        nom.classList.add('is-invalid')
        nom.classList.remove('is-valid')
        formvalid = false

    }
    else {
        nom.classList.add('is-valid')
        nom.classList.remove('is-invalid')

    }

    if (prenom.value == "") {
        prenom.classList.add('is-invalid')
        prenom.classList.remove('is-valid')
        formvalid = false
    }
    else {
        prenom.classList.add('is-valid')
        prenom.classList.remove('is-invalid')
    }

    if (email.value == "") {
        email.classList.add('is-invalid')
        email.classList.remove('is-valid')
        formvalid = false
    } else {
        email.classList.add('is-valid')
        email.classList.remove('is-invalid')
    }

    if (motDePasse.value == "") {
        motDePasse.classList.add('is-invalid')
        motDePasse.classList.remove('is-valid')
        formvalid = false
    } else {
        motDePasse.classList.add('is-valid')
        motDePasse.classList.remove('is-invalid')
    }

    if (confirmerMotDePasse.value == "" || motDePasse.value !== confirmerMotDePasse.value) {
        confirmerMotDePasse.classList.add('is-invalid');
        confirmerMotDePasse.classList.remove('is-valid');
        formvalid = false
    } else {
        confirmerMotDePasse.classList.add('is-valid');
        confirmerMotDePasse.classList.remove('is-invalid');
    }



    if (formvalid) {
        var users = JSON.parse(localStorage.getItem('users')) || []
        var data = {
            nom: nom.value,
            prenom: prenom.value,
            email: email.value,
            motdepasse: motDePasse.value
        }
        users.push(data)

        localStorage.setItem('users', JSON.stringify(users))
    }





}



btn.addEventListener('click', register)