// Dyr elementene
let eSkilpadde = document.getElementById("eskilpadde");
let geirGeit = document.getElementById("geir-geit");
let miaowMiaow = document.getElementById("miaow-miaow");
let moveMiaowsLeftLegBtn = document.getElementById("move-miaows-left-leg-btn");
let moveMiaowsRightLegBtn = document.getElementById(
  "move-miaows-right-leg-btn"
);

// Status på vinneren
let winnerStatus = document.getElementById("winner-status");

// Start verdi for dyrene for oppdatering senere i koden
let runESkilpadde = 0;
let runGeit = 0;
let runMiaow = 0;

// Brukt global variabel for å ha tilgang til den på begge funsjonenen
let interVal;

// Funksjon for å animere skilpadden
function eSkilpaddeRun() {
  interVal = setInterval(function () {
    if (runESkilpadde >= 800) {
      clearInterval(interVal);
      winnerStatus.innerHTML = "eSkilpadde vant!";
    } else {
      runESkilpadde += 3;
    }

    eSkilpadde.style.left = runESkilpadde + "px";
  }, 1000);
}

// Start animasjonen for skilpadden
eSkilpaddeRun();

// Funksjon for å animere geiten
function geirGeitRun() {
  interVal = setInterval(function () {
    // Generer tilfeldig sjanse for å endre retning
    let randomChance = Math.floor(Math.random() * 100);

    if (runGeit >= 800) {
      clearInterval(interVal);
      winnerStatus.innerHTML = "GeirGeit vant!";
    } else if (randomChance <= 20) {
      runGeit -= 10; // Reduser avstanden med 10 ved 20% sjanse
    } else {
      runGeit += 12; // Øk avstanden med 12 ellers
    }

    geirGeit.style.left = runGeit + "px";
  }, 500);
}

// Start animasjonen for geiten
geirGeitRun();

/* 
Funksjon for å animere katten (som ikke fungerer helt som forventet)
Vi klarte ikke å få katten til å fungere som ønsket, og det var ikke nok tid til å løse problemene.
*/
function miaowMiaowRun() {
  // Sjekk om katten har nådd målet på 800px
  if (runMiaow >= 800) {
    miaowMiaow.style.pointerEvents = "none"; // Deaktiver knappene når katten vinner
    winnerStatus.innerHTML = "MiaowMiaow vant!";
    return;
  }
  // Generer en tilfeldig avstand mellom 5 og 15 for katten
  runMiaow = Math.floor(Math.random() * 10) + 5;
}

// Katten knappene
moveMiaowsLeftLegBtn.onclick = miaowMiaowRun;
moveMiaowsRightLegBtn.onclick = miaowMiaowRun;
