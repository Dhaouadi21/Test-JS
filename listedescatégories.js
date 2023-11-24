

var categorie = JSON.parse(localStorage.getItem('categorie')) || []
var tbody = document.getElementById('tbody')
function getdata() {



    categorie.map((category, index) => {

        tbody.innerHTML += `
<tr> 
<td> ${category.nomprod} </td>
<td> ${category.categ} </td>





<td>    <button type="button" class="btn btn-outline-warning" Onclick="getdetails(${index})" data-bs-toggle="modal" data-bs-target="#exampleModal">
Modifier
</button>
<button class="btn btn-outline-danger" onClick="supp(${index})"> Supprimer  </button></td>
</tr>
`
    })

}

getdata()


function supp(index) {
    categorie.splice(index, 1)
    localStorage.setItem('categorie', JSON.stringify(categorie))
    window.location.reload()
}


var nomprod = document.getElementById('nomprod')
var categ = document.getElementById('categ')


var indice = 0
function getdetails(index) {

    nomprod.value = categorie[index].nomprod
    categ.value = categorie[index].categ


    indice = index
}

function savechanges() {
    var data = {
        nomprod: nomprod.value,
        categ: categ.value,

    }
    categorie.splice(indice, 1, data)

    localStorage.setItem('categorie', JSON.stringify(categorie))
    window.location.reload()
}