document.addEventListener('DOMContentLoaded', () => {
   //==========assign variables to navigation buttons==========//
   let appleCore = document.querySelector('body > nav > a');
   let mac = document.querySelector('body > nav > ul > li:nth-child(1) > a');
   let iMac = document.querySelector('body > nav > ul > li:nth-child(2) > a');
   let macBook = document.querySelector(
      'body > nav > ul > li:nth-child(3) > a'
   );
   let iPad = document.querySelector('body > nav > ul > li:nth-child(4) > a');
   let iPhone = document.querySelector('body > nav > ul > li:nth-child(5) > a');
   let appleWatch = document.querySelector(
      'body > nav > ul > li:nth-child(6) > a'
   );
   let heart = document.querySelector('body > nav > ul > li:nth-child(7) > a');
   let signUp = document.querySelector('body > nav > ul > li:nth-child(8) > a');
   let signIn = document.querySelector('body > nav > ul > li:nth-child(9) > a');

   //==========add click event listeners to navigation buttons==========//
   appleCore.addEventListener('click', () => {
      //==========parameters: search keyword, in title(1), series(3) or model(5))==========//
      showSelected();
   });
   mac.addEventListener('click', () => {
      showSelected('Mac ', 3);
   });
   iMac.addEventListener('click', () => {
      showSelected('iMac', 3);
   });
   macBook.addEventListener('click', () => {
      showSelected('MacBook', 3);
   });
   iPad.addEventListener('click', () => {
      showSelected('iPad', 5);
   });
   iPhone.addEventListener('click', () => {
      showSelected('iPhone', 5);
   });
   appleWatch.addEventListener('click', () => {
      showSelected('Watch', 1);
   });
   heart.addEventListener('click', () => {
      showHearts();
   });
   signUp.addEventListener('click', () => {
      showSignUp();
   });
   signIn.addEventListener('click', () => {
      showSignIn();
   });

   function showSelected(assignKeyword = null, keywordNode = null) {
      //==========empty cards list (when page loads or navigation button is clicked)==========//
      if (document.querySelector('#cards')) {
         document.querySelector('#cards').remove();
      }
      if (document.querySelector('#signupForm')) {
         document.querySelector('#signupForm').remove();
      }
      if (document.querySelector('#signinForm')) {
         document.querySelector('#signinForm').remove();
      }
      //==========fetch cards data==========//
      fetch('https://apple-products.api.stdlib.com/apple-products@dev/')
         .then((response) => response.json())
         .then((object) => {
            const products = object.data;
            for (let i = 0; i < products.length; i++) {
               //==========select best card images==========//
               let cardImage = document.createElement('img');
               let product = products[i];
               let replacementImage = products[i + 1];
               if (i < 5) {
                  cardImage = `${product['images'][1]['url']}`;
               } else if (i == 5) {
                  cardImage = `${replacementImage['images'][1]['url']}`;
               } else if (i > 5 && i <= 21) {
                  cardImage = `${product['images'][1]['url']}`;
               } else if (i >= 22 && i <= 26) {
                  cardImage = `${product['images'][0]['url']}`;
               } else {
                  cardImage = `${product['images'][0]['url']}`;
               }
               //==========create each card (with image, title, series, model, Amazon link, and "like" button)==========//
               const card = document.createElement('div');
               card.setAttribute('class', 'col py-2 my-2');
               card.setAttribute('id', `card${i}`);
               card.innerHTML = `
                  <div class="card border-light" style="width: 18rem">
                     <img class="card-img-top" src="${cardImage}" alt="${product.modelname}" />
                     <div class="card-body">
                        <h5 class="card-title">${product.category}</h5>
                        <p class="card-text">Series: ${product.series}</p>
                        <p class="card-text">Model: ${product.modelname}</p>
                        <a href="https://www.amazon.com/s?k=${product.modelname}"
                        class="btn btn-outline-secondary" target="_blank" >Buy at Amazon</a>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a class="heart btn btn-white" target="_blank" >♡</a>
                     </div>
                  </div>
               `;
               //==========add click event listeners to each card's heart==========//
               let heart = document.querySelectorAll('.heart');
               heart.forEach((e) => e.addEventListener('click', handleHeart));
               //==========create cards container (on first loop iteration only)==========//
               if (document.querySelector('#cards') == null) {
                  document
                     .querySelector('#cardlist')
                     .insertAdjacentHTML(
                        'beforeend',
                        '<div id="cards" class="row"></div>'
                     );
               }
               //==========append card to list (on each loop iteration)==========//
               document.querySelector('#cardlist').appendChild(card);
            }
            //==========remove cards made from duplicate API data==========//
            document.querySelector('#card18').remove();
            document.querySelector('#card21').remove();
            document.querySelector('#card29').remove();
            //==========exit loop and sort cards alphabetically==========//
            sortProducts();
         })
         //==========if category button was clicked, remove cards of other categories==========//
         .then(() => {
            let length = document.querySelectorAll('.col').length;
            let toRemove = [];
            for (let i = 0; i < length; i++) {
               //==========target text of i in keywordNode: title(1), series(3) or model(5)==========//
               let keyword =
                  document.querySelectorAll('.col')[i].childNodes[1]
                     .childNodes[3].childNodes[`${keywordNode}`].innerText;
               //==========if keyword (assigned by button click) is not found, remove parent node (card)==========//
               if (keyword.indexOf(`${assignKeyword}`) == -1) {
                  toRemove.push(document.querySelectorAll('.col')[i]);
               }
            }
            for (let i = 0; i < toRemove.length; i++) {
               toRemove[i].remove();
            }
         });
   }
   showSelected();

   function sortProducts() {
      //==========create an array of all product names and an array of all corresponding parent nodes==========//
      let length = document.querySelectorAll('.col').length;
      let products = []; //series + model
      let nodes = [];
      for (let i = 0; i < length; i++) {
         products.push(
            document.querySelectorAll('.col')[i].childNodes[1].childNodes[3]
               .childNodes[3].innerHTML +
               document.querySelectorAll('.col')[i].childNodes[1].childNodes[3]
                  .childNodes[5].innerHTML
         );
         nodes.push(document.querySelectorAll('.col')[i]);
      }
      //==========combine each iteration of each array into key-value-like nested arrays==========//
      let pairs = [];
      for (let i = 0; i < length; i++) {
         let keyValues = [];
         keyValues.push(products[i], nodes[i]);
         pairs.push(keyValues);
      }
      //==========sort by model names, reverse if already sorted==========//
      let pairsSorted = [...pairs];
      pairsSorted.sort().reverse();
      //==========append each card (each parent node) to list (in order)==========//
      for (let i = 0; i < length; i++) {
         let value = pairsSorted[i][1]; //[i] = key, [1] = value
         document.querySelector('#cards').appendChild(value);
      }
   }

   //==========if empty heart is clicked, fill, if filled heart is clicked, empty==========//
   function handleHeart(e) {
      if (e.target.textContent === '♡') {
         return (e.target.textContent = '♥');
      } else if (e.target.textContent === '♥') {
         return (e.target.textContent = '♡');
      }
   }

   function showHearts() {
      let length = document.querySelectorAll('.col').length;
      let heartless = [];
      //==========loop through cards, if heart is not selected push parent node to array==========//
      for (let i = 0; i < length; i++) {
         if (
            document.querySelectorAll('.col')[i].childNodes[1].childNodes[3]
               .childNodes[9].innerHTML === '♡'
         ) {
            heartless.push(document.querySelectorAll('.col')[i]);
         }
      }
      //==========loop through "heartless" array and remove parent node for each==========//
      for (let i = 0; i < heartless.length; i++) {
         heartless[i].remove();
      }
   }
});
