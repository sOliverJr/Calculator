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
    }else if (letzesZeichen == '-'){
        ergebniss = ergebniss - zahlZuRechnen;
    }else if (letzesZeichen == '*'){
        ergebniss = ergebniss * zahlZuRechnen;
    }else if (letzesZeichen == '/'){
        ergebniss = ergebniss / zahlZuRechnen;
    }else if (letzesZeichen == '%'){
        ergebniss = ergebniss % zahlZuRechnen;
    }else if (letzesZeichen == '+'){
        ergebniss = ergebniss + zahlZuRechnen;
    }else {
        alert('not available');
    }
}

// Ermittelt anhand der betätigten tasten die eingegebene Zahl.
var eingabeZahl = function(Zahl){
    document.getElementById('div1a').innerHTML = rechnung;
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

    }else if(operationZeichen == '-') {
        letzesZeichen = '-';
        angezeigteZahl = angezeigteZahl + '-';
        rechnung = rechnung + angezeigteZahl;

    }else if(operationZeichen == '*') {
        letzesZeichen = '*';
        angezeigteZahl = angezeigteZahl + '*';
        rechnung = rechnung + angezeigteZahl;

    }else if(operationZeichen == '/') {
        letzesZeichen = '/';
        angezeigteZahl = angezeigteZahl + '/';
        rechnung = rechnung + angezeigteZahl;

    }else if(operationZeichen == '%') {
        letzesZeichen = '%';
        angezeigteZahl = angezeigteZahl + '%';
        rechnung = rechnung + angezeigteZahl;

    }else {
        alert('not available')
    }
    document.getElementById('div1a').innerHTML = rechnung;
    angezeigteZahl = '';
    document.getElementById('div6a').innerHTML = 0;
}

var istGleich = function(){
    if (telNr == 0){
        zahlFuerErgebniss = +angezeigteZahl;
        rechner(zahlFuerErgebniss);
        document.getElementById('div6a').innerHTML = ergebniss;
        rechnung = rechnung + angezeigteZahl;
        document.getElementById('div1a').innerHTML = rechnung;
        angezeigteZahl = '';
        rechnung = '';
        ergebniss = 0;
        zahlFuerErgebniss = 0;
        letzesZeichen = '+';
    }else {
        document.getElementById('div6a').innerHTML = telNr;
        rechnung = rechnung + angezeigteZahl;
        document.getElementById('div1a').innerHTML = rechnung;
        angezeigteZahl = '';
        rechnung = '';
        ergebniss = 0;
        zahlFuerErgebniss = 0;
        letzesZeichen = '+';
        telNr = 0;
    }
}

var zurueck = function() {
    angezeigteZahl = '';
    document.getElementById('div6a').innerHTML = angezeigteZahl;
}

var reset = function() {
    angezeigteZahl = '0';
    document.getElementById('div6a').innerHTML = angezeigteZahl;
    rechnung = '';
    document.getElementById('div1a').innerHTML = rechnung;
    ergebniss = 0;
    zahlFuerErgebniss = 0;
    letzesZeichen = '+';
    angezeigteZahl = '';
}

var pi = function() {
    if(ergebniss == 7469){
        telNr = angezeigteZahl;
    }else {
        angezeigteZahl = 3.14;
        document.getElementById('div6a').innerHTML = angezeigteZahl;
    }
}