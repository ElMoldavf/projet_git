// --------------
// TP ALGORITHMIE
// --------------

// CONSEIL 1:
// RELIRE VOS EXERCICES FAITS EN COURS

// CONSEIL 2:
// BIEN LIRE LES ENONCES

/*
    Exercice 1

    Changer la ligne indiquer pour que le console.log nous 
    affiche le contenue de la variable x
*/

{
    var x = "Hello world" //ligne a changer
}
console.log(x)

/*
    Exercice 2

    Soit deux variable x et y qui contiennent chacune un nombre.
    Creer un algo qui affiche : x est plus grand que y, 
    x est plus petit que y ou x est égale a y si c'est le cas
*/

x = 3
y = 2

if (x>y){
    console.log("x est plus grand que y")
}
else if(x<y){
    console.log("x est plus petit de y")
}
else{
    console.log("x est égale à y")
}

/*
    Exercice 3

    Soit une variable qui contient une lettre
    Creer un algo qui affiche dans le terminal si 
    ce parametre est une voyelle ou une consonne.
    (Pour simplifier on considerera que les lettres minuscules jusqu'a "e")
    ex: "a" affiche "Je suis une voyelle"
        "e" affiche "Je suis une voyelle"
        "b" affiche "Je suis une consonne"
        "c" affiche "Je suis une consonne"
        "d" affiche "Je suis une consonne"
*/

let lettre = "b"

switch(lettre){
    case "a":
    case "e":
        console.log("Je suis une voyelle")
        break
    case "b":
    case "c":
    case "d":
        console.log("Je suis une consonne")
        break
}

/*
    Exercice 4

    Créer un objet avec pour clés votre nom, prenom 
    et age (vous avez le droit de tricher pour votre age).
    Creer un algo qui si la valeur de la clé age est supérieur à 28, 
    affiche dans le terminal ("Je suis dans la fleur de l'age")
    Sinon, affiche ("Je suis en train de me bonifier")
*/

let individu={
    nom:"Doniak",
    prenom:"Jérémy",
    age:35,
}

if(individu.age>28){
    console.log("Je suis dans la fleur de l'age")
}else{
    console.log("Je suis en train de me bonifier")
}

/*
    Exercice 5

    Déclarer un array, avec plusieurs prénoms
    ex: ['ikram', 'adline', 'amina', 'miriame']
    Créer de manière DYNAMIQUE (utiliser une boucle), une String regroupant ces prénoms séparés par --
    ATTENTION: le dernier prénom ne sera PAS suivi de --
    Afficher le résultat dans le terminal
    ex: "ikram--adline--amina--miriame"
*/

let famille = ["ikram","adline","amina","miriame",];
let resultat = "";


for (let i = 0; i < famille.length; i++) {
    if (i === famille.length - 1) {
      resultat += famille[i] ;
    } else {
      resultat += famille[i] + "--";
    }
  }
console.log(resultat)

/* 
    Exercice 6

    Créer une fonction qui va retourner un nouvel utilisateur sous forme d'objet
    Elle prendra 3 paramètres, pour le prénom, le nom et l'age
    Exemple:
    maFonction('Kylian', 'Mbappe', 20) => {prenom: 'Kylian', nom: 'Mbappe', age:20}
    
*/

// let utilisateur = {
//     prenom : 'Kylian',
//     nom : 'Mbappe',
//     age : 20,
// }

function maFonction(prenom,nom,age){
    let utilisateur ={
        prenom:"",
        nom:"",
        age:"",
    } 
    
for(let valeurs of prenom+nom+age){
    utilisateur += valeurs
    }
    return {utilisateur}
}
console.log(maFonction('Kylian', 'Mbappe', 20))

/*
    Exercice 7

    Creer une fonction qui prend en parametre deux nombres x et y 
    et qui nous retourne la division de x par y. Sauf dans le cas 
    ou y vaut 0 on retourne "division impossible"
*/

function division(x,y){
    if (y===0){
        return "division impossible"
    }
    return x/y
}

/*
Exercice 8

let joueur = {
    prenom: "Lionel",
    nom: "Messi",
    age: 34,
    amis:["Neymar"]
};

Creer une fonction qui prend deux parametres un object comme ci dessus
et un prenom et qui ajoute ce prenom dans l'array des amis. 
La fonction retourne l'objet

*/    

let joueur = {
    prenom: "Lionel",
    nom: "Messi",
    age: 34,
    amis:["Neymar"]
}

function amis(joueur,amis){
    let resultat = joueur
    joueur.amis.push()
        return resultat
        
}

console.log(amis(joueur,["Moi"]))

/*
Exercice 9 (BONUS)

Même chose sauf qu'on ajoute le prenom seulement s'il n'est pas déja present dans 
l'array des amis, si il est déja présent on retourne "Vous etes deja amis"

*/

