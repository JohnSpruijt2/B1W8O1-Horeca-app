var conti = true
var fris = 0
var bier = 0
var wijn = 0
alert("Welkom bij Bar Barratata! \n\nU gaat nu bestellen.")
while (conti == true) {
    var order = prompt("Welke bestelling wilt u toevoegen?")
    if (order == "stop") {
        break;
    }
    else if (order == "snack"){
        var bitterballen1 = prompt("Hoeveel bitterballen wilt u toevoegen (8 of 16)?")
        if (bitterballen1 == 8,16) {
            var bitterballen2 = prompt("Hoeveel bitterbalschalen van " + bitterballen1 + " stuks wilt u bestellen?")
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

