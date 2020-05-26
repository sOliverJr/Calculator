var test = function(){
    alert('Funktioniert')
}

var telNr = 0;
var rechnung = '';
var angezeigteZahl = '';
var ergebniss = 0;
// Speichert die eigegebene Zahl um diese mit dem letzten ergebniss zu verrechnen.
var zahlFuerErgebniss = 0;
// Speichert welches das zuletzt eingegebene zeichen ist, um danach die richtige Rechnung auszuführen.
var letzesZeichen = '+';

// Rechnet anhand des des letzten ergebnisses, der gespeicherten Zahl und dem gespeicherten Zeichen das neue Ergebniss.
var rechner = function(zahlZuRechnen){
    if (letzesZeichen == '+'){
        ergebniss = ergebniss + zahlZuRechnen;
    }else {
        alert('not available');
    }
}

// Ermittelt anhand der betätigten tasten die eingegebene Zahl.
var eingabeZahl = function(Zahl){
    angezeigteZahl = angezeigteZahl + Zahl;
    document.getElementById('div6a').innerHTML = angezeigteZahl;
}

// Vermittelt anhand der betätigten Tasten die eigegebenen Daten an den Rechnungsalgorhytmus.
var operation = function(operationZeichen){
    zahlFuerErgebniss = +angezeigteZahl;
    rechner(zahlFuerErgebniss);

    if(operationZeichen == '+') {
        letzesZeichen = '+';
        angezeigteZahl = angezeigteZahl + '+';
        rechnung = rechnung + angezeigteZahl;

    }else{
        alert('nichtVergeben');
    }
    document.getElementById('div1a').innerHTML = rechnung;
    angezeigteZahl = '';
    document.getElementById('div6a').innerHTML = 0;
}