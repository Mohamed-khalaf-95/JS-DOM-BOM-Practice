let myForm = document.getElementById("insert-form");
let elNumInput = document.getElementById("number");
let HeadingInput = document.getElementById("card-heading");
let PriceInput = document.getElementById("card-price");
let infoInput = document.getElementById("info");
let imagInput = document.getElementById("imag");
let mycards = document.getElementById("cards");
let aler_message = document.getElementById("alert-image");
myForm.onsubmit = function (e) {
  e.preventDefault();
  document.querySelectorAll(".card").forEach((el) => el.remove());
  for (let i = 1; i <= elNumInput.value; i++) {
    // card
    let card = document.createElement("div");
    card.className = "card";
    //card info
    let cardInfo = document.createElement("p");
    cardInfo.className = "desc";
    let cardInfoDesc = document.createTextNode(infoInput.value);
    cardInfo.appendChild(cardInfoDesc);
    card.appendChild(cardInfo);
    //card image
    let myImg = document.createElement("img");
    if (imagInput.value === "") {
      aler_message.style.display = "block";
    } else {
      myImg.src = `imgs/${imagInput.files[0].name}`;
    }
    card.appendChild(myImg);
    //details
    let details = document.createElement("div");
    details.className = "details";
    //details title
    let title = document.createElement("h2");
    title.className = "title";
    let titleData = document.createTextNode(`${HeadingInput.value} ${i}`);
    title.appendChild(titleData);
    //details price
    let price = document.createElement("span");
    let priceData = document.createTextNode(`${PriceInput.value}$`);
    price.className = "price";
    price.appendChild(priceData);
    details.appendChild(title);
    details.appendChild(price);
    card.appendChild(details);
    //add card to page
    if (
      elNumInput.value !== "" &&
      HeadingInput.value !== "" &&
      PriceInput.value !== "" &&
      infoInput.value !== "" &&
      imagInput.value !== ""
    ) {
      mycards.appendChild(card);
    }
  }
};
