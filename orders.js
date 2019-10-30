const frisPrice = 1.99                                                                                                //Prices
const bierPrice = 2.49
const wijnPrice = 3.49
const bitterballen2Price = 4.99
const bitterballen3Price = 8.99

var error = false                                                                                                     //variabelen
var conti = true                                                                                                      //variabel om de loop aan te zetten
var fris = 0
var bier = 0
var wijn = 0
var bitterballen1 = 0
var bitterballen2 = 0
var bitterballen3 = 0
var number = 0
var number2 = 0
var number3 = 0
alert("Welkom bij Bar Barratata! \n\nU gaat nu bestellen.")
while (conti == true) {                                                                                             //zodat het blijft loopen todat het gebroken word
    var order = prompt("Welke bestelling wilt u toevoegen?")
    if (order == "stop") {                                                                                          //Stop function
        break;
    }
    else if (order == "snack"){                                                                                     //Als je 'snack' invult dan gaat het over in bitterball
        bitterballen1 = prompt("Hoeveel bitterballen wilt u toevoegen (8 of 16)?")                                  //Grote van de schaal van de bitterballen
        if (bitterballen1 == 8) {
            number2 = prompt("Hoeveel bitterbalschalen van " + bitterballen1 + " stuks wilt u bestellen?")          //Hoeveelheid van bitterballen schaal 8
            bitterballen2 = bitterballen2 + number2
            if (number2 == "stop") {                                                                                //stop function
                break;
            }
            else if (number2 <0) {                                                                                  //kon geen manier vinden om dit mooi te doen, dus website 'crashed' als je negatieve getallen doet
                alert("Geen negatieve getallen")
                error = true
                break;
            }
        }
        else if (bitterballen1 == 16) {
            number3 = prompt("Hoeveel bitterbalschalen van " + bitterballen1 + " stuks wilt u bestellen?")          //Hoeveelheid van bitterballen schaal 16
            bitterballen3 = bitterballen3 + number3
            if (number3 == "stop") {
                break;
            }
            else if (number3 <0) {                                                                                  //kon geen manier vinden om dit mooi te doen, dus website 'crashed' als je negatieve getallen doet
                alert("Geen negatieve getallen")
                error = true
                break;
            }
        }
        else if (bitterballen1 == "stop") {                                                                         //Stop function
            break;
        }
        else {                                                                                                      //als er iets anders staat dan 8 16 of stop
            alert("U kunt alleen een keuze maken tussen 8 en 16. De snacks zijn niet toegevoegd aan de bestelling.")
        }

    }
    else if (order == "fris" ||order == "bier" || order == "wijn") {                                                // als je bier, fris of wijn gekozen hebt dan gaat die doen wat er in de if staat
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
            fris = fris + number
        }
        else if (order == "bier") {
            bier = bier + number
        }
        else if (order == "wijn") {
            wijn = wijn + number
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

if (error == true) {                                                                                            //als er een error is dan refreshed die de pagina
    alert("An unexpected error occured.\n\n Please try again try again later.")
    window.location.reload()
}
else {                                                                                                          // als er geen error is dan begint de laaste fase
    var wijnTotal = wijn*wijnPrice                                                                              //lijst van variabelen
    var bierTotal = bier*bierPrice                                                                              //zoveel variabelen omdat het anders niet werkten.
    var frisTotal = fris*frisPrice
    var bitterballen2Total = bitterballen2*bitterballen2Price
    var bitterballen3Total = bitterballen3*bitterballen3Price
    var totalPrice = (wijnTotal+bierTotal+frisTotal+bitterballen2Total+bitterballen3Total).toFixed(2);          //afronding op 2 kommagetallen omdat javascript niet altijd weet hoe rekenen werkt
    document.write("<h2 id='total'>Totaal</h2>")
    document.write("<a id='totalPrice'>€ " + totalPrice)
}