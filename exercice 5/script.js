let day = window.prompt("veuillez saisir un nombre entre 1 et 7") 
let dayStr = "";

switch (day) {
    case 1:
        dayStr = "Lundi";
        break;
    case 2:
        dayStr = "Mardi";
        break;
    case 3:
        dayStr = "Mercredi";
        break;
    case 4:
        dayStr = "Jeudi";
        break;
    case 5:
        dayStr = "Vendredi";
        break;
    case 6:
        dayStr = "Samedi";
        break;
    case 7:
        dayStr = "Dimanche";
        break;
    default:
        dayStr = "rien du tout"
        break;
}

window.alert("le numéro que vous avez choisi" + day + "correspond" + dayStr);



/*Exercice 5Devoir
Créer une variable day et lui attribuer une valeur entre 1 et 7.
A l'aide d'un switch, afficher :
Lundi si day est égal à 1
Mardi si day est égal à 2
Mercredi si day est égal à 3
Jeudi si day est égal à 4
Vendredi si day est égal à 5
Samedi si day est égal à 6
Dimanche si day est égal à 7*/