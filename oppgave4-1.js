// Voksenbilletter
let increaseAdultTicketsBtn = document.getElementById(
  "increase-adult-tickets-btn"
);
let decreaseAdultTicketsBtn = document.getElementById(
  "decrease-adult-tickets-btn"
);
let numberOfAdultTickets = document.getElementById("number-of-adult-tickets-p");

// Barnebilletter
let increaseChildrenTicketsBtn = document.getElementById(
  "increase-children-tickets-btn"
);
let decreaseChildrenTicketsBtn = document.getElementById(
  "decrease-children-tickets-btn"
);
let numberOfChildrenTickets = document.getElementById(
  "number-of-children-tickets-p"
);

// Oppsummering og Kjøp-knapp
let summaryDiv = document.getElementById("summary-div");
let buyBtn = document.getElementById("buy-btn");

// bilder for billettene
let billett1 = document.getElementById("billett-1");
let billett2 = document.getElementById("billett-2");
let billett3 = document.getElementById("billett-3");
let billett4 = document.getElementById("billett-4");
let billett5 = document.getElementById("billett-5");

// Priser for billettene
const ticketPrices = {
  // Dette objektet må brukes for å få tak i billettprisene.
  adultTicketPrice: 150,
  childTicketPrice: 90,
};

// Start verdi for tellere for voksen og barnebilletter
let adultCounter = 0;
let childCounter = 0;

// Funksjonen for å oppdatere tellere og melding
function counter() {
  numberOfAdultTickets.innerHTML = `Antall voksenbilletter: ${adultCounter}`;
  numberOfChildrenTickets.innerHTML = `Antall barnebilletter: ${childCounter}`;

  let totalAdultPrice = adultCounter * ticketPrices.adultTicketPrice;
  let totalChildPrice = childCounter * ticketPrices.childTicketPrice;

  let totalPrice = totalAdultPrice + totalChildPrice;

  // Diven for å vise oppsummering
  // Der brukt vi tagger inni selve diven
  summaryDiv.innerHTML = `
  <h3>Kjøpsoversikt</h3>

  <p>Totalpris voksenbilletter: ${totalAdultPrice},-
  </p>
  <p>Totalpris barnebilletter: ${totalChildPrice},-</p>
  <p>Totalpris: ${totalPrice},-</p>`;
}

// Funksjonen for å øke antall voksenbilletter
function increaseAdultTickets() {
  adultCounter++;
  counter();
}

// Funksjonen for å reduser antall voksenbilletter
function decreaseAdultTickets() {
  if (adultCounter > 0) {
    adultCounter--;
    counter();
  }
}

// Knappene for å øke eller redusere voksenbilletter
increaseAdultTicketsBtn.onclick = increaseAdultTickets;
decreaseAdultTicketsBtn.onclick = decreaseAdultTickets;

// Funksjonen for å øke antall barnebilletter
function increaseChildrenTickets() {
  childCounter++;
  counter();
}

// Funksjonen for å redusere antall barnebilletter
function decreaseChildrenTickets() {
  if (childCounter > 0) {
    childCounter--;
    counter();
  }
}

// Knappene for å øke eller redusere barnebilletter
increaseChildrenTicketsBtn.onclick = increaseChildrenTickets;
decreaseChildrenTicketsBtn.onclick = decreaseChildrenTickets;

// Bilde for kjøpte billetter
let img = `<img src="/images/billett.png">`;

// Funksjonen for kjøp av billetter
function buyTickets() {
  if (adultCounter + childCounter === 0) {
    // Vis en melding hvis ingen billetter er valgt
    summaryDiv.innerHTML = `
    <h3>Ops du må velge billetter!</h3>`;
  } else if (adultCounter === 2 && childCounter === 3) {
    // Vis en suksessmelding og oppdater bilde hvis riktig antall billetter er valgt
    summaryDiv.innerHTML = `
  <h3>Bilettene er kjøpt</h3>
  <p>Ha en fin kinooplevelse!<p>
  `;
    billett1.innerHTML = img;
    billett2.innerHTML = img;
    billett3.innerHTML = img;
    billett4.innerHTML = img;
    billett5.innerHTML = img;
  } else {
    // Vis en feilmelding hvis billett valge er feil
    summaryDiv.innerHTML = `
  <h3>Noe er feil!</h3>
  <p>Jeg er AI og ser at dere er en familie på 2 voksne og 3 barn. Velg riktig antall :)<p>
  `;
  }
}

// Kjøp knappen
buyBtn.onclick = buyTickets;
