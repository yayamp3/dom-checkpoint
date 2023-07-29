/**********************************************************************
 *  PREPARATION DE LA LISTE DES PRODUITS 
 * ********************************************************************/
let products = [
    {
        id : 1,
        nom: 'Arbre de Noél',
        image: 'https://media.auchan.fr/A0220020612000866028PRIMARY_1200x1200/B2CD/',
        description: 'Arbre de Noél de 1M78 Stock 21.',
        prix: 225,
        instock : 21
    },
    {
        id : 2,
        nom: 'Lot de Boulle de Noel',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA4rxcV5xa3Gitms4zY58fLdoQedMYU5TGoVAsTL_O0XwB4EWS0Qb8jwMJKB98CUQvYuQ&usqp=CAU',
        description: 'Lot de 50 boulle de Noel.',
        prix: 31,
        instock : 51
    },
    {
        id :3,
        nom: 'étoile De Noel',
        image: 'https://previews.123rf.com/images/madllen/madllen1309/madllen130900366/22288698-or-%C3%A9toile-de-no%C3%ABl-isol%C3%A9-sur-fond-blanc.jpg',
        description: 'étoile de Noel.',
        prix: 23,
        instock : 93
    },
    {
        id :4,
        nom: 'Sapin De Noel',
        image: 'data:image/jpeg;base64,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',
        description: 'Sapin De Noel En Plastique 1m40.',
        prix: 131,
        instock : 73
    },
    
];
        /******************************************************
        *                  TRAITEMENT DU PANIER               *
        ******************************************************/

// SELECTION DES  ELEMENTS
const produits = document.querySelector(".produits");
const panierElements = document.querySelector(".panier-elements");
const subtotal = document.querySelector(".subtotal");
const totalElementsInPanier = document.querySelector(".total-elements-in-panier");

//Fonction d'affichage des produits
function affichageProduits() {
    products.forEach((produit) => {
    produits.innerHTML +=`
    <div class="card col-md-3 element" style="width: 23rem; margin: 10px">
   <img src="${produit.image}" class="card-img-top" alt="...">
     <div class="card-body element-container">
     <h3 class="card-title"> ${produit.nom}</h5>
     <p class='card-text'>"${produit.description}</p>
     <h4 class='card-text'>${produit.prix}  €</h4>
     <a   onclick="addToPanier(${produit.id})" class='btn btn-primary add-to-panier' id="${produit.id}" >Ajouter au panier</a>
     </div></div>
     `;
});    
}
//appelle de la focntion pour l'affichage
affichageProduits();

// Declaration du panier à vide ou récupération du contenu via le localStorage
let panier = [] || JSON.parse(localStorage.getItem("PANIER"));

//Mise à jour du panier
updatePanier();
//console.log(panier);

//Fonction d'ajout produit dans le panier
function addToPanier(id) {
    // verification si le produit n'existe pas dans le panier
    if (panier.some((element) => element.id === id)) {

        //on augmente juste la quantité si le produit existe dèjà dans le panier
        changeQuantity("plus", id);
    } else {
        const element = products.find((produit) => produit.id === id);
        panier.push({
            ...element,
            quantite: 1,
        });
    }
    //rappelle de la fonction de mise à jour pour actualiser
    updatePanier();
}

//Mise à jour des valeurs des elements du panier et sauvegarde dans le localStorage
function updatePanier (){
    affichageElementsPanier();
    affichageSubtotal();

//sauvegarde des données du panier dans le local storage
 localStorage.setItem("PANIER", JSON.stringify(panier));
}

//Cacul et affichage du subtotal
function affichageSubtotal(){
    let totalPrix = 0,
    totalElements =0;

panier.forEach((element) => {
    totalPrix += element.prix * element.quantite;
    totalElements += element.quantite;
});
subtotal.innerHTML= `Subtotal (${totalElements} elements) : ${totalPrix.toFixed(2)} €)`;
totalElementsInPanier.innerHTML = totalElements;

}

// Affichage des elements du panier
function affichageElementsPanier(){
    panierElements.innerHTML = ""; // vider le panier
    panier.forEach((element) => {
    panierElements.innerHTML += `
    <div class="panier-element" id="produit${element.id}">
    <div class="element-info" >
        <h4>${element.nom}</h4>
    </div>
    <div class="unit-prix">
    ${element.prix}<small> €</small>
    </div>
    <div class="units">
        <div class="btn minus" onclick="changeQuantity('minus', ${element.id})">-</div>
        <div class="number">${element.quantite}</div>
        <div class="btn plus" onclick="changeQuantity('plus', ${element.id})">+</div>           
    </div>
    <div><button class="btn btn-danger" id=${element.id} onclick="removeElementFromPanier(${element.id})" type="button">Supprimmer</button></div>
    </div>
     ` ; });
  }

//Supprimer un element du apnier
function removeElementFromPanier(id){
   // panier = panier.filter((element)=> element.id !== id);
    panier.splice(id, 1); 
    console.log(id);
    $('#produit'+id).remove();
    //mise à jour du panier
    updatePanier();
}

//changement de la quantité 
function changeQuantity(action, id) {
    panier = panier.map((element) => {
let quantite = element.quantite;
if (element.id === id) {
    if (action === "minus" && quantite > 1) {
        quantite--;
    } else if(action == "plus" && quantite < element.instock) {
        quantite++;
    } 
} 
return {
    ...element,
    quantite,
};
    });
    updatePanier();
}
          