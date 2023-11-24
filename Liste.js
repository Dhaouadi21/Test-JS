

var produit = JSON.parse(localStorage.getItem('produit')) || []
var tbody = document.getElementById('tbody')
function getdata() {



    produit.map((produit, index) => {

        tbody.innerHTML += `
<tr> 
<td> ${produit.nomprod} </td>
<td> ${produit.ref} </td>
<td> ${produit.desc} </td>
<td> ${produit.quant} </td>
<td> ${produit.pri} </td>




<td>    <button type="button" class="btn btn-outline-warning" Onclick="getdetails(${index})" data-bs-toggle="modal" data-bs-target="#exampleModal">
Modifier
</button>
<button class="btn btn-outline-danger" onClick="supp(${index})"> Supprimer  </button></td>
</tr>
`
    })

}

getdata()


function supp() {
    produit.splice(index, 1)
    localStorage.setItem('produit', JSON.stringify(produit))
    window.location.reload()
}


var nomprod = document.getElementById('nomprod')
var ref = document.getElementById('ref')
var description = document.getElementById('description')
var quantite = document.getElementById('quantite')
var prix = document.getElementById('prix')

var indice = 0
function getdetails(index) {

    nomprod.value = produit[index].nomprod
    ref.value = produit[index].ref
    description.value = produit[index].desc
    quantite.value = produit[index].quant
    prix.value = produit[index].pri

    indice = index
}

function savechanges() {
    var data = {
        nomprod: nomprod.value,
        ref: ref.value,
        desc: description.value,
        quant: quantite.value,
        pri: prix.value,
    }
    produit.splice(indice, 1, data)

    localStorage.setItem('produit', JSON.stringify(produit))
    window.location.reload()
}