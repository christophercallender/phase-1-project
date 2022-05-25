function activeMain() {
   document.querySelector('body > nav').remove();
   document.querySelector('body').insertAdjacentHTML(
      'afterbegin',
      `<nav class="navbar navbar-expand-sm navbar-dark bg-dark navbar-inverse p-3 justify-content-center">
   <a class="navbar-brand" href="#">
      <img src="./Apple Core.png" width="15px" alt="apple core logo" href="#" />
   </a>
   <ul class="navbar-nav align-top">
      <li class="nav-item"><a class="nav-link" href="#">Mac</a></li>
      <li class="nav-item"><a class="nav-link" href="#">iMac</a></li>
      <li class="nav-item"><a class="nav-link" href="#">MacBook</a></li>
      <li class="nav-item"><a class="nav-link" href="#">iPad</a></li>
      <li class="nav-item"><a class="nav-link" href="#">iPhone</a></li>
      <li class="nav-item"><a class="nav-link" href="#">Watch</a></li>
      <li class="nav-item"><a class="nav-link" href="#">♥</a></li>
      <li class="nav-item"><a class="nav-link" href="#">Sign Up</a></li>
      <li class="nav-item"><a class="nav-link" href="#">Sign In</a></li>
      &nbsp;&nbsp;&nbsp;
      <li>
         <form class="form-inline my-2 my-lg-0">
            <div class="input-group">
               <input
                  class="form-control"
                  type="search"
                  id="search"
                  placeholder="Search"
                  aria-label="Search"
               />
               <div class="input-group-append">
                  <button class="btn btn-outline-secondary" type="submit">
                     Search
                  </button>
               </div>
            </div>
         </form>
      </li>
   </ul>
</nav>`
   );
}
function activeMac() {
   activeMain();
   document.querySelector('body > nav > ul > li:nth-child(1)').remove();
   document
      .querySelector('body > nav > ul')
      .insertAdjacentHTML(
         'afterbegin',
         '<li class="nav-item"><a class="nav-link active" href="#">Mac</a></li>'
      );
}
function activeiMac() {
   activeMain();
   document.querySelector('body > nav > ul > li:nth-child(2)').remove();
   document
      .querySelector('body > nav > ul > li:nth-child(1)')
      .insertAdjacentHTML(
         'afterend',
         '<li class="nav-item"><a class="nav-link active" href="#">iMac</a></li>'
      );
}
function activeMacBook() {
   activeMain();
   document.querySelector('body > nav > ul > li:nth-child(3)').remove();
   document
      .querySelector('body > nav > ul > li:nth-child(2)')
      .insertAdjacentHTML(
         'afterend',
         '<li class="nav-item"><a class="nav-link active" href="#">MacBook</a></li>'
      );
}
function activeiPad() {
   activeMain();
   document.querySelector('body > nav > ul > li:nth-child(4)').remove();
   document
      .querySelector('body > nav > ul > li:nth-child(3)')
      .insertAdjacentHTML(
         'afterend',
         '<li class="nav-item"><a class="nav-link active" href="#">iPad</a></li>'
      );
}
function activeiPhone() {
   activeMain();
   document.querySelector('body > nav > ul > li:nth-child(5)').remove();
   document
      .querySelector('body > nav > ul > li:nth-child(4)')
      .insertAdjacentHTML(
         'afterend',
         '<li class="nav-item"><a class="nav-link active" href="#">iPhone</a></li>'
      );
}
function activeWatch() {
   activeMain();
   document.querySelector('body > nav > ul > li:nth-child(6)').remove();
   document
      .querySelector('body > nav > ul > li:nth-child(5)')
      .insertAdjacentHTML(
         'afterend',
         '<li class="nav-item"><a class="nav-link active" href="#">Watch</a></li>'
      );
}
function activeHeart() {
   activeMain();
   document.querySelector('body > nav > ul > li:nth-child(7)').remove();
   document
      .querySelector('body > nav > ul > li:nth-child(6)')
      .insertAdjacentHTML(
         'afterend',
         '<li class="nav-item"><a class="nav-link active" href="#">♥</a></li>'
      );
}
function activeSignUp() {
   activeMain();
   document.querySelector('body > nav > ul > li:nth-child(8)').remove();
   document
      .querySelector('body > nav > ul > li:nth-child(7)')
      .insertAdjacentHTML(
         'afterend',
         '<li class="nav-item"><a class="nav-link active" href="#">Sign Up</a></li>'
      );
}
function activeSignIn() {
   activeMain();
   document.querySelector('body > nav > ul > li:nth-child(9)').remove();
   document
      .querySelector('body > nav > ul > li:nth-child(8)')
      .insertAdjacentHTML(
         'afterend',
         '<li class="nav-item"><a class="nav-link active" href="#">Sign In</a></li>'
      );
}
