const icons = ["fa-air-freshener",
"fa-angry",
"fa-baby-carriage",
"fa-bacteria",
"fa-biking",
"fa-biohazard",
"fa-comment-dollar",
"fa-ankh"];

let cards = document.querySelectorAll('.card');
/* let iconContainers = document.querySelectorAll('.fas');
const iconContainersArray = Array.from(iconContainers); */

const iconContainersArray = Array.from(document.querySelectorAll('.fas'));  //dann löschen die variable let iconContainer = ... 

/* let openCards = 0; // Zähler, wieviele Kraten pro Runde aufgedeckt sind */
let openCardsArray = []; 


for (icon of icons) {
  for (let i = 0; i < 2; i ++) {
    let rnd = Math.floor(Math.random() * iconContainersArray.length);  // Math.floor - rundet das Zahl, z.B. 1.3 => Math.floor = 1
    iconContainersArray.splice(rnd, 1)[0].classList.add(icon);
  }
}

for (card of cards) {
  card.addEventListener('click', (e) => {   // e- event generiert daten
    if(openCardsArray.length < 2 && e.currentTarget != openCardsArray[0] && e.currentTarget.classList.length == 1) {   //e.target ist geoffnete Karte ist nicht gleich die gleiche Karte
      e.currentTarget.children[0].style.display = 'inline-block';
      openCardsArray.push(e.currentTarget);
      /* openCards ++;  */ 
    }
    if (openCardsArray.length == 2) {  // openCards container mit der ertse geoffnete karte classList[1] ist gleich mit der nächste Karte   // classList[1] ist wenn ein mal click und openCardsArray[1] ist die zweite geoffnete Karte, aber ein mal click
      if (openCardsArray[0].children[0].classList[1] == openCardsArray[1].children[0].classList[1]) {
        openCardsArray[0].classList.add('solved');
        openCardsArray[1].classList.add('solved');

/* for (openCard of openCardsArray) {
  openCard.classList.add('solved');   // 1 variante mann kann auch so schreiben stattdessen obere
}

openCardsArray.forEach(elem => elem.classList.add('solved'));  // 2 variante mann kann uch so schreiben stattdessen obere
 */


        clearCounters();
      }else {
        setTimeout(() => {
          openCardsArray[0].children[0].style.display = 'none';
          openCardsArray[1].children[0].style.display = 'none';

/* openCardsArray.forEach(elem => elem.children[0].style.display = 'none'); // 1 variante wie mann kann schreiben stattdesse die obere */

          clearCounters();        
        }, 2000);
      }
    }
  })
}

function clearCounters() {
  openCardsArray = [];
  openCards = 0;
}

