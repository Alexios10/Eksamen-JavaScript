// Voksenbilett elementene
let increaseAdultTicketsBtn = document.getElementById(
  "increase-adult-tickets-btn"
);
let decreaseAdultTicketsBtn = document.getElementById(
  "decrease-adult-tickets-btn"
);
let numberOfAdultTicketsP = document.getElementById(
  "number-of-adult-tickets-p"
);

// Barnebilett elementene
let increaseChildrenTicketsBtn = document.getElementById(
  "increase-children-tickets-btn"
);
let decreaseChildrenTicketsBtn = document.getElementById(
  "decrease-children-tickets-btn"
);
let numberOfChildrenTicketsP = document.getElementById(
  "number-of-children-tickets-p"
);

// output diven
let summaryDiv = document.getElementById("summary-div");

// Kjøp knappen
let buyBtn = document.getElementById("buy-btn");

// Objekt med billettpriser
const ticketPrices = {
  adultTicketPrice: 150,
  childTicketPrice: 90,
};

// Start verdi for tellere for antall billetter
let adultCounter = 0;
let childCounter = 0;

// Funksjon for å oppdatere antall billetter og kjøpsoversikten i sanntid
function counter() {
  // Oppdater antall billetter lagt til
  numberOfAdultTicketsP.innerHTML = `Antall voksenbilletter: ${adultCounter}`;
  numberOfChildrenTicketsP.innerHTML = `Antall barnebilletter: ${childCounter}`;

  // Beregn totalpriser for voksen- og barnebilletter
  let totalAdultPrice = adultCounter * ticketPrices.adultTicketPrice;
  let totalChildPrice = childCounter * ticketPrices.childTicketPrice;

  // Beregn totalpris for billettene
  let totalPrice = totalAdultPrice + totalChildPrice;

  // Oppdater HTML taggene
  summaryDiv.innerHTML = `
<h3>Kjøpsoversikt</h3>
<p>Totalpris voksenbilletter: ${totalAdultPrice},-</p>
<p>Totalpris barnebilletter: ${totalChildPrice},-</p>
<p>Totalpris: ${totalPrice},-</p>`;
}

// Funksjoner for å øke og redusere antall voksenbilletter
function increaseAdultTickets() {
  adultCounter++;
  counter();
}

function decreaseAdultTickets() {
  if (adultCounter > 0) {
    adultCounter--;
    counter();
  }
}

// Voksenbillett knappene for å øke og redusere verdien
increaseAdultTicketsBtn.onclick = increaseAdultTickets;
decreaseAdultTicketsBtn.onclick = decreaseAdultTickets;

// Funksjoner for å øke og redusere antall barnebilletter
function increaseChildrenTickets() {
  childCounter++;
  counter();
}

function decreaseChildrenTickets() {
  if (childCounter > 0) {
    childCounter--;
    counter();
  }
}

// Barnebillett knappene for å øke og redusere verdien
increaseChildrenTicketsBtn.onclick = increaseChildrenTickets;
decreaseChildrenTicketsBtn.onclick = decreaseChildrenTickets;

// Funksjon for 'kjøp'-knappen som oppdaterer output basert på valgte billetter
function buyTickets() {
  if (adultCounter + childCounter === 0) {
    summaryDiv.innerHTML = `<h3>Ops du må velge billetter!</h3>`;
  } else if (adultCounter === 2 && childCounter === 3) {
    summaryDiv.innerHTML = `
<h3>Billettene er kjøpt</h3>
<p>Ha en fin kinooplevelse!<p>`;
  } else {
    summaryDiv.innerHTML = `
<h3>Noe er feil!</h3>
<p>Jeg er AI og ser at dere er en familie på 2 voksne og 3 barn. Velg riktig antall billetter :)<p>`;
  }
}

// Kjøp knappen
buyBtn.onclick = buyTickets;
