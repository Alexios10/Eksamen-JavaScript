// Glass1 venstre og glass2 høyre elementer
let glass1 = document.getElementById("glass-1-content");
let glass2 = document.getElementById("glass-2-content");

// Katt bildene
let catLeftImg = document.getElementById("cat-left");
let catRightImg = document.getElementById("cat-right");

// Kelner bildet
let waiterImg = document.getElementById("waiter");

// Output diven
let outputDiv = document.getElementById("output-div");

// Oppdatere meldinger for output diven
let updateOutput = [
  "Nå er glassene fylt opp",
  "Glassene er fylt opp halvveis med julebrus",
  "Glasset til venstre er tomt",
  "Glasset til høyre er tomt",
];

// Start verdi for tellere for høyden på glassene
let catLeftcounter = 0;
let catRightcounter = 0;

// Funksjon for kelner
function waiter() {
  // Sjekk om begge glassene er fylt opp til 80px
  if (catLeftcounter >= 80 && catRightcounter >= 80) {
    glass1.style.height = "80px";
    glass2.style.height = "80px";
    return;
  } else {
    // Øk høyden på begge glassene med 40px
    catLeftcounter += 40;
    catRightcounter += 40;
  }

  // Oppdater høyden på glassene
  glass1.style.height = catLeftcounter + "px";
  glass2.style.height = catRightcounter + "px";

  // Oppdater output-meldingen basert på høyden på glassene
  if (catLeftcounter >= 80 && catRightcounter >= 80) {
    outputDiv.innerHTML = updateOutput[0];
  } else if (catLeftcounter >= 40 && catRightcounter >= 40) {
    outputDiv.innerHTML = updateOutput[1];
  }
}

// kelner Knappen
waiterImg.onclick = waiter;

// Funksjon for venstre katt
function catLeft() {
  // Sjekk om glass 1 er tomt
  if (glass1.offsetHeight <= 0) {
    glass1.style.height = "0px";
    return;
  } else {
    // Reduser høyden på glass 1 med 20px
    catLeftcounter -= 20;
  }

  // Oppdater høyden på glass 1
  glass1.style.height = catLeftcounter + "px";

  // Oppdater output-meldingen basert på høyden på glass 1
  if (catLeftcounter <= 0) {
    outputDiv.innerHTML = updateOutput[2];
  }
}

// Venstre katt knappen
catLeftImg.onclick = catLeft;

// Funksjon for høyre katt
function catRight() {
  // Sjekk om glass 2 er tomt
  if (glass2.offsetHeight <= 0) {
    glass2.style.height = "0px";
    return;
  } else {
    // Reduser høyden på glass 2 med 20px
    catRightcounter -= 20;
  }

  // Oppdater høyden på glass 2
  glass2.style.height = catRightcounter + "px";

  // Oppdater output-meldingen basert på høyden på glass 2
  if (catRightcounter <= 0) {
    outputDiv.innerHTML = updateOutput[3];
  }
}

// Høyre katt kanppen
catRightImg.onclick = catRight;
