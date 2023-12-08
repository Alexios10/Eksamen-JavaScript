// Dyr elementene
let eSkilpadde = document.getElementById("eskilpadde");
let geirGeit = document.getElementById("geir-geit");
let miaowMiaow = document.getElementById("miaow-miaow");
let moveMiaowsLeftLegBtn = document.getElementById("move-miaows-left-leg-btn");
let moveMiaowsRightLegBtn = document.getElementById(
  "move-miaows-right-leg-btn"
);

// Vinner status h2 elemente
let winnerStatus = document.getElementById("winner-status");

// Start verdi for dyrene for oppdatering senere i koden
let runESkilpadde = 0;
let runGeit = 0;
let runMiaow = 0;

// Brukt global variabel for å ha tilgang til den på begge funsjonenen
let interVal;

// Funksjonen for skilpadden
function eSkilpaddeRun() {
  interVal = setInterval(function () {
    // Sjekk om skilpadden har nådd målet
    if (runESkilpadde >= 800) {
      clearInterval(interVal);
      winnerStatus.innerHTML = "eSkilpadde vant!";
    } else if (runGeit >= 400 || runMiaow >= 400) {
      // Hvis geiten eller katten har nådd halvveis, senk skilpadden og øk posisjonen raskere
      eSkilpadde.style.top = "550px";
      runESkilpadde += 60;
    } else {
      // Ellers øk posisjonen med en standard verdi
      runESkilpadde += 3;
    }

    // Oppdater skilpaddens posisjon
    eSkilpadde.style.left = runESkilpadde + "px";
  }, 1000);
}

// Start animasjonen for skilpadden
eSkilpaddeRun();

// Funksjonen for geiten
function geirGeitRun() {
  interVal = setInterval(function () {
    // Generer tilfeldig sjanse for å endre retning
    let randomChance = Math.floor(Math.random() * 100);

    // Sjekk om geiten har nådd målet
    if (runGeit >= 800) {
      clearInterval(interVal);
      winnerStatus.innerHTML = "GeirGeit vant!";
    } else if (randomChance <= 20) {
      // Reduser posisjonen med 10 ved 20% sjanse
      runGeit -= 10;
    } else {
      // Ellers øk posisjonen med 12
      runGeit += 12;
    }

    // Oppdater geitens posisjon
    geirGeit.style.left = runGeit + "px";
  }, 500);
}

// Start animasjonen for geiten
geirGeitRun();

/* 
katt
Vi fikk ikke fuksjonen på katten til å fungere helt og tiden strakk ikke til
*/
function miaowMiaowRun() {
  if (runMiaow >= 800) {
    miaowMiaow.style.pointerEvents = "none";
    winnerStatus.innerHTML = "MiaowMiaow vant!";
    return;
  }

  runMiaow = Math.floor(Math.random() * 10) + 5;
}

moveMiaowsLeftLegBtn.onclick = miaowMiaowRun;
moveMiaowsRightLegBtn.onclick = miaowMiaowRun;
