var email = document.getElementById('email')

var motDePasse = document.getElementById('motDePasse')

var btn = document.getElementById('btnlogin')


function login(e) {
    e.preventDefault()
    var formvalid = true
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

    var users = JSON.parse(localStorage.getItem('users')) || []

    var existe = users.find((element) => element.email == email.value && element.motdepasse == motDePasse.value)

    if (existe) {
        alert('user connected')
        window.location.href = '/dashbord.html'
    }
    else {
        alert('vérifier email and password')
    }

}

btn.addEventListener('click', login)