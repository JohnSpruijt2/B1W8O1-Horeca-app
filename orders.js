var conti = true
var fris
var bier
var wijn
alert("Welkom bij Bar Barratata! \n\nU gaat nu bestellen.")
while (conti == true) {
    var order = prompt("Welke bestelling wilt u toevoegen?")
    if (order == "stop") {
        break;
    }
    else if (order == "snack"){                                                                                     //Als je 'snack' invult dan gaat het over in bitterball
        var bitterballen1 = prompt("Hoeveel bitterballen wilt u toevoegen (8 of 16)?")                              //Grote van de schaal van de bitterballen
        if (bitterballen1 == 8) {
            var bitterballen2 = prompt("Hoeveel bitterbalschalen van " + bitterballen1 + " stuks wilt u bestellen?")
            if (bitterballen2 == "stop") {
                break;
            }
            document.write(bitterballen2)
        }
        else if (bitterballen1 == 16) {
            var bitterballen3 = prompt("Hoeveel bitterbalschalen van " + bitterballen1 + " stuks wilt u bestellen?")
            if (bitterballen3 == "stop") {
                break;
            }
            document.write(bitterballen3)
        }
        else if (bitterballen1 == "stop") {
            break;
        }
        else {
            alert("U kunt alleen een keuze maken tussen 8 en 16. De snacks zijn niet toegevoegd aan de bestelling.")
        }

    }
    else if (order == "fris" ||order == "bier" || order == "wijn") {
        var number = prompt("Hoeveel "+ order +" wilt u toevoegen aan uw bestelling?")
        if (number == "stop") {
            break;
        }
        if (order == "fris") {
            fris = number
            document.write(fris)
        }
        else if (order == "bier") {
            bier = number
            document.write(bier)
        }
        else if (order == "wijn") {
            wijn = number
            document.write(wijn)
        }
        else {
            alert("U heeft een ongeldige invoer gedaan. Uw bestelling kan niet worden toegevoegd.")
        }
    }
    else {
        alert("U heeft een ongeldige invoer gedaan. Uw bestelling kan niet worden toegevoegd.")
    }
}

