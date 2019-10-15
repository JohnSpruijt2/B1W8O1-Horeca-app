const frisPrice = 1.99                                                                                                //Prices
const bierPrice = 2.49
const wijnPrice = 3.49
const bitterballen2Price = 4.99
const bitterballen3Price = 8.99

var error = false
var conti = true
var fris = 0
var bier = 0
var wijn = 0
var bitterballen1 = 0
var bitterballen2 = 0
var bitterballen3 = 0
alert("Welkom bij Bar Barratata! \n\nU gaat nu bestellen.")
while (conti == true) {
    var order = prompt("Welke bestelling wilt u toevoegen?")
    if (order == "stop") {                                                                                          //Stop function
        break;
    }
    else if (order == "snack"){                                                                                     //Als je 'snack' invult dan gaat het over in bitterball
        bitterballen1 = prompt("Hoeveel bitterballen wilt u toevoegen (8 of 16)?")                              //Grote van de schaal van de bitterballen
        if (bitterballen1 == 8) {
            bitterballen2 = prompt("Hoeveel bitterbalschalen van " + bitterballen1 + " stuks wilt u bestellen?")//Hoeveelheid van bitterballen schaal 8
            if (bitterballen2 == "stop") {
                break;
            }
            else if (bitterballen2 <0) {
                alert("Geen negatieve getallen")
                error = true
                break;
            }
        }
        else if (bitterballen1 == 16) {
            bitterballen3 = prompt("Hoeveel bitterbalschalen van " + bitterballen1 + " stuks wilt u bestellen?")//Hoeveelheid van bitterballen schaal 16
            if (bitterballen3 == "stop") {
                break;
            }
            else if (bitterballen3 <0) {
                alert("Geen negatieve getallen")
                error = true
                break;
            }
        }
        else if (bitterballen1 == "stop") {                                                                         //Stop function
            break;
        }
        else {
            alert("U kunt alleen een keuze maken tussen 8 en 16. De snacks zijn niet toegevoegd aan de bestelling.")
        }

    }
    else if (order == "fris" ||order == "bier" || order == "wijn") {
        var number = prompt("Hoeveel "+ order +" wilt u toevoegen aan uw bestelling?")
        if (number <0) {
            alert("Geen negatieve getallen")
            error = true
            break;
        }
        if (number == "stop") {
            break;
        }
        if (order == "fris") {
            fris = number
        }
        else if (order == "bier") {
            bier = number
        }
        else if (order == "wijn") {
            wijn = number
        }
        else {
            alert("U heeft een ongeldige invoer gedaan. Uw bestelling kan niet worden toegevoegd.")
        }
    }
    else {
        alert("U heeft een ongeldige invoer gedaan. Uw bestelling kan niet worden toegevoegd.")
    }
}

if (wijn >0) {
    document.write("<a class='billing'>Wijn | "+ wijn+" x € " + wijnPrice + "</a><br>")
}
if (bier >0 ) {
    document.write("<a class='billing'>Bier | " + bier + " x € " + bierPrice + "</a><br>")
}
if (fris >0) {
    document.write("<a class='billing'>Fris | " + fris + " x € " + frisPrice + "</a><br>")
}
if (bitterballen2 >0) {
    document.write("<a class='billing'>Bitterballen (8) | " + bitterballen2 + " x € " + bitterballen2Price + "</a><br>")
}
if (bitterballen3 >0) {
    document.write("<a class='billing'>Bitterballen (16) | " + bitterballen3 + " x  " + bitterballen3Price + "</a><br>")
}

if (error == true) {
    alert("An unexpected error occured.\n\n refresh the page and try again later.")
}
else {
    var wijnTotal = wijn*wijnPrice
    var bierTotal = bier*bierPrice
    var frisTotal = fris*frisPrice
    var bitterballen2Total = bitterballen2*bitterballen2Price
    var bitterballen3Total = bitterballen3*bitterballen3Price
    var totalPrice = (wijnTotal+bierTotal+frisTotal+bitterballen2Total+bitterballen3Total).toFixed(2);
    document.write("<h2 id='total'>Totaal</h2>")
    document.write("<a id='totalPrice'>€ " + totalPrice)
}